import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="53.1423" y="84" width="6" height="69" rx="3" transform="rotate(-180 53.1423 84)" />
      <rect x="50.2722" y="85" width="7" height="38" rx="3" transform="rotate(-135 50.2722 85)" />
      <rect width="7" height="38" rx="3" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 50.1926 85)" />
    </Svg>
  )
}

export default Icon
