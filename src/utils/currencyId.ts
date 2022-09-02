import { Currency, ETHERS, Token, ChainId } from '@soy-libs/sdk-multichain'
import { localStorageChainIdKey, NativeSymbols } from 'config'

export function currencyId(currency: Currency): string {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  if (currency === ETHERS[chainId]) return NativeSymbols[chainId]?.toUpperCase()
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
