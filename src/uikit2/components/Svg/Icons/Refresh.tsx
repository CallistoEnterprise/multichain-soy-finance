import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M50.1621 4.76601e-05C24.1963 -0.0355273 2.53363 19.8487 0.325551 45.7453C-1.88253 71.6419 16.1004 94.913 41.6968 99.2823C67.2931 103.652 91.9651 87.6616 98.4566 62.4961H85.4636C79.1124 80.4771 60.2894 90.822 41.7237 86.535C23.1579 82.2481 10.7642 64.6952 12.924 45.7465C15.0837 26.7978 31.1087 12.4902 50.1621 12.4993C60.0867 12.5138 69.5885 16.5227 76.5289 23.6236L56.4369 43.7473H100.142V4.76601e-05L85.4636 14.6867C76.1214 5.27865 63.4142 -0.00796386 50.1621 4.76601e-05Z" />
    </Svg>
  )
}

export default Icon
