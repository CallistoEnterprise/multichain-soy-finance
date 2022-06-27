// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import { localStorageChainIdKey, NativeSymbols } from 'config'
import { getWmaticAddress } from './addressHelpers'

const getLiquidityUrlPathParts = ({ quoteTokenAddress, tokenAddress }) => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CHAIN_ID)
  const wMATICAddressString = getWmaticAddress(chainId)
  const quoteTokenAddressString: string = quoteTokenAddress ? quoteTokenAddress[chainId] : null
  const tokenAddressString: string = tokenAddress ? tokenAddress[chainId] : null
  const firstPart =
    !quoteTokenAddressString || quoteTokenAddressString === wMATICAddressString ? NativeSymbols[chainId]?.toUpperCase() : quoteTokenAddressString
  const secondPart = !tokenAddressString || tokenAddressString === wMATICAddressString ? NativeSymbols[chainId]?.toUpperCase() : tokenAddressString
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
