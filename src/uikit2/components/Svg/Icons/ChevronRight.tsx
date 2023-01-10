import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.6793 49.438L20.3471 10.1058L30.6095 -0.156558L80.6819 49.9158L70.4195 60.1782L70.4181 60.1768L30.5949 100L19.8561 89.2612L59.6793 49.438Z"
      />
    </Svg>
  )
}

export default Icon
