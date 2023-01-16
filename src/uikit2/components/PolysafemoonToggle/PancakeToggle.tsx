import React from 'react'
import { PancakeStack, PancakeInput, PancakeLabel } from './StyledPancakeToggle'
import { PolysafemoonToggleProps, scales } from './types'

const PancakeToggle: React.FC<PolysafemoonToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <PancakeStack scale={scale}>
    <PancakeInput id={props.id || 'pancake-toggle'} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || 'pancake-toggle'}>
      <div className="pancakes">
        <div className="pancake" />
        {/* <div className="pancake" />
        <div className="pancake" />
        <div className="butter" /> */}
      </div>
    </PancakeLabel>
  </PancakeStack>
)

PancakeToggle.defaultProps = {
  scale: scales.MD,
}

export default PancakeToggle
