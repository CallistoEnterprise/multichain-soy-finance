import React from 'react'
import { Flex, Button, useModal, Skeleton, useTooltip } from '@soy-libs/uikit2'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { useBlockLatestTimestamp } from 'utils'
import { Pool } from 'state/types'
import NotEnoughTokensModal from '../Modals/NotEnoughTokensModal'
import StakeModal from '../Modals/StakeModal'
import { getBalanceNumber } from 'utils/formatBalance'

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
  // console.log("stakingTokenBalance ::", stakingTokenBalance.toString())
  const { stakingToken, stakingTokenPrice, stakingLimit, isFinished, userData, isNew } = pool
  const { t } = useTranslation()
  const stakedTokenBalance = getBalanceNumber(stakedBalance, stakingToken.decimals)
  // const stakedTokenDollarBalance = getBalanceNumber(
  //   stakedBalance.multipliedBy(stakingTokenPrice),
  //   stakingToken.decimals,
  // )
  const curTime = useBlockLatestTimestamp()
  const endTime = userData ? new BigNumber(userData.stakedStatus.endTime).toNumber() : 0
  const isWithdrawRequest = curTime - endTime > 0 && endTime === 0

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)

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
    t('You’ve already staked the maximum amount you can stake in this pool!'),
    { placement: 'bottom' },
  )

  const reachStakingLimit = stakingLimit.gt(0) && userData.stakedBalance.gte(stakingLimit)

  const renderStakeAction = () => {
    return isStaked ? (
      <Flex justifyContent="justify-center" alignItems="center">
        {/* <Flex flexDirection="column">
          <>
            <Balance bold fontSize="20px" decimals={3} value={stakedTokenBalance} />
            {stakingTokenPrice !== 0 && (
              <Text fontSize="12px" color="textSubtle">
                <Balance
                  fontSize="12px"
                  color="textSubtle"
                  decimals={2}
                  value={stakedTokenDollarBalance}
                  prefix="~"
                  unit=" USD"
                />
              </Text>
            )}
          </>
        </Flex> */}
        <Flex flexDirection="column" width="100%">
          {reachStakingLimit ? (
            <span ref={targetRef}>
              <Button disabled>
                {t('Stake Now')}
              </Button>
              {/* <IconButton variant="secondary" disabled>
                <AddIcon color="textDisabled" width="24px" height="24px" />
              </IconButton> */}
            </span>
          ) : (
            <Button disabled={isFinished || !isNew || stakedTokenBalance > 0 } onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
              {t('Stake Now')}
            </Button>
            // <IconButton
            //   variant="secondary"
            //   onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}
            //   disabled={isFinished}
            // >
            //   <AddIcon color="primary" width="24px" height="24px" />
            // </IconButton>
          )}
          <Button onClick={onPresentUnstake} mt="10px">
            {t(isWithdrawRequest ? 'Start Unlocking' : 'Unstake')}
          </Button>
          {/* <IconButton variant="secondary" onClick={onPresentUnstake}>
            <MinusIcon color="primary" width="24px" />
          </IconButton> */}
        </Flex>
        {tooltipVisible && tooltip}
      </Flex>
    ) : (
      <Button disabled={isFinished || !isNew} onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
        {t('Stake')}
      </Button>
    )
  }

  return <Flex flexDirection="column">{isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()}</Flex>
}

export default StakeAction
