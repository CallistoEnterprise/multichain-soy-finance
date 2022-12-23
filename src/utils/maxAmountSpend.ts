import { ChainId, CurrencyAmount, ETHERS, JSBI } from 'sdk'
import { MIN_CLO } from '../config/constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount, chainId = ChainId.MAINNET): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === ETHERS[chainId]) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_CLO)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_CLO), chainId)
    }
    return CurrencyAmount.ether(JSBI.BigInt(0), chainId)
  }
  return currencyAmount
}

export default maxAmountSpend
