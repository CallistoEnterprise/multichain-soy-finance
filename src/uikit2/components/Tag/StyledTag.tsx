import styled from 'styled-components'
import { space, variant } from 'styled-system'
import { PancakeTheme } from '../..'
import { Colors } from '../../theme/types'
import { scaleVariants, styleVariants } from './theme'
import { TagProps, variants } from './types'

interface ThemedProps extends TagProps {
  theme: PancakeTheme
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY, color }: ThemedProps) => {
  if (outline) {
    if (color) {
      return `
      color: ${color};
      background: transparent;
      border: 2px solid ${color};
    `
    } else {
      const themeColorKey = styleVariants[variantKey].backgroundColor as keyof Colors
      const realColor = theme.colors[themeColorKey]

      return `
      color: ${realColor};
      background: transparent;
      border: 2px solid ${realColor};
    `
    }
  }

  return ''
}

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`

export default StyledTag
