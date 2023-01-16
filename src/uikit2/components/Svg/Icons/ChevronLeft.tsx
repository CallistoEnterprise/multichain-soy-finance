import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.8588 50.4055L80.1909 89.7375L69.9285 99.9999L19.8561 49.9276L30.1185 39.6652L30.12 39.6666L69.9433 -0.156616L80.6821 10.5822L40.8588 50.4055Z"
      />
    </Svg>
  )
}

export default Icon
