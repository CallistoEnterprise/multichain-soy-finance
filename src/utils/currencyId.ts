import { Currency, ETHERS, Token } from 'sdk'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import getLocalStorageChainId from './getLocalStorageChainId'

export function currencyId(currency: Currency): string {
  const chainId = getLocalStorageChainId()
  if (currency === ETHERS[chainId]) return CHAINS_CONSTANTS[chainId].general.nativeSymbol
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
