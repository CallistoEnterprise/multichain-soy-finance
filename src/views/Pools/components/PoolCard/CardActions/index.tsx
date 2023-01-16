import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { Flex, Text, Box } from 'uikit2'
import { useTranslation } from 'contexts/Localization'
import { PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import { useBlockLatestTimestamp } from 'utils'
import { getTimeFromTimeStamp2 } from 'utils/formatTimePeriod'
import { getBalanceNumber } from 'utils/formatBalance'
import ApprovalAction from './ApprovalAction'
import StakeActions from './StakeActions'
import HarvestActions from './HarvestActions'
import Balance from 'components/Balance'

const InlineText = styled(Text)`
  display: inline;
`
const periodSeconds = 27 * 24 * 3600

interface CardActionsProps {
  pool: Pool
  stakedBalance: BigNumber
}

const CardActions: React.FC<CardActionsProps> = ({ pool, stakedBalance }) => {
  const {
    sousId,
    stakingToken,
    stakingTokenPrice,
    earningToken,
    harvest,
    poolCategory,
    userData,
    earningTokenPrice,
    isNew,
  } = pool
  // Pools using native CLO behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.CLO
  const { t } = useTranslation()
  // const allowance = userData?.allowance ? new BigNumber(userData.allowance) : BIG_ZERO
  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO
  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO
  const needsApproval = false // !allowance.gt(0) && !isBnbPool
  const isStaked = stakedBalance.gt(0)
  const isLoading = !userData

  const curTime = useBlockLatestTimestamp()

  const endStaking = userData ? userData.stakedStatus.endTime.toNumber() : 0
  const harvestDay = userData ? userData.stakedStatus.time.toNumber() : 0
  // const nextTimeStr = nextHarvest === 0 ? '' : getTimeFromTimeStamp2(nextHarvest)
  const endTimeStr = endStaking === 0 ? null : getTimeFromTimeStamp2(endStaking, curTime)
  const havestDayStr = harvestDay === 0 ? null : getTimeFromTimeStamp2(harvestDay + periodSeconds, curTime)

  const stakedTokenBalance = getBalanceNumber(stakedBalance, stakingToken.decimals)
  const stakedTokenDollarBalance = getBalanceNumber(
    stakedBalance.multipliedBy(stakingTokenPrice),
    stakingToken.decimals,
  )

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center">
          <Box display="inline">
            <InlineText
              color={!isNew ? 'textDisabled' : isStaked ? 'secondary' : 'textSubtle'}
              textTransform="uppercase"
              bold
              fontSize="12px"
            >
              {isStaked ? stakingToken.symbol : t('Stake')}{' '}
            </InlineText>
            <InlineText
              color={!isNew ? 'textDisabled' : isStaked ? 'textSubtle' : 'secondary'}
              textTransform="uppercase"
              bold
              fontSize="12px"
            >
              {isStaked ? t('Staked') : `${stakingToken.symbol}`}
            </InlineText>
          </Box>
          <Flex flexDirection="column">
            <>
              <Balance bold fontSize="20px" decimals={3} value={stakedTokenBalance} />
              {stakingTokenPrice !== 0 && (
                <Text fontSize="12px" color="textSubtle">
                  <Balance
                    fontSize="12px"
                    color={!isNew ? 'textDisabled' : 'textSubtle'}
                    decimals={2}
                    value={stakedTokenDollarBalance}
                    prefix="~"
                    unit=" USD"
                  />
                </Text>
              )}
            </>
          </Flex>
        </Flex>
        {harvest && (
          <>
            <Box display="inline" style={{ marginTop: 10 }}>
              <InlineText color={!isNew ? 'textDisabled' : 'secondary'} textTransform="uppercase" bold fontSize="12px">
                {`${earningToken.symbol} `}
              </InlineText>
              <InlineText color={!isNew ? 'textDisabled' : 'textSubtle'} textTransform="uppercase" bold fontSize="12px">
                {t('Earned')}
              </InlineText>
            </Box>
            <HarvestActions
              earnings={earnings}
              earningToken={earningToken}
              sousId={sousId}
              earningTokenPrice={earningTokenPrice}
              isBnbPool={isBnbPool}
              isLoading={isLoading}
              endTimeStr={endTimeStr}
              havestDayStr={havestDayStr}
              isNew={isNew}
            />
          </>
        )}
        {needsApproval ? (
          <ApprovalAction pool={pool} isLoading={isLoading} />
        ) : (
          <StakeActions
            isLoading={isLoading}
            pool={pool}
            stakingTokenBalance={stakingTokenBalance}
            stakedBalance={stakedBalance}
            isBnbPool={isBnbPool}
            isStaked={isStaked}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default CardActions
