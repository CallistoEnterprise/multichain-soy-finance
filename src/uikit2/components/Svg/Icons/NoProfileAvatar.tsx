import React from 'react'
import { useTheme } from 'styled-components'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme()

  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <circle cx="50.1423" cy="50" r="45" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="4" />
      <path
        d="M49.9756 45.6667C55.9587 45.6667 60.809 40.8164 60.809 34.8333C60.809 28.8502 55.9587 24 49.9756 24C43.9926 24 39.1423 28.8502 39.1423 34.8333C39.1423 40.8164 43.9926 45.6667 49.9756 45.6667Z"
        fill="#FAFFE6"
      />
      <path
        d="M52.309 50H47.9757C42.804 50 37.8441 52.0545 34.1871 55.7114C30.5301 59.3684 28.4757 64.3283 28.4757 69.5C28.4757 70.0746 28.704 70.6257 29.1103 71.0321C29.5166 71.4384 30.0677 71.6667 30.6423 71.6667H69.6423C70.217 71.6667 70.7681 71.4384 71.1744 71.0321C71.5807 70.6257 71.809 70.0746 71.809 69.5C71.809 64.3283 69.7546 59.3684 66.0976 55.7114C62.4406 52.0545 57.4807 50 52.309 50V50Z"
        fill="#FAFFE6"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="50.1423" y1="3" x2="50.1423" y2="97" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52544D" />
          <stop offset="1" stopColor="#3B3E30" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="50.1423" y1="3" x2="50.1423" y2="97" gradientUnits="userSpaceOnUse">
          <stop stopColor="#475222" />
          <stop offset="1" stopColor="#3C4323" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="100" height="100" fill="white" transform="translate(100.142 100) rotate(-180)" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
