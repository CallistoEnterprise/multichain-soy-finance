import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M65.7721 44.6478L41.9017 32.5553C40.9872 32.0358 39.9535 31.7627 38.9017 31.7627C37.85 31.7627 36.8162 32.0358 35.9017 32.5553C35.0077 33.1647 34.2903 33.9993 33.8221 34.9748C33.3539 35.9503 33.1514 37.032 33.2351 38.1108V62.1478C33.1552 63.2262 33.3594 64.3066 33.8273 65.2814C34.2952 66.2562 35.0104 67.0913 35.9017 67.7034C36.7282 68.2014 37.6776 68.458 38.6425 68.4441C39.7791 68.4247 40.8953 68.1393 41.9017 67.6108L65.7721 55.5553C69.3091 53.7034 69.8276 51.4071 69.8276 50.1478C69.8276 48.8886 69.3091 46.4441 65.7721 44.6478Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 1.00435e-05 50 7.62939e-06C22.3858 1.28447e-05 1.76729e-05 22.3858 2.28882e-05 50C2.04741e-05 77.6142 22.3858 100 50 100ZM49.8577 92C73.0536 92 91.8577 73.196 91.8577 50C91.8577 26.8041 73.0536 8.00001 49.8577 8.00002C26.6617 8.00001 7.85768 26.8041 7.85768 50C7.85769 73.196 26.6617 92 49.8577 92Z"
      />
    </Svg>
  )
}

export default Icon
