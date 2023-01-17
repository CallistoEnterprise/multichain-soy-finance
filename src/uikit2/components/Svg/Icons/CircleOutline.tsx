import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.8577 100C77.4719 100 99.8577 77.6142 99.8577 50C99.8577 22.3858 77.4719 1.00435e-05 49.8577 7.62939e-06C22.2434 1.28447e-05 -0.142316 22.3858 -0.142311 50C-0.142314 77.6142 22.2434 100 49.8577 100ZM49.7154 92C72.9113 92 91.7154 73.196 91.7154 50C91.7154 26.8041 72.9113 8.00001 49.7154 8.00002C26.5194 8.00001 7.71535 26.8041 7.71535 50C7.71535 73.196 26.5194 92 49.7154 92Z"
      />
    </Svg>
  )
}

export default Icon
