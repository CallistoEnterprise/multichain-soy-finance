import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Flex, CardFooter, ExpandableLabel, Text, HelpIcon, useTooltip, Skeleton } from '@callisto-enterprise/soy-uikit2'
import { Pool } from 'state/types'
import { getTimeFromTimeStamp2 } from 'utils/formatTimePeriod'
import { useBlockLatestTimestamp } from 'utils'
import ExpandedFooter from './ExpandedFooter'

const periodSeconds = 27 * 24 * 3600

interface FooterProps {
  pool: Pool
  account: string
  totalCakeInVault?: BigNumber
}

const ExpandableButtonWrapper = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
  button {
    padding: 0;
  }
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`
const Footer: React.FC<FooterProps> = ({ pool, account }) => {
  // const { isAutoVault } = pool
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)
  const { userData, isNew } = pool
  // const manualTooltipText = t('You must harvest and compound your earnings from this pool manually.')
  // const autoTooltipText = t(
  //   'Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.',
  // )

  // const { targetRef, tooltip, tooltipVisible } = useTooltip(isAutoVault ? autoTooltipText : manualTooltipText, {
  //   placement: 'bottom',
  // })
  const curTime = useBlockLatestTimestamp()

  const endStaking = account && userData ? userData.stakedStatus.endTime.toNumber() : 0
  const harvestDay = userData ? userData.stakedStatus.time.toNumber() : 0

  // const nextTimeStr = nextHarvest === 0 ? '' : getTimeFromTimeStamp2(nextHarvest)
  const endTimeStr = endStaking === 0 ? '' : getTimeFromTimeStamp2(endStaking, curTime)
  const havestDayStr = harvestDay === 0 ? null : getTimeFromTimeStamp2(harvestDay + periodSeconds, curTime)

  const {
    targetRef: harvestTargetRef,
    tooltip: harvestTooltip,
    tooltipVisible: harvestTooltipVisible,
  } = useTooltip(
    t(
      isNew
        ? 'Once unlocking starts, the time starts according to your pool. After the time expires, you can collect your tokens.'
        : 'Next harvest (claim reward without deposited amount) available every 27 days.',
    ),
    {
      placement: 'bottom',
    },
  )

  return (
    <CardFooter>
      <Flex mb="2px" justifyContent="center" flexDirection="column">
        <Flex justifyContent="space-between">
          <Text small color={!isNew ? 'textDisabled' : "primary"}>
            {t(isNew ? 'Unlock in:' : 'Next Harvest In')}:
          </Text>
          {isNew && 
            <Flex>
              <Text small color="primary">{endTimeStr ? endTimeStr : t('~days')}</Text>
              <span ref={harvestTargetRef}>
                <HelpIcon color="textSubtle" width="20px" ml="6px" />
              </span>
            </Flex>
          }
        </Flex>
        {!isNew && (
          <Flex mb="0px" justifyContent="flex-start">
            {havestDayStr && havestDayStr !== 'Unstakable' ? <Text small>{havestDayStr}</Text> : <Skeleton width="200px" height="21px" />}
            <span ref={harvestTargetRef}>
              <HelpIcon color={!isNew ? 'textDisabled' : "textSubtle"} width="20px" ml="6px" />
            </span>
          </Flex>
        )}
        {harvestTooltipVisible && harvestTooltip}
      </Flex>
      {!isNew && <Line />}
      {!isNew && <ExpandableButtonWrapper>
        <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? t('Hide') : t('Details')}
        </ExpandableLabel>
      </ExpandableButtonWrapper>}
      {isExpanded && !isNew && <ExpandedFooter pool={pool} account={account} endTimeStr={endTimeStr} />}
    </CardFooter>
  )
}

export default Footer
