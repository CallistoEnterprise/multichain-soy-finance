import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Modal, Text, Flex, Image, Button, Slider, BalanceInput, AutoRenewIcon, Link } from 'uikit2'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useToast from 'hooks/useToast'
import BigNumber from 'bignumber.js'
import { BASE_URL, DEFAULT_CHAIN_ID } from 'config'
import { getFullDisplayBalance, formatNumber, getDecimalAmount } from 'utils/formatBalance'
import { getFormattedDateFromTimeStamp, getTimeFromTimeStamp } from 'utils/formatTimePeriod'
import { useBlockLatestTimestamp } from 'utils'
import { Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import PercentageButton from './PercentageButton'
import useStakePool from '../../../hooks/useStakePool'
import useUnstakePool from '../../../hooks/useUnstakePool'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface StakeModalProps {
  isBnbPool: boolean
  pool: Pool
  stakingTokenBalance: BigNumber
  stakingTokenPrice: number
  isRemovingStake?: boolean
  onDismiss?: () => void
}

const StyledLink = styled(Link)`
  width: 100%;
`

const StakeModal: React.FC<StakeModalProps> = ({
  isBnbPool,
  pool,
  stakingTokenBalance,
  stakingTokenPrice,
  isRemovingStake = false,
  onDismiss,
}) => {
  const {
    sousId,
    stakingToken,
    userData,
    stakingLimit,
    earningToken,
    contractAddress,
    isNew,
    lockPeriod,
    lockPeriodUnit,
  } = pool
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const { theme } = useTheme()
  const { onStake } = useStakePool(sousId, isBnbPool)
  const { onUnstake } = useUnstakePool(sousId, isNew)
  const { toastSuccess, toastError, toastWarning } = useToast()
  const [pendingTx, setPendingTx] = useState(false)
  const [stakeAmount, setStakeAmount] = useState('')
  const [hasReachedStakeLimit, setHasReachedStakedLimit] = useState(false)
  const [percent, setPercent] = useState(0)
  const [periods, setPeriods] = useState(0)

  const getCalculatedStakingLimit = () => {
    if (isRemovingStake) {
      return userData.stakedBalance
    }
    return stakingLimit.gt(0) && stakingTokenBalance.gt(stakingLimit) ? stakingLimit : stakingTokenBalance
  }

  const usdValueStaked = stakeAmount && formatNumber(new BigNumber(stakeAmount).times(stakingTokenPrice).toNumber())
  const curTime = useBlockLatestTimestamp()

  const endTime = userData ? new BigNumber(userData.stakedStatus.endTime).toNumber() : 0
  const multiplier = userData
    ? getFullDisplayBalance(new BigNumber(userData.stakedStatus.multiplier), earningToken.decimals, 2)
    : ''

  const isWithdrawRequest = curTime - endTime > 0 && endTime === 0
  useEffect(() => {
    if (stakingLimit.gt(0) && !isRemovingStake) {
      const fullDecimalStakeAmount = getDecimalAmount(new BigNumber(stakeAmount), stakingToken.decimals)
      setHasReachedStakedLimit(fullDecimalStakeAmount.plus(userData.stakedBalance).gt(stakingLimit))
    }
  }, [stakeAmount, stakingLimit, userData, stakingToken, isRemovingStake, setHasReachedStakedLimit])

  const handleStakeInputChange = (input: string) => {
    if (input) {
      const convertedInput = getDecimalAmount(new BigNumber(input), stakingToken.decimals)
      const percentage = Math.floor(convertedInput.dividedBy(getCalculatedStakingLimit()).multipliedBy(100).toNumber())
      setPercent(Math.min(percentage, 100))
    } else {
      setPercent(0)
    }
    setStakeAmount(input)
  }

  const handleChangePercent = (sliderPercent: number) => {
    if (sliderPercent > 0) {
      const percentageOfStakingMax = getCalculatedStakingLimit().dividedBy(100).multipliedBy(sliderPercent)
      const amountToStake = getFullDisplayBalance(percentageOfStakingMax, stakingToken.decimals, stakingToken.decimals)
      setStakeAmount(amountToStake)
    } else {
      setStakeAmount('')
    }
    setPercent(sliderPercent)
  }

  const handleChangePeriods = (months: number) => {
    setPeriods(months)
  }

  const handleConfirmClick = async () => {
    setPendingTx(true)

    if (isRemovingStake) {
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
          toastError(
            t('Error'),
            t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
          )
        }
        setPendingTx(false)
        onDismiss()
      } catch (e) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setPendingTx(false)
      }
    } else {
      try {
        if (!isNew && periods === 0) {
          toastWarning(t('Warning'), t('Please select staking periods.'))
          return
        }
        // staking
        await onStake(getAddress(contractAddress), stakeAmount, stakingToken.decimals, periods, isNew)
        toastSuccess(
          `${t('Staked')}!`,
          t('Your %symbol% funds have been staked in the pool!', {
            symbol: stakingToken.symbol,
          }),
        )
        setPendingTx(false)
        onDismiss()
      } catch (e) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setPendingTx(false)
      }
    }
  }

  return (
    <Modal
      title={isRemovingStake ? t(endTime === 0 ? 'Request Withdraw' : 'Unstake') : t('Stake in Pool')}
      onDismiss={onDismiss}
      headerBackground={theme.colors.gradients.cardHeader}
    >
      {/* {stakingLimit.gt(0) && !isRemovingStake && (
        <Text color="secondary" bold mb="24px" style={{ textAlign: 'center' }} fontSize="16px">
          {t('Max stake for this pool: %amount% %token%', {
            amount: getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0),
            token: stakingToken.symbol,
          })}
        </Text>
      )} */}
      <Flex alignItems="center" justifyContent="space-between" mb="8px">
        <Text bold>{isRemovingStake ? t('Unstake') : t('Stake')}:</Text>
        <Flex alignItems="center" minWidth="70px">
          <Image
            src={
              isBnbPool
                ? `${BASE_URL}/images/coins/clo.png`
                : `${BASE_URL}/images/coins/${chainId ?? DEFAULT_CHAIN_ID}/${getAddress(stakingToken.address)}.png`
            }
            width={24}
            height={24}
            alt={stakingToken.symbol}
          />
          <Text ml="4px" bold>
            {stakingToken.symbol}
          </Text>
        </Flex>
      </Flex>
      <Text bold>
        {!isRemovingStake
          ? `Unlocking Periods: ${isNew ? lockPeriod[chainId] : periods} (${
              isNew ? lockPeriodUnit[chainId] : 'months'
            })`
          : `Staked Status`}
      </Text>
      {isRemovingStake && (
        <div>
          {!isNew && <Text>{`Multiplier : ${multiplier}`}</Text>}
          {endTime > 0 ? (
            <Text>{`Unlock Time : ${getFormattedDateFromTimeStamp(endTime)} ${getTimeFromTimeStamp(endTime)}`}</Text>
          ) : (
            <Text>Unlock Time : --/--/--</Text>
          )}
        </div>
      )}
      {!isRemovingStake && !isNew && (
        <Flex alignItems="center" justifyContent="space-between" mt="8px" mb="10px">
          <PercentageButton onClick={() => handleChangePeriods(1)}>1</PercentageButton>
          <PercentageButton onClick={() => handleChangePeriods(2)}>2</PercentageButton>
          <PercentageButton onClick={() => handleChangePeriods(3)}>3</PercentageButton>
          <PercentageButton onClick={() => handleChangePeriods(4)}>4</PercentageButton>
          <PercentageButton onClick={() => handleChangePeriods(5)}>5</PercentageButton>
          <PercentageButton onClick={() => handleChangePeriods(6)}>6</PercentageButton>
        </Flex>
      )}
      {!isRemovingStake && (
        <BalanceInput
          value={stakeAmount}
          onUserInput={handleStakeInputChange}
          currencyValue={stakingTokenPrice !== 0 && `~${usdValueStaked || 0} USD`}
          isWarning={hasReachedStakeLimit}
          decimals={stakingToken.decimals}
        />
      )}
      {hasReachedStakeLimit && !isRemovingStake && (
        <Text color="failure" fontSize="12px" style={{ textAlign: 'right' }} mt="4px">
          {t('Maximum total stake: %amount% %token%', {
            amount: getFullDisplayBalance(new BigNumber(stakingLimit), stakingToken.decimals, 0),
            token: stakingToken.symbol,
          })}
        </Text>
      )}
      {!isRemovingStake && (
        <Text ml="auto" color="textSubtle" fontSize="12px" mb="8px">
          {t('Balance: %balance%', {
            balance: getFullDisplayBalance(getCalculatedStakingLimit(), stakingToken.decimals),
          })}
        </Text>
      )}
      {!isRemovingStake && (
        <Slider
          min={0}
          max={100}
          value={percent}
          onValueChanged={handleChangePercent}
          name="stake"
          valueLabel={`${percent}%`}
          step={1}
        />
      )}
      {!isRemovingStake && (
        <Flex alignItems="center" justifyContent="space-between" mt="8px">
          <PercentageButton onClick={() => handleChangePercent(25)}>25%</PercentageButton>
          <PercentageButton onClick={() => handleChangePercent(50)}>50%</PercentageButton>
          <PercentageButton onClick={() => handleChangePercent(75)}>75%</PercentageButton>
          <PercentageButton onClick={() => handleChangePercent(100)}>{t('Max')}</PercentageButton>
        </Flex>
      )}
      <Button
        isLoading={pendingTx}
        endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
        onClick={handleConfirmClick}
        disabled={
          (!stakeAmount && !isRemovingStake) ||
          (parseFloat(stakeAmount) === 0 && !isRemovingStake) ||
          hasReachedStakeLimit ||
          (!isNew ? !periods && !isRemovingStake : false)
        }
        mt="24px"
      >
        {pendingTx ? t('Confirming') : t('Confirm')}
      </Button>
      {!isRemovingStake && (
        <StyledLink external href="/swap">
          <Button width="100%" mt="8px" variant="secondary">
            {t('Get %symbol%', { symbol: stakingToken.symbol })}
          </Button>
        </StyledLink>
      )}
    </Modal>
  )
}

export default StakeModal
