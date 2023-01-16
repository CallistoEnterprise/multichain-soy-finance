import React from 'react'
import { scales, TagProps } from './types'
import { StyledTag } from './StyledTag'

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...props }) => (
  <StyledTag {...props}>
    {React.isValidElement(startIcon) &&
      React.cloneElement(startIcon, {
        mr: '0.5em',
      } as unknown)}
    {children}
    {React.isValidElement(endIcon) &&
      React.cloneElement(endIcon, {
        ml: '0.5em',
      } as unknown)}
  </StyledTag>
)

Tag.defaultProps = {
  variant: 'primary',
  scale: scales.MD,
  outline: false,
}

export default Tag
