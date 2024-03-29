import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Heading, Flex, MobileVerticalFlex, useModal, AutoRenewIcon } from 'uikit2'
import { useWeb3React } from '@web3-react/core'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { useGetUserLotteriesGraphData, useLottery } from 'state/lottery/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ClaimPrizesModal from './ClaimPrizesModal'
import useGetUnclaimedRewards, { FetchStatus } from '../hooks/useGetUnclaimedRewards'
import LotteryTicketTorn from 'assets/lottery-ticket-torn.png'
import LotterySlothWinning from 'assets/lottery-sloth-winning.png'
import LotterySlothLeft from 'assets/lottery-sloth-sedi.png'
import LotterySlothRight from 'assets/lottery-sloth-ceka.png'

const TicketImage = styled.img`
  height: 60px;
  margin: 15px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 100px;
  }
`

const TornTicketImage = styled.img`
  height: 54px;
  margin: 10px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 84px;
  }
`

const CheckPrizesSection = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    isTransitioning,
    currentRound: { status },
  } = useLottery()
  const { fetchAllRewards, unclaimedRewards, fetchStatus } = useGetUnclaimedRewards()
  const userLotteryData = useGetUserLotteriesGraphData()
  const [hasCheckedForRewards, setHasCheckedForRewards] = useState(false)
  const [hasRewardsToClaim, setHasRewardsToClaim] = useState(false)
  const [onPresentClaimModal] = useModal(<ClaimPrizesModal roundsToClaim={unclaimedRewards} />, false)
  const isFetchingRewards = fetchStatus === FetchStatus.IN_PROGRESS
  const lotteryIsNotClaimable = status === LotteryStatus.CLOSE
  const isCheckNowDisabled = !userLotteryData.account || lotteryIsNotClaimable

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      // Manage showing unclaimed rewards modal once per page load / once per lottery state change
      if (unclaimedRewards.length > 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(true)
        setHasCheckedForRewards(true)
        onPresentClaimModal()
      }

      if (unclaimedRewards.length === 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(false)
        setHasCheckedForRewards(true)
      }
    }
  }, [unclaimedRewards, hasCheckedForRewards, fetchStatus, onPresentClaimModal])

  useEffect(() => {
    // Clear local state on account change, or when lottery isTransitioning state changes
    setHasRewardsToClaim(false)
    setHasCheckedForRewards(false)
  }, [account, isTransitioning])

  const getBody = () => {
    if (!account) {
      return (
        <MobileVerticalFlex alignItems="center" justifyContent="center">
          <TicketImage src={LotterySlothLeft} alt="lottery ticket" />
          <Flex mx={['4px', null, '16px']} flexDirection="column" alignItems="center">
            <Heading textAlign="center" color="#F4EEFF">
              {t('Connect your wallet')}
            </Heading>
            <Heading textAlign="center" color="#F4EEFF" mb="24px">
              {t("to check if you've won!")}
            </Heading>
            <ConnectWalletButton width="190px" />
          </Flex>
          <TicketImage src={LotterySlothRight} alt="lottery ticket" />
        </MobileVerticalFlex>
      )
    }
    if (hasCheckedForRewards && !hasRewardsToClaim) {
      return (
        <MobileVerticalFlex alignItems="center" justifyContent="center">
          <TornTicketImage src={LotteryTicketTorn} alt="torn lottery ticket" />
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center" color="#F4EEFF">
              {t('No prizes to collect')}...
            </Heading>
            <Heading textAlign="center" color="#F4EEFF">
              {t('Better luck next time!')}
            </Heading>
          </Flex>
          <TornTicketImage src={LotteryTicketTorn} alt="torn lottery ticket" className="md:" />
        </MobileVerticalFlex>
      )
    }
    if (hasCheckedForRewards && hasRewardsToClaim) {
      return (
        <MobileVerticalFlex alignItems="center" justifyContent="center">
          <TicketImage src={LotterySlothWinning} alt="lottery ticket" />
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center" color="#F4EEFF">
              {t('Congratulations!')}
            </Heading>
            <Heading textAlign="center" color="#F4EEFF">
              {t('Why not play again?')}
            </Heading>
          </Flex>
          <TicketImage src={LotterySlothWinning} alt="lottery ticket" />
        </MobileVerticalFlex>
      )
    }
    const checkNowText = () => {
      if (lotteryIsNotClaimable) {
        return `${t('Calculating rewards')}...`
      }
      if (isFetchingRewards) {
        return t('Checking')
      }
      return t('Check Now')
    }
    return (
      <MobileVerticalFlex alignItems="center" justifyContent="center">
        <TicketImage src={LotterySlothLeft} alt="lottery ticket" />
        <Flex mx={['4px', null, '16px']} flexDirection="column">
          <Heading textAlign="center" color="#F4EEFF" mb="24px">
            {t('Are you a winner?')}
          </Heading>
          <Button
            disabled={isCheckNowDisabled}
            onClick={fetchAllRewards}
            isLoading={isFetchingRewards}
            endIcon={isFetchingRewards ? <AutoRenewIcon color="currentColor" spin /> : null}
          >
            {checkNowText()}
          </Button>
        </Flex>
        <TicketImage src={LotterySlothRight} alt="lottery ticket" />
      </MobileVerticalFlex>
    )
  }

  return <Flex>{getBody()}</Flex>
}

export default CheckPrizesSection
