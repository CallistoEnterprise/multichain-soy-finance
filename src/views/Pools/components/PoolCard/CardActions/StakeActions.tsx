import React, { useState } from 'react'
import { Flex, Button, useModal, Skeleton, useTooltip, AutoRenewIcon, HelpIcon } from '@callisto-enterprise/soy-uikit2'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { useBlockLatestTimestamp } from 'utils'
import { Pool } from 'state/types'
import NotEnoughTokensModal from '../Modals/NotEnoughTokensModal'
import StakeModal from '../Modals/StakeModal'
import { getBalanceNumber } from 'utils/formatBalance'
import useToast from 'hooks/useToast'
import useUnstakePool from 'views/Pools/hooks/useUnstakePool'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface StakeActionsProps {
  pool: Pool
  stakingTokenBalance: BigNumber
  stakedBalance: BigNumber
  isBnbPool: boolean
  isStaked: ConstrainBoolean
  isLoading?: boolean
}

const StakeAction: React.FC<StakeActionsProps> = ({
  pool,
  stakingTokenBalance,
  stakedBalance,
  isBnbPool,
  isStaked,
  isLoading = false,
}) => {
  const { chainId } = useActiveWeb3React()
  // console.log("stakingTokenBalance ::", stakingTokenBalance.toString())
  const { stakingToken, earningToken, sousId, stakingTokenPrice, stakingLimit, isFinished, userData, isNew } = pool
  const { t } = useTranslation()
  const [pendingTx, setPendingTx] = useState(false)
  const { toastSuccess, toastError, toastWarning } = useToast()
  const stakedTokenBalance = getBalanceNumber(stakedBalance, stakingToken.decimals)
  const { onUnstake } = useUnstakePool(sousId, isNew)

  // const stakedTokenDollarBalance = getBalanceNumber(
  //   stakedBalance.multipliedBy(stakingTokenPrice),
  //   stakingToken.decimals,
  // )
  const curTime = useBlockLatestTimestamp()
  const endTime = userData ? new BigNumber(userData.stakedStatus.endTime).toNumber() : 0
  const isWithdrawRequest = curTime - endTime > 0 && endTime === 0

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)

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

  const [onPresentStake] = useModal(
    <StakeModal
      isBnbPool={isBnbPool}
      pool={pool}
      stakingTokenBalance={stakingTokenBalance}
      stakingTokenPrice={stakingTokenPrice}
    />,
  )

  const [onPresentUnstake] = useModal(
    <StakeModal
      stakingTokenBalance={stakingTokenBalance}
      isBnbPool={isBnbPool}
      pool={pool}
      stakingTokenPrice={stakingTokenPrice}
      isRemovingStake
    />,
  )

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(
      isWithdrawRequest
        ? 'Once you confirm "unlocking", you cannot add tokens to this pool while unlocking.'
        : 'You’ve already staked the maximum amount you can stake in this pool!',
    ),
    { placement: 'bottom' },
  )

  const reachStakingLimit = stakingLimit.gt(0) && userData.stakedBalance.gte(stakingLimit)

  const renderStakeAction = () => {
    return isStaked ? (
      <Flex justifyContent="justify-center" alignItems="center">
        <Flex flexDirection="column" width="100%">
          {reachStakingLimit ? (
            <span ref={targetRef}>
              <Button disabled>{t('Stake Now')}</Button>
            </span>
          ) : (
            <Button
              disabled={isFinished[chainId] || !isNew || endTime > 0}
              onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}
            >
              {t(stakedTokenBalance > 0 ? 'Add SOY' : 'Stake Now')}
            </Button>
          )}
          {isWithdrawRequest ? (
            <Flex width="100%" alignItems="center">
              <Button
                onClick={isWithdrawRequest ? handleRequestUnstake : onPresentUnstake}
                mt="10px"
                width="100%"
                isLoading={pendingTx}
                endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
              >
                {t('Start Unlocking')}
              </Button>
              <span ref={targetRef}>
                <HelpIcon color="textSubtle" width="20px" ml="6px" mt="10px" />
              </span>
            </Flex>
          ) : (
            <Button
              onClick={isWithdrawRequest ? handleRequestUnstake : onPresentUnstake}
              mt="10px"
              isLoading={pendingTx}
              endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
            >
              {t('Unstake')}
            </Button>
          )}
        </Flex>
        {tooltipVisible && tooltip}
      </Flex>
    ) : (
      <Button
        disabled={isFinished[chainId] || !isNew}
        onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}
      >
        {t('Stake')}
      </Button>
    )
  }

  return <Flex flexDirection="column">{isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()}</Flex>
}

export default StakeAction
