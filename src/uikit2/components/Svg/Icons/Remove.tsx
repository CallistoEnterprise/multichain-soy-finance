import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 -1.95703e-06 50 -4.37114e-06C22.3858 8.44143e-07 1.44146e-05 22.3858 1.96299e-05 50C1.72158e-05 77.6142 22.3858 100 50 100ZM49.8577 92C73.0536 92 91.8577 73.196 91.8577 50C91.8577 26.804 73.0536 8 49.8577 8C26.6617 8 7.85768 26.804 7.85768 50C7.85768 73.196 26.6617 92 49.8577 92Z"
      />
      <rect x="20.8333" y="45.8335" width="58.3333" height="11.1111" rx="4.16667" />
    </Svg>
  )
}

export default Icon
