import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import { Flex, MetamaskIcon, Text, LinkExternal, Skeleton, useTooltip, Button, HelpIcon } from 'uikit2'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCakeVault } from 'state/pools/hooks'
import { Pool } from 'state/types'
import { getAddress, getPmoonVaultAddress } from 'utils/addressHelpers'
import { registerToken } from 'utils/wallet'
import Balance from 'components/Balance'

interface ExpandedFooterProps {
  pool: Pool
  account: string
  endTimeStr: string | null
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const ExpandedFooter: React.FC<ExpandedFooterProps> = ({ pool, account, endTimeStr }) => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  // const { currentBlock } = useBlock()
  const { totalCakeInVault } = useCakeVault()

  const {
    stakingToken,
    earningToken,
    totalStaked,
    // startBlock,
    // endBlock,
    // stakingLimit,
    contractAddress,
    sousId,
    isAutoVault,
  } = pool

  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getPmoonVaultAddress()
  const isMetaMaskInScope = !!window.ethereum?.isMetaMask
  const isManualCakePool = sousId === 0

  // const { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
  //   getPoolBlockInfo(pool, currentBlock)

  // const { targetRef, tooltip, tooltipVisible } = useTooltip(
  //   t('Subtracted automatically from each yield harvest and burned.'),
  //   { placement: 'bottom-start' },
  // )
  // const nextHarvest = account && userData ? userData.stakedStatus.time.toNumber() : 0
  // const endStaking = account && userData ? userData.stakedStatus.endTime.toNumber() : 0

  // const nextTimeStr = nextHarvest === 0 ? '' : getTimeFromTimeStamp2(nextHarvest)
  // const endTimeStr = endStaking === 0 ? '' : getTimeFromTimeStamp2(endStaking)

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

  return (
    <ExpandedWrapper flexDirection="column">
      <Flex mb="2px" justifyContent="space-between" flexDirection="column">
        <Text small color="primary">
          {t('Cold Staking Ends In')}:
        </Text>
        {endTimeStr ? <Text small>{endTimeStr}</Text> : <Skeleton width="200px" height="21px" />}
      </Flex>
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        <Text small>{t('Total staked')}:</Text>
        <Flex alignItems="flex-start">
          {totalStaked && totalStaked.gte(0) ? (
            <>
              <Balance small value={getTotalStakedBalance()} decimals={0} unit={` ${stakingToken.symbol}`} />
              <span ref={totalStakedTargetRef}>
                <HelpIcon color="textSubtle" width="20px" ml="6px" mt="4px" />
              </span>
            </>
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
          {totalStakedTooltipVisible && totalStakedTooltip}
        </Flex>
      </Flex>
      {/* {stakingLimit && stakingLimit.gt(0) && (
        <Flex mb="2px" justifyContent="space-between">
          <Text small>{t('Max. stake per user')}:</Text>
          <Text small>{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`}</Text>
        </Flex>
      )} */}
      {/* {shouldShowBlockCountdown && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          <Text small>{hasPoolStarted ? t('Ends in') : t('Starts in')}:</Text>
          {blocksRemaining || blocksUntilStart ? (
            <Flex alignItems="center">
              <Link external href={getCallistoExpLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
                <Balance small value={blocksToDisplay} decimals={0} color="primary" />
                <Text small ml="4px" color="primary" textTransform="lowercase">
                  {t('Blocks')}
                </Text>
                <TimerIcon ml="4px" color="primary" />
              </Link>
            </Flex>
          ) : (
            <Skeleton width="54px" height="21px" />
          )}
        </Flex>
      )}
      {isAutoVault && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          {tooltipVisible && tooltip}
          <TooltipText ref={targetRef} small>
            {t('Performance Fee')}
          </TooltipText>
          <Flex alignItems="center">
            <Text ml="4px" small>
              {performanceFee / 100}%
            </Text>
          </Flex>
        </Flex>
      )} */}
      {/* <Flex mb="2px" justifyContent="flex-end">
        <LinkExternal href={`${expLink}/token/${getAddress(earningToken.address)}`} bold={false} small>
          {t('See Token Info')}
        </LinkExternal>
      </Flex>
      <Flex mb="2px" justifyContent="flex-end">
        <LinkExternal href={earningToken.projectLink} bold={false} small>
          {t('View Project Site')}
        </LinkExternal>
      </Flex> */}
      <Flex mb="2px" justifyContent="space-between">
        {account && isMetaMaskInScope && tokenAddress && (
          <Flex justifyContent="flex-start">
            <Button
              variant="text"
              p="0"
              height="auto"
              onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals, chainId)}
            >
              <Text color="primary" fontSize="14px">
                {t('Add to Metamask')}
              </Text>
              <MetamaskIcon ml="4px" />
            </Button>
          </Flex>
        )}
        {poolContractAddress && (
          <Flex mb="2px" justifyContent="flex-end">
            <LinkExternal
              href={`${CHAINS_CONSTANTS[chainId].explorer.url}/address/${
                isAutoVault ? cakeVaultContractAddress : poolContractAddress
              }/transactions`}
              bold={false}
              small
            >
              {t('View Contract')}
            </LinkExternal>
          </Flex>
        )}
      </Flex>
    </ExpandedWrapper>
  )
}

export default React.memo(ExpandedFooter)
