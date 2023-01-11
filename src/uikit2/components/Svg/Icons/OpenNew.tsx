import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M81.3923 100H12.6423C5.73877 100 0.142334 94.4036 0.142334 87.5V18.75C0.142334 11.8464 5.73877 6.25 12.6423 6.25H37.6423V18.75H12.6423V87.5H81.3923V62.5H93.8923V87.5C93.8923 94.4036 88.2959 100 81.3923 100ZM48.2673 60.6688L39.4548 51.8313L78.7861 12.5H56.3923V0H100.142V43.75H87.6423V21.3438L48.2673 60.6688Z" />
    </Svg>
  )
}

export default Icon
