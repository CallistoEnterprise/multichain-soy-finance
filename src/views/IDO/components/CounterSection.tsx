import React from 'react'
import styled from 'styled-components'
import { Text } from 'uikit2'

// function getDate(seconds) {
//     return Math.floor(seconds/(3600 * 24))
// }
// function getHour(seconds) {
//     return Math.floor(seconds/3600)
// }

// function getMin(seconds) {
//     return Math.floor((seconds%3600)/60)
// }

// function getSec(seconds) {
//     const h = getHour(seconds)
//     const m = getMin(seconds)
//     return seconds - h * 3600 - m * 60
// }

// function formatString(val: number) {
//     if( val < 10 ) {
//         return `0${val.toString()}`
//     }
//     return val.toString()
// }

const Counter = () => {
  // const unlockTime = item === undefined? 0 : item
  // const [diff, setDiff] = useState(0)

  // useEffect(() => {
  //     let timer
  //     const timeCount = () => {

  //         timer = setInterval(() => {
  //             const current = Math.floor(Date.now() / 1000)
  //             if( unlockTime - current > 0) {
  //                 setDiff(unlockTime - current)
  //             } else {
  //                 setDiff(0)
  //                 clearInterval(timer)
  //             }
  //         }, 1000)
  //     }
  //     timeCount()
  //     return () => {
  //         clearInterval(timer)
  //     }
  // }, [unlockTime])

  // const datetime = `${formatString(getHour(diff))} : ${formatString(getMin(diff))} : ${formatString(getSec(diff))}`

  return (
    <Container>
      <Text fontSize="24px">Daily IDO is closed.</Text>

      {/* <Text fontSize="18px">{`Number of SOY for this round ${soyToSell.toFixed(2)} SOY.`}</Text>
            {iteration !== 0 && <Text fontSize="18px">{`Current Iteration : ${iteration}.`}</Text>}
            <Text fontSize="18px">{`Round ${curRound} of 180 ends in`}</Text>
            {item !== undefined && <TimerText fontSize="67px">{item === 0 || curRound === 0 ? '00:00:00' : datetime}</TimerText>} */}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
// const TimerText = styled(Text)`
//     @media screen and (max-width: 768px) {
//         font-size: 50px;
//     }
// `
export default Counter
