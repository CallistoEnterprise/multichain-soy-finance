import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M33.5017 42.767C14.9204 50.3786 24.9119 69.4078 20.438 78.5525L-0.857666 87.6508L2.18456 93.7164L23.9575 85.5825C30.6385 93.7164 28.7296 95.0971 38.2739 97C53.5447 97 54.4991 93.1942 59.2712 89.3884C54.4037 85.749 37.6773 82.5962 32.607 81.5853C41.0927 78.0981 45.6456 76.016 51.6357 70.9706C57.7239 80.1405 60.2018 79.8765 72.4556 78.5714L72.6332 78.5525C117.782 67.6973 98.4806 63.691 77.4052 65.6019C53.9025 67.5049 57.3623 63.699 64.9977 57.0388C67.4314 55.8257 68.6066 55.3013 70.6348 55.8068C91.3221 60.0893 96.4937 47.4819 96.4937 40.6429C88.2159 37.4233 74.9765 42.987 70.7242 45.6214L85.846 31.5446C98.0149 21.8398 91.125 5.06553 85.0406 -1C72.633 10.4175 69.6208 21.9409 70.6348 31.5446C70.6348 37.6102 64.2819 45.9484 60.2255 48.4757C62.6593 35.1316 55.4236 25.9846 52.3814 23.9627C36.5618 39.7331 44.7758 53.7849 50.8603 58.8395C49.6434 63.692 33.3526 73.0947 27.7752 75.1165C33.8596 60.5592 41.1371 57.9903 33.5017 42.767Z" />
    </Svg>
  )
}

export default Icon