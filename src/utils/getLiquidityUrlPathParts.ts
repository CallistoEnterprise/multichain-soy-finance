// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import { ChainId } from '@soy-libs/sdk-multichain'
import { localStorageChainIdKey } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { getWrappedTokenAddress } from './addressHelpers'

const getLiquidityUrlPathParts = ({ quoteTokenAddress, tokenAddress }) => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? ChainId.MAINNET)
  const wMATICAddressString = getWrappedTokenAddress(chainId)
  const quoteTokenAddressString: string = quoteTokenAddress ? quoteTokenAddress[chainId] : null
  const tokenAddressString: string = tokenAddress ? tokenAddress[chainId] : null
  const firstPart =
    !quoteTokenAddressString || quoteTokenAddressString === wMATICAddressString
      ? CHAINS_CONSTANTS[chainId].general.nativeSymbol
      : quoteTokenAddressString
  const secondPart =
    !tokenAddressString || tokenAddressString === wMATICAddressString
      ? CHAINS_CONSTANTS[chainId].general.nativeSymbol
      : tokenAddressString
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
