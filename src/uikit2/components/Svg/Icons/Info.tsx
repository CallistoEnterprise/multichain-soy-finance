import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <circle cx="50.1423" cy="29.1666" r="5.55555" transform="rotate(180 50.1423 29.1666)" />
      <rect
        x="55.6979"
        y="77.7776"
        width="11.1111"
        height="38.8889"
        rx="5.55555"
        transform="rotate(180 55.6979 77.7776)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 1.00435e-05 50 7.62939e-06C22.3858 1.28447e-05 1.76729e-05 22.3858 2.28882e-05 50C2.04741e-05 77.6142 22.3858 100 50 100ZM49.8577 92C73.0536 92 91.8577 73.196 91.8577 50C91.8577 26.8041 73.0536 8.00001 49.8577 8.00002C26.6617 8.00001 7.85768 26.8041 7.85768 50C7.85769 73.196 26.6617 92 49.8577 92Z"
      />
    </Svg>
  )
}

export default Icon
