import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../../components/Svg'
import Flex from '../../../components/Box/Flex'
import { HamburgerIcon, HamburgerCloseIcon } from '../icons'
import MenuButton from './MenuButton'

interface Props {
  isPushed: boolean
  isDark: boolean
  togglePush: () => void
  href: string
  isTestnet: boolean
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`

const LogoText = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: #fff;
  letter-spacing: 1.2px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`
const LogoText2 = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: #919191;
  letter-spacing: 1.2px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`
const LogoPreText = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 28px;
  line-height: 27px;
  color: #a5c437;
  padding-left: 10px;
  @media screen and (max-width: 480px) {
    display: none;
    // padding-left: 5px;
    // font-size: 18px;
  }
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, isTestnet }) => {
  const isAbsoluteUrl = href.startsWith('http')
  const innerLogo = (
    <>
      <LogoIcon width="34px" />
      <LogoPreText>
        Soy.<LogoText>Swap</LogoText>
        {isTestnet && <LogoText2>.Testnet</LogoText2>}
      </LogoPreText>
    </>
  )

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="soyfinance home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="soyfinance home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  )
}

export default React.memo(
  Logo,
  (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark && prev.isTestnet === next.isTestnet,
)
