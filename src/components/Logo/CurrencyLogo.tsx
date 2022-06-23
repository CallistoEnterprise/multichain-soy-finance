import { Currency, ETHER, BTTETHER, Token } from '@soy-libs/sdk-multichain'
import { BASE_URL } from 'config'
// import { BinanceIcon } from '@soy-libs/uikit2'
// import { Assets } from 'assets/images'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`
const LogoImg = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin-right: 5px;
`;
export default function CurrencyLogo({
  currency,
  size = '22px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []
    if (currency === BTTETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }
      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <LogoImg size={size} src={`${BASE_URL}/images/networks/clo.png`} alt="clo"/>
  }

  if (currency === BTTETHER) {
    return <LogoImg size={size} src={`${BASE_URL}/images/networks/btt.png`} alt="btt"/>
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
