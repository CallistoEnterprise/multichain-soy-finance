import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { useEffect, useState } from 'react'

interface LotteryEvent {
  nextEventTime: number
  postCountdownText?: string
  preCountdownText?: string
  replacementText?: string
}

const useGetNextLotteryEvent = (endTime: number, status: LotteryStatus): LotteryEvent => {
  const { t } = useTranslation()
  //const vrfRequestTime = 180 // 3 mins
  //const secondsBetweenRounds = 300 // 5 mins
  //const transactionResolvingBuffer = 0 // (3 min, original PCS 30 s) Delay countdown by 30s to ensure contract transactions have been calculated and broadcast
  const [nextEvent, setNextEvent] = useState({
    nextEventTime: null,
    preCountdownText: null,
    postCountdownText: null,
    replacementText: null,
  })

  useEffect(() => {
    // Current lottery is active
    /*if (status === LotteryStatus.OPEN) {
      setNextEvent({
        nextEventTime: endTime + transactionResolvingBuffer, // 9:55'00
        preCountdownText: null,
        postCountdownText: t('until the draw'),
        replacementText: 'Draw in progress...',
      })
    }
    // Current lottery has finished but not yet claimable
    if (status === LotteryStatus.CLOSE) {
      setNextEvent({
        nextEventTime: endTime + transactionResolvingBuffer + vrfRequestTime, // 9:58'00
        preCountdownText: t('Winners announced in'),
        postCountdownText: null,
        replacementText: null,
      })
    }
    // Current lottery claimable. Next lottery has not yet started
    if (status === LotteryStatus.CLAIMABLE) {
      setNextEvent({
        nextEventTime: endTime + transactionResolvingBuffer + secondsBetweenRounds, // 10:03'00
        preCountdownText: t('Tickets on sale in'),
        postCountdownText: null,
        replacementText: null,
      })
    }*/
    setNextEvent({
      nextEventTime: endTime, // 9:55'00 sharp
      preCountdownText: null,
      postCountdownText: t('until the draw'),
      replacementText: 'Draw in progress...',
    })
  }, [status, endTime, t])

  return nextEvent
}

export default useGetNextLotteryEvent
