import React from 'react'
import { Flex, Heading, Skeleton } from 'uikit2'
import getTimePeriods from 'utils/getTimePeriods'
import Timer from './Timer'
import useNextEventCountdown from '../../hooks/useNextEventCountdown'

interface CountdownProps {
  nextEventTime: number
  preCountdownText?: string
  postCountdownText?: string
  replacementText?: string
}

const Countdown: React.FC<CountdownProps> = ({
  nextEventTime,
  preCountdownText,
  postCountdownText,
  replacementText,
}) => {
  const secondsRemaining = useNextEventCountdown(nextEventTime)
  const { days, hours, minutes } = getTimePeriods(secondsRemaining <= 0 ? 0 : secondsRemaining)

  return (
    <>
      {secondsRemaining ? (
        <Flex display="inline-flex" justifyContent="flex-end" alignItems="flex-end">
          {preCountdownText && (
            <Heading mr="12px" color="#ffff">
              {preCountdownText}
            </Heading>
          )}
          {secondsRemaining >= 0 || !replacementText ? (
            <>
              <Timer
                minutes={minutes + 1} // We don't show seconds - so values from 0 - 59s should be shown as 1 min
                hours={hours}
                days={days}
              />
              {postCountdownText && <Heading color="#ffff">{postCountdownText}</Heading>}
            </>
          ) : (
            <Heading color="#ffff">{replacementText}</Heading>
          )}
        </Flex>
      ) : (
        <Skeleton height="41px" width="250px" />
      )}
    </>
  )
}

export default Countdown
