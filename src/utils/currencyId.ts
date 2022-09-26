import { Currency, ETHERS, Token } from '@soy-libs/sdk-multichain'
import { localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

export function currencyId(currency: Currency): string {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? DEFAULT_CHAIN_ID)
  if (currency === ETHERS[chainId]) return CHAINS_CONSTANTS[chainId].general.nativeSymbol
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
