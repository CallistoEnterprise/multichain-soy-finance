import { Currency, CurrencyAmount, ETHERS, Token, TokenAmount, WETH } from 'sdk'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && currency === ETHERS[chainId] ? WETH[chainId] : currency instanceof Token ? currency : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined,
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token): Currency {
  if (token.equals(WETH[token.chainId])) return ETHERS[token.chainId]
  return token
}
