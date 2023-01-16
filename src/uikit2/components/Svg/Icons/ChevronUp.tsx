import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.7873 41.3079L10.6162 80.4791L0.395798 70.2587L50.2631 20.3914L60.4835 30.6118L60.4822 30.6131L100.142 70.2732L89.4474 80.968L49.7873 41.3079Z"
      />
    </Svg>
  )
}

export default Icon
