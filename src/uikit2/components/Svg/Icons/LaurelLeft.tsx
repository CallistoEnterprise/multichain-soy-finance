import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M65.8131 43.0054C84.3782 50.6341 74.3954 69.7058 78.8653 78.8711L100.142 87.9897L97.1028 94.0688L75.349 85.9168C68.6739 94.0688 70.581 95.4527 61.0452 97.3598C45.7878 97.3598 44.8342 93.5455 40.0662 89.7311C44.9295 86.0837 61.6412 82.9238 66.7071 81.9106C58.2288 78.4156 53.6799 76.3288 47.695 71.2722C41.6122 80.4625 39.1365 80.198 26.8935 78.89L26.716 78.8711C-18.3927 67.9915 0.89128 63.9762 21.9482 65.8915C45.4303 67.7986 41.9735 63.9843 34.3448 57.3092C31.9132 56.0934 30.739 55.5678 28.7126 56.0744C8.04353 60.3665 2.87641 47.7309 2.87647 40.8766C11.1469 37.6497 24.3748 43.2259 28.6233 45.8661L13.5148 31.7579C1.35661 22.0313 8.24041 5.2195 14.3195 -0.859619C26.7162 10.5834 29.7258 22.1326 28.7126 31.7579C28.7126 37.837 35.06 46.1939 39.1128 48.7269C36.6811 35.3528 43.9105 26.1854 46.95 24.159C62.7557 39.9647 54.5489 54.048 48.4698 59.1139C49.6856 63.9772 65.9621 73.401 71.5346 75.4273C65.4555 60.8375 58.1844 58.2628 65.8131 43.0054Z" />
    </Svg>
  )
}

export default Icon
