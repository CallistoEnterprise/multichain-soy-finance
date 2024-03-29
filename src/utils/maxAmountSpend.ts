import { CurrencyAmount, ETHERS, JSBI } from 'sdk'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { MIN_ETHERS } from '../config/constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount, chainId = ChainId.Mainnet): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === ETHERS[chainId]) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETHERS[chainId])) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ETHERS[chainId]), chainId)
    }
    return CurrencyAmount.ether(JSBI.BigInt(0), chainId)
  }
  return currencyAmount
}

export default maxAmountSpend
