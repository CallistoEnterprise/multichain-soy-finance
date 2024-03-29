import React, { cloneElement, Children, ReactElement } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { PancakeTheme } from '../..'
import { scales, variants } from '../Button/types'
import { ButtonMenuProps } from './types'

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: PancakeTheme
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? 'tabBack' : 'tabBack']
}

const getBorderColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? 'inputSecondary' : 'disabled']
}

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 20px;
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
  border: 1px solid ${getBorderColor};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  & > button,
  & > a {
    margin-left: ${({ fullWidth }) => (fullWidth ? '0px' : '0px')}; // To avoid focus shadow overlap
    flex: ${({ fullWidth }) => (fullWidth ? 1 : 'auto')};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle};
        }
    `
    }
    return ''
  }}
  ${space}
`

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonMenu disabled={disabled} variant={variant} fullWidth={fullWidth} {...props}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
        })
      })}
    </StyledButtonMenu>
  )
}

export default ButtonMenu
