import React, { useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, useModal, IconButton, AddIcon, MinusIcon, Skeleton, useTooltip, Flex, Text, AutoRenewIcon, HelpIcon } from '@soy-libs/uikit2'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useCakeVault } from 'state/pools/hooks'
import { Pool } from 'state/types'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { PoolCategory } from 'config/constants/types'
import { BIG_ZERO } from 'utils/bigNumber'
import { getAddress } from 'utils/addressHelpers'
import { useBlockLatestTimestamp } from 'utils'
import { useERC20 } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import useUnstakePool from 'views/Pools/hooks/useUnstakePool'
import { convertSharesToCake } from 'views/Pools/helpers'
import { ActionContainer, ActionTitles, ActionContent } from './styles'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import StakeModal from '../../PoolCard/Modals/StakeModal'
import VaultStakeModal from '../../CakeVaultCard/VaultStakeModal'
import { useCheckVaultApprovalStatus, useApprovePool, useVaultApprove } from '../../../hooks/useApprove'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const IconButtonWrapper = styled.div`
  display: flex;
`

interface StackedActionProps {
  pool: Pool
  userDataLoaded: boolean
  isWithdrawRequest?: boolean
}

const Staked: React.FunctionComponent<StackedActionProps> = ({ pool, userDataLoaded, isWithdrawRequest }) => {
  const {
    sousId,
    stakingToken,
    earningToken,
    stakingLimit,
    isFinished,
    poolCategory,
    userData,
    stakingTokenPrice,
    isAutoVault,
    isNew,
  } = pool
  const { t } = useTranslation()
  const { account, chainId } = useActiveWeb3React()
  const [pendingTx, setPendingTx] = useState(false)
  const { toastSuccess, toastError, toastWarning } = useToast()
  const { onUnstake } = useUnstakePool(sousId, isNew)

  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
  const { handleApprove: handlePoolApprove, requestedApproval: requestedPoolApproval } = useApprovePool(
    stakingTokenContract,
    sousId,
    earningToken.symbol,
    isNew,
  )
  const endTime = userData ? new BigNumber(userData.stakedStatus.endTime).toNumber() : 0

  const { setLastUpdated } = useCheckVaultApprovalStatus()
  const { handleApprove: handleVaultApprove, requestedApproval: requestedVaultApproval } =
    useVaultApprove(setLastUpdated)

  const handleApprove = isAutoVault ? handleVaultApprove : handlePoolApprove
  const requestedApproval = isAutoVault ? requestedVaultApproval : requestedPoolApproval

  const isBnbPool = poolCategory === PoolCategory.CLO
  // const allowance = userData?.allowance ? new BigNumber(userData.allowance) : BIG_ZERO
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isNotVaultAndHasStake = !isAutoVault && stakedBalance.gt(0)

  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO

  const stakedTokenBalance = getBalanceNumber(stakedBalance, stakingToken.decimals)
  const stakedTokenDollarBalance = getBalanceNumber(
    stakedBalance.multipliedBy(stakingTokenPrice),
    stakingToken.decimals,
  )

  const {
    userData: { userShares },
    pricePerFullShare,
  } = useCakeVault()

  const { cakeAsBigNumber, cakeAsNumberBalance } = convertSharesToCake(userShares, pricePerFullShare)
  const hasSharesStaked = userShares && userShares.gt(0)
  const isVaultWithShares = isAutoVault && hasSharesStaked
  const stakedAutoDollarValue = getBalanceNumber(cakeAsBigNumber.multipliedBy(stakingTokenPrice), stakingToken.decimals)

  const needsApproval = false // isAutoVault ? !isVaultApproved : !allowance.gt(0) && !isBnbPool
  const curTime = useBlockLatestTimestamp()

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)

  const [onPresentStake] = useModal(
    <StakeModal
      isBnbPool={isBnbPool}
      pool={pool}
      stakingTokenBalance={stakingTokenBalance}
      stakingTokenPrice={stakingTokenPrice}
    />,
  )

  const [onPresentVaultStake] = useModal(<VaultStakeModal stakingMax={stakingTokenBalance} pool={pool} />)

  const [onPresentUnstake] = useModal(
    <StakeModal
      stakingTokenBalance={stakingTokenBalance}
      isBnbPool={isBnbPool}
      pool={pool}
      stakingTokenPrice={stakingTokenPrice}
      isRemovingStake
    />,
  )

  const handleRequestUnstake = async () => {
    setPendingTx(true)

    // unstaking
    try {
      if (endTime > curTime) {
        toastWarning(t(`Unstaking is not available!`))
        setPendingTx(false)
        return
      }
      const res = await onUnstake(isWithdrawRequest)
      if (res) {
        isWithdrawRequest
          ? toastSuccess(`${t('Requested')}!`, t('Your request was made successfully!'))
          : toastSuccess(
              `${t('Unstaked')}!`,
              t('Your %symbol% earnings have also been harvested to your wallet!', {
                symbol: earningToken.symbol,
              }),
            )
      } else {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
      setPendingTx(false)
    } catch (e) {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setPendingTx(false)
    }
  }

  const [onPresentVaultUnstake] = useModal(<VaultStakeModal stakingMax={cakeAsBigNumber} pool={pool} isRemovingStake />)

  const onStake = () => {
    if (isAutoVault) {
      onPresentVaultStake()
    } else {
      onPresentStake()
    }
  }

  const handleUnstake = () => {
    if (isAutoVault) {
      onPresentVaultUnstake()
    } else {
      onPresentUnstake()
    }
  }

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(
      isWithdrawRequest
        ? 'Once you confirm "unlocking", you cannot add tokens to this pool while unlocking.'
        : 'You’ve already staked the maximum amount you can stake in this pool!',
    ),
    { placement: 'bottom' },
  )

  const reachStakingLimit = stakingLimit.gt(0) && userData.stakedBalance.gte(stakingLimit)

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "textSubtle"} as="span" textTransform="uppercase">
            {t('Start staking')}
          </Text>
        </ActionTitles>
        <ActionContent>
          <ConnectWalletButton width="100%" />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataLoaded) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "textSubtle"} as="span" textTransform="uppercase">
            {t('Start staking')}
          </Text>
        </ActionTitles>
        <ActionContent>
          <Skeleton width={180} height="32px" marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (needsApproval) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "textSubtle"} as="span" textTransform="uppercase">
            {t('Enable pool')}
          </Text>
        </ActionTitles>
        <ActionContent>
          <Button width="100%" disabled={requestedApproval} onClick={handleApprove} variant="secondary">
            {t('Enable')}
          </Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  // Wallet connected, user data loaded and approved
  if (isNotVaultAndHasStake || isVaultWithShares) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "secondary"} as="span" textTransform="uppercase">
            {stakingToken.symbol}{' '}
          </Text>
          <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "textSubtle"} as="span" textTransform="uppercase">
            {isAutoVault ? t('Staked (compounding)') : t('Staked')}
          </Text>
        </ActionTitles>
        <ActionContent>
          <Flex flex="1" pt="16px" flexDirection="column" alignSelf="flex-start">
            <Balance
              lineHeight="1"
              bold
              fontSize="20px"
              decimals={5}
              value={isAutoVault ? cakeAsNumberBalance : stakedTokenBalance}
            />
            <Balance
              fontSize="12px"
              display="inline"
              color="textSubtle"
              decimals={2}
              value={isAutoVault ? stakedAutoDollarValue : stakedTokenDollarBalance}
              unit=" USD"
              prefix="~"
            />
          </Flex>
          {!isNew && (
            <IconButtonWrapper>
              <IconButton variant="secondary" onClick={handleUnstake} mr="6px">
                <MinusIcon color="primary" width="14px" />
              </IconButton>
              {/* {reachStakingLimit ? (
                <span ref={targetRef}>
                  <IconButton variant="secondary" disabled>
                    <AddIcon color="textDisabled" width="24px" height="24px" />
                  </IconButton>
                </span>
              ) : (
                <IconButton
                  variant="secondary"
                  onClick={stakingTokenBalance.gt(0) ? onStake : onPresentTokenRequired}
                  disabled
                >
                  <AddIcon color="primary" width="14px" />
                </IconButton>
              )} */}
            </IconButtonWrapper>
          )}
          {isNew && (
            <Flex flexDirection="column">
              <Button
                width="100%"
                ml="5px"
                size="small"
                onClick={stakingTokenBalance.gt(0) ? onStake : onPresentTokenRequired}
                variant="secondary"
                disabled={isFinished[chainId] || endTime > 0}
              >
                {t(stakedTokenBalance === 0 ? 'Stake' : 'Add')}
              </Button>
              {isWithdrawRequest ? (
                <Flex width="100%" alignItems="center">
                  <Button
                    ml="5px"
                    mt="5px"
                    width="100%"
                    size="small"
                    disabled={requestedApproval}
                    onClick={handleRequestUnstake}
                    variant="secondary"
                    isLoading={pendingTx}
                    endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
                  >
                    {t('Unlock')}
                  </Button>
                  <span ref={targetRef}>
                    <HelpIcon color="textSubtle" width="20px" ml="6px" mt="10px" />
                  </span>
                </Flex>
              ) : (
                <Button
                  ml="5px"
                  mt="5px"
                  width="100%"
                  size="small"
                  disabled={requestedApproval}
                  onClick={handleUnstake}
                  variant="secondary"
                >
                  {t('Unstake')}
                </Button>
              )}
            </Flex>
          )}
          {tooltipVisible && tooltip}
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>
        <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "secondary"} as="span" textTransform="uppercase">
          {t('Stake')}{' '}
        </Text>
        <Text fontSize="12px" bold color={!isNew ? 'textDisabled' : "textSubtle"} as="span" textTransform="uppercase">
          {stakingToken.symbol}
        </Text>
      </ActionTitles>
      <ActionContent>
        <Button
          width="100%"
          onClick={stakingTokenBalance.gt(0) ? onStake : onPresentTokenRequired}
          variant="secondary"
          disabled={isFinished[chainId] || !isNew}
        >
          {t('Stake')}
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default Staked
