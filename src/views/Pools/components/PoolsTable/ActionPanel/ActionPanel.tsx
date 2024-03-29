import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Box,
  Button,
  Flex,
  HelpIcon,
  // Link,
  LinkExternal,
  MetamaskIcon,
  Skeleton,
  Text,
  // TimerIcon,
  useTooltip,
} from 'uikit2'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
// import { useBlock } from 'state/block/hooks'
import { useCakeVault } from 'state/pools/hooks'
import BigNumber from 'bignumber.js'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { useBlockLatestTimestamp } from 'utils'
import { getAddress, getPmoonVaultAddress } from 'utils/addressHelpers'
import { registerToken } from 'utils/wallet'
import { getBalanceNumber } from 'utils/formatBalance'
// import { getPoolBlockInfo } from 'views/Pools/helpers'
import { getTimeFromTimeStamp2 } from 'utils/formatTimePeriod'
import Harvest from './Harvest'
import Stake from './Stake'
import Apr from '../Apr'

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 700px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 700px;
  }
  to {
    max-height: 0px;
  }
`

const StyledActionPanel = styled.div<{ expanded: boolean }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.dropdown};
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 12px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 42px;
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

type MediaBreakpoints = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
}

interface ActionPanelProps {
  account: string
  pool: Pool
  userDataLoaded: boolean
  expanded: boolean
  breakpoints: MediaBreakpoints
}

const InfoSection = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  padding: 8px 8px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0;
    flex-basis: 230px;
  }
`
const periodSeconds = 27 * 24 * 3600

