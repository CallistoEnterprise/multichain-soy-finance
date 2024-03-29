import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 23" {...props}>
      <defs>
        <clipPath id="clipPath">
          <path
            className="cls-1"
            style={{ fill: 'none' }}
            d="M8.77,1.35h0l-8.56,15a1.05,1.05,0,0,0,.38,1.44l6.71,3.8a1.06,1.06,0,0,0,1.57-.94v-2h0A1.55,1.55,0,0,0,7.31,17H7.19a1.53,1.53,0,0,1-1.55-1.55,1.57,1.57,0,0,1,.53-1.18h0L10,10.85h0a1.57,1.57,0,0,1,2.09,0h0l3.8,3.36h0a1.56,1.56,0,0,1,.52,1.17,1.6,1.6,0,0,1-1.56,1.58H14.7a1.61,1.61,0,0,0-1.58,1.6h0v2a1,1,0,0,0,1.56.91l6.69-3.93a1.07,1.07,0,0,0,.39-1.45L13.31,1.3h0A2.61,2.61,0,0,0,8.77,1.35Z"
          />
        </clipPath>
      </defs>
      <g className="cls-2" style={{ isolation: 'isolate' }} transform="translate(2)">
        <path d="M11.46,10A34.53,34.53,0,0,1,3.27,8C1,7.12-.11,6.12,0,5.16L0,5,.64,5l0,.2c-.09.65,1,1.51,3,2.29A34,34,0,0,0,11.54,9.4l.1,0c5.05.64,9.81.33,11.31-.74a.82.82,0,0,0,.41-.56l0-.2L24,8l0,.21a1.48,1.48,0,0,1-.67,1h0c-1.66,1.18-6.37,1.52-11.73.84Z" />
        <path d="M3.05,6.3l.45.29.4.27a4.11,4.11,0,0,1-.46.91,1.7,1.7,0,0,1-1.11.65,1.69,1.69,0,0,1-.48-1.2,4.13,4.13,0,0,1,.19-1l.48,0Z" />
        <path
          className="cls-3"
          d="M8.77,1.35h0l-8.56,15a1.05,1.05,0,0,0,.38,1.44l6.71,3.8a1.06,1.06,0,0,0,1.57-.94v-2h0A1.55,1.55,0,0,0,7.31,17H7.19a1.53,1.53,0,0,1-1.55-1.55,1.57,1.57,0,0,1,.53-1.18h0L10,10.85h0a1.57,1.57,0,0,1,2.09,0h0l3.8,3.36h0a1.56,1.56,0,0,1,.52,1.17,1.6,1.6,0,0,1-1.56,1.58H14.7a1.61,1.61,0,0,0-1.58,1.6h0v2a1,1,0,0,0,1.56.91l6.69-3.93a1.07,1.07,0,0,0,.39-1.45L13.31,1.3h0A2.61,2.61,0,0,0,8.77,1.35Z"
        />
        <g className="cls-4" style={{ clipPath: 'url(#clipPath)' }}>
          <path
            className="cls-3"
            d="M8.14,5.08-1.43,21.66A3.39,3.39,0,0,0,.11,22h22a3.44,3.44,0,0,0,1.55-.36L14.11,5.08A3.45,3.45,0,0,0,8.14,5.08Z"
          />
          <path
            className="cls-5"
            style={{ mixBlendMode: 'soft-light' }}
            d="M8.08,5.12-1.68,22a3.49,3.49,0,0,0,1.57.37H22.36A3.57,3.57,0,0,0,23.94,22L14.17,5.12A3.52,3.52,0,0,0,8.08,5.12Z"
          />
          <path
            className="cls-6"
            style={{ mixBlendMode: 'soft-light' }}
            d="M7.68,8.83-.5,23H22.75L14.57,8.83A4,4,0,0,0,7.68,8.83Z"
          />
        </g>
        <path d="M0,5.28l0-.21a1.45,1.45,0,0,1,.67-1h0c1.65-1.18,6.37-1.52,11.72-.84l.11,0a34.65,34.65,0,0,1,8.19,2C23,6.16,24.09,7.15,24,8.11l0,.21-.6-.08,0-.2c.16-1.29-4.47-3.34-10.93-4.17h-.09C7.29,3.21,2.54,3.52,1,4.59a.84.84,0,0,0-.41.56l0,.2Z" />
        <path d="M21.39,4.44s.19.11.6.39.52.35.52.35a5.14,5.14,0,0,1-.6,1.2,2.21,2.21,0,0,1-1.47.87,2.26,2.26,0,0,1-.65-1.59,5.8,5.8,0,0,1,.26-1.32l.63,0C21.17,4.41,21.39,4.44,21.39,4.44Z" />
      </g>
    </Svg>
  )
}

/* Original Wang icon:
  <Svg viewBox="0 0 24 24" {...props}>
    <path d="M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" />
  </Svg>
*/

export default Icon
