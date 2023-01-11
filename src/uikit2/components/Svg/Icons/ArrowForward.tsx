import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="84.1423" y="46.9999" width="6" height="69" rx="3" transform="rotate(90 84.1423 46.9999)" />
      <rect x="85.1423" y="49.8701" width="7" height="38" rx="3" transform="rotate(135 85.1423 49.8701)" />
      <rect width="7" height="38" rx="3" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 85.1423 49.9496)" />
    </Svg>
  )
}

export default Icon
