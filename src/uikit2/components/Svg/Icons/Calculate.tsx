import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.26734 -8.39689e-07C1.54144 -9.90571e-07 0.142335 1.39911 0.142335 3.125L0.142334 96.875C0.142334 98.6009 1.54144 100 3.26733 100L97.0173 100C98.7432 100 100.142 98.6009 100.142 96.875L100.142 3.125C100.142 1.39911 98.7432 -1.22316e-07 97.0173 -2.73198e-07L3.26734 -8.39689e-07ZM9.125 6C7.39911 6 6 7.39911 6 9.125L6 90.875C6 92.6009 7.39911 94 9.125 94L90.875 94C92.6009 94 94 92.6009 94 90.875L94 9.125C94 7.39911 92.6009 6 90.875 6L9.125 6Z"
      />
      <rect x="25.1423" y="56.25" width="6.25" height="31.25" rx="1.33929" />
      <rect x="43.8923" y="68.75" width="6.25" height="31.25" rx="1.33929" transform="rotate(90 43.8923 68.75)" />
      <rect x="77.6964" y="15.054" width="6.34847" height="31.25" rx="1.33929" transform="rotate(45 77.6964 15.054)" />
      <rect x="82.046" y="37.2902" width="5.95488" height="31.25" rx="1.33929" transform="rotate(135 82.046 37.2902)" />
      <rect x="43.8923" y="25" width="5.80357" height="31.25" rx="1.33929" transform="rotate(90 43.8923 25)" />
      <rect x="84.5174" y="62.5" width="4.6875" height="31.25" rx="1.33929" transform="rotate(90 84.5174 62.5)" />
      <rect x="84.5174" y="76.5625" width="4.6875" height="31.25" rx="1.33929" transform="rotate(90 84.5174 76.5625)" />
    </Svg>
  )
}

export default Icon
