import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 37 28" {...props}>
      <path d="M20.5512 24.7549C19.3517 26.3707 16.9329 26.3707 15.7335 24.7549L6.10813 11.7881C4.63871 9.80859 6.05168 7 8.517 7L27.7677 7C30.233 7 31.646 9.80859 30.1765 11.7881L20.5512 24.7549Z" />
    </Svg>
  )
}

export default Icon