const ActionPanel: React.FC<ActionPanelProps> = ({ account, pool, userDataLoaded, expanded, breakpoints }) => {
  const {
    sousId,
    stakingToken,
    earningToken,
    totalStaked,
    // startBlock,
    // endBlock,
    contractAddress,
    isAutoVault,
    userData,
    isNew,
  } = pool
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getPmoonVaultAddress()
  // const { currentBlock } = useBlock()
  const { isXs, isSm, isMd } = breakpoints
  const showSubtitle = (isXs || isSm) && sousId === 0

  // const { blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
  //   getPoolBlockInfo(pool, currentBlock)

  const isMetaMaskInScope = !!window.ethereum?.isMetaMask
  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''

  const {
    totalCakeInVault,
    fees: { performanceFee },
  } = useCakeVault()

  const performanceFeeAsDecimal = performanceFee && performanceFee / 100
  const isManualCakePool = sousId === 0

  const getTotalStakedBalance = () => {
    if (isAutoVault) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(totalCakeInVault)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }

  const {
    targetRef: totalStakedTargetRef,
    tooltip: totalStakedTooltip,
    tooltipVisible: totalStakedTooltipVisible,
  } = useTooltip(t('Total amount of %symbol% staked in this pool', { symbol: stakingToken.symbol }), {
    placement: 'bottom',
  })

  const manualTooltipText = t('You must harvest your earnings from this pool after unlocking periods ends manually.')
  const autoTooltipText = t(
    'Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.',
  )

  const {
    //targetRef: tagTargetRef,
    tooltip: tagTooltip,
    tooltipVisible: tagTooltipVisible,
  } = useTooltip(isAutoVault ? autoTooltipText : manualTooltipText, {
    placement: 'bottom-start',
  })

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
      placement: 'bottom-start',
    },
  )

  const curTime = useBlockLatestTimestamp()

  const endStaking = userDataLoaded ? userData.stakedStatus.endTime.toNumber() : 0
  const endTimeStr = endStaking === 0 ? '' : getTimeFromTimeStamp2(endStaking, curTime)
  const harvestDay = userData ? userData.stakedStatus.time.toNumber() : 0
  const havestDayStr = harvestDay === 0 ? null : getTimeFromTimeStamp2(harvestDay + periodSeconds, curTime)

  const isWithdrawRequest = curTime - endStaking > 0 && endStaking === 0

  // const maxStakeRow = stakingLimit.gt(0) ? (
  //   <Flex mb="8px" justifyContent="space-between">
  //     <Text>{t('Max. stake per user')}:</Text>
  //     <Text>{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`}</Text>
  //   </Flex>
  // ) : null

  // const blocksRow =
  //   blocksRemaining || blocksUntilStart ? (
  //     <Flex mb="8px" justifyContent="space-between">
  //       <Text>{hasPoolStarted ? t('Ends in') : t('Starts in')}:</Text>
  //       <Flex>
  //         <Link external href={getCallistoExpLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
  //           <Balance fontSize="16px" value={blocksToDisplay} decimals={0} color="primary" />
  //           <Text ml="4px" color="primary" textTransform="lowercase">
  //             {t('Blocks')}
  //           </Text>
  //           <TimerIcon ml="4px" color="primary" />
  //         </Link>
  //       </Flex>
  //     </Flex>
  //   ) : (
  //     <Skeleton width="56px" height="16px" />
  //   )

  const aprRow = (
    <Flex justifyContent="space-between" alignItems="center" mb="8px">
      <Text>{isAutoVault ? t('APY') : t('APR')}:</Text>
      <Apr pool={pool} showIcon performanceFee={isAutoVault ? performanceFeeAsDecimal : 0} />
    </Flex>
  )

  const totalStakedRow = (
    <Flex justifyContent="space-between" alignItems="center" mb="8px">
      <Text maxWidth={['50px', '100%']}>{t('Total staked')}:</Text>
      <Flex alignItems="center">
        {totalStaked && totalStaked.gte(0) ? (
          <>
            <Balance fontSize="16px" value={getTotalStakedBalance()} decimals={0} unit={` ${stakingToken.symbol}`} />
            <span ref={totalStakedTargetRef}>
              <HelpIcon color="textSubtle" width="20px" ml="4px" />
            </span>
          </>
        ) : (
          <Skeleton width="56px" height="16px" />
        )}
        {totalStakedTooltipVisible && totalStakedTooltip}
      </Flex>
    </Flex>
  )

  return (
    <StyledActionPanel expanded={expanded}>
      <InfoSection>
        {/* {maxStakeRow} */}
        {/* {shouldShowBlockCountdown && blocksRow} */}
        {/* <Flex mb="8px" justifyContent={['flex-end', 'flex-end', 'flex-start']}>
          <LinkExternal href={`https://soyfinance.info/token/${getAddress(earningToken.address)}`} bold={false}>
            {t('See Token Info')}
          </LinkExternal>
        </Flex>
        <Flex mb="8px" justifyContent={['flex-end', 'flex-end', 'flex-start']}>
          <LinkExternal href={earningToken.projectLink} bold={false}>
            {t('View Project Site')}
          </LinkExternal>
        </Flex> */}

        <Flex mb="2px" justifyContent="space-between" flexDirection="column">
          {!isNew && (
            <Text small color={!isNew ? 'textDisabled' : 'primary'}>
              {t('Next Harvest In')}:
            </Text>
          )}
          {!isNew && (
            <Flex mb="0px" justifyContent="flex-start">
              {havestDayStr ? <Text small>{havestDayStr}</Text> : <Skeleton width="200px" height="21px" />}
              <span ref={harvestTargetRef}>
                <HelpIcon color={!isNew ? 'textDisabled' : 'textSubtle'} width="20px" ml="6px" mt="4px" />
              </span>
            </Flex>
          )}
          {harvestTooltipVisible && harvestTooltip}
        </Flex>
        <Flex mb="2px" justifyContent="space-between" flexDirection="column">
          <Text small color={!isNew ? 'textDisabled' : 'primary'}>
            {t(isNew ? 'Unlock in' : 'Cold Staking Ends In')}:
          </Text>
          <Flex>
            {isWithdrawRequest ? (
              <Skeleton width="200px" height="21px" />
            ) : (
              <Text small>{endTimeStr ? endTimeStr : '0day'}</Text>
            )}
            {isNew && (
              <span ref={harvestTargetRef}>
                <HelpIcon color="textSubtle" width="20px" ml="6px" mt="4px" />
              </span>
            )}
          </Flex>
        </Flex>

        {(isXs || isSm) && aprRow}
        {(isXs || isSm || isMd) && totalStakedRow}

        {poolContractAddress && (
          <Flex mb="8px" justifyContent={['flex-end', 'flex-end', 'flex-start']}>
            <LinkExternal
              href={`${CHAINS_CONSTANTS[chainId].explorer.url}/address/${
                isAutoVault ? cakeVaultContractAddress : poolContractAddress
              }/transactions`}
              bold={false}
              color={!isNew ? 'textDisabled' : 'primary'}
            >
              {t('View Contract')}
            </LinkExternal>
          </Flex>
        )}
        {account && isMetaMaskInScope && tokenAddress && (
          <Flex mb="8px" justifyContent={['flex-end', 'flex-end', 'flex-start']}>
            <Button
              variant="text"
              p="0"
              height="auto"
              onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals, chainId)}
            >
              <Text color={!isNew ? 'textDisabled' : 'primary'}>{t('Add to Metamask')}</Text>
              <MetamaskIcon ml="4px" />
            </Button>
          </Flex>
        )}
        {/* {!isNew && <ManualPoolTag />} */}
        {tagTooltipVisible && tagTooltip}
        {/* {!isNew && (
          <span ref={tagTargetRef}>
            <HelpIcon ml="4px" width="20px" height="20px" color={!isNew ? 'textDisabled' : "textSubtle"} />
          </span>
        )} */}
      </InfoSection>
      <ActionContainer>
        {showSubtitle && (
          <Text mt="4px" mb="16px" color={!isNew ? 'textDisabled' : 'textSubtle'}>
            {isAutoVault ? t('Automatic restaking') : `${t('Earn')} SOY ${t('Stake').toLocaleLowerCase()} SOY`}
          </Text>
        )}
        <Harvest {...pool} userDataLoaded={userDataLoaded} endTimeStr={endTimeStr} />
        <Stake pool={pool} userDataLoaded={userDataLoaded} isWithdrawRequest={isWithdrawRequest} />
      </ActionContainer>
    </StyledActionPanel>
  )
}

export default ActionPanel
