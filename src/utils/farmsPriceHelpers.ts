import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'
import { Farm } from 'state/types'

const preferredQuoteTokensForMulti = {
  [ChainId.Mainnet]: ['BUSDT', 'WCLO'],
  [ChainId.Testnet]: ['BUSDT', 'WCLO'],
  [ChainId.BTT]: ['BUSDT', 'WBTT', 'ccCLO', 'SOY'],
  [ChainId.ETC]: ['BUSDT', 'WETC', 'ccCLO', 'SOY'],
}
/**
 * Returns the first farm with a quote token that matches from an array of preferred quote tokens
 * @param farms Array of farms
 * @param preferredQuoteTokens Array of preferred quote tokens
 * @returns A preferred farm, if found - or the first element of the farms array
 */
export const filterFarmsByQuoteToken = (farms: Farm[]): Farm => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? DEFAULT_CHAIN_ID)
  const preferredFarm = farms.find((farm) => {
    return preferredQuoteTokensForMulti[chainId].some((quoteToken) => {
      return farm.quoteToken.symbol === quoteToken
    })
  })
  return preferredFarm || farms[2]
}

export default filterFarmsByQuoteToken
