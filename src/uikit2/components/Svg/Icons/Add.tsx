import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="47.1423" y="15" width="6" height="70" rx="3" fill={props.color} />
      <rect x="85.1423" y="47" width="6" height="70" rx="3" transform="rotate(90 85.1423 47)" fill={props.color} />
    </Svg>
  )
}

export default Icon
