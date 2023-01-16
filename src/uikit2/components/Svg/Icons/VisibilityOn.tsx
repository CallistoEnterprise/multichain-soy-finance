import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M50.1423 84.9988C41.9417 85.1009 33.8258 83.331 26.4123 79.8238C20.6658 77.0199 15.5056 73.1476 11.2073 68.4138C6.65449 63.5194 3.06967 57.8071 0.642334 51.5788L0.142334 49.9988L0.667334 48.4188C3.09641 42.196 6.67351 36.4851 11.2123 31.5838C15.509 26.8504 20.6675 22.9781 26.4123 20.1738C33.8259 16.6667 41.9417 14.8969 50.1423 14.9988C58.3429 14.897 66.4587 16.6669 73.8723 20.1738C79.619 22.9775 84.7792 26.8498 89.0773 31.5838C93.6388 36.4716 97.2247 42.1856 99.6423 48.4188L100.142 49.9988L99.6173 51.5788C91.7734 71.9977 72.0133 85.3455 50.1423 84.9988ZM50.1423 24.9988C33.1217 24.4654 17.4994 34.3743 10.7273 49.9988C17.4983 65.6243 33.1213 75.5336 50.1423 74.9988C67.1626 75.5307 82.7841 65.6224 89.5573 49.9988C82.7941 34.3667 67.1661 24.4542 50.1423 24.9988ZM50.1423 64.9988C42.929 65.0465 36.6892 59.9856 35.2472 52.9177C33.8052 45.8497 37.5637 38.7489 44.2193 35.9671C50.8748 33.1853 58.5685 35.4995 62.5851 41.4913C66.6016 47.4832 65.8192 55.4792 60.7173 60.5788C57.9239 63.4051 54.1161 64.9966 50.1423 64.9988Z" />
    </Svg>
  )
}

export default Icon
