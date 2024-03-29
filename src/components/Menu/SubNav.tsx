import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'uikit2'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  margin-bottom: 40px;

  .d-none {
    @media screen and (max-width: 560px) {
      display: none;
    }
  }
`

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const { chainId } = useActiveWeb3React()

  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(location.pathname)}>
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {t('Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {t('Liquidity')}
        </ButtonMenuItem>
        {chainId !== ChainId.Testnet ? (
          <ButtonMenuItem id="pool-nav-bridge" href="https://bridge.soy.finance/" as="a" target="_blank">
            {t('Bridge')}
          </ButtonMenuItem>
        ) : (
          <ButtonMenuItem id="pool-nav-bridge" href="https://faucet.callisto.network/" as="a" target="_blank">
            {t('Faucet')}
          </ButtonMenuItem>
        )}
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
