import { localStorageChainIdKey } from 'config'
import { Farm } from 'state/types'

const preferredQuoteTokensForMulti = {
  820: ['BUSDT', 'WCLO'],
  199: ['BUSDT', 'WBTT', 'ccCLO', 'SOY']
}
/**
 * Returns the first farm with a quote token that matches from an array of preferred quote tokens
 * @param farms Array of farms
 * @param preferredQuoteTokens Array of preferred quote tokens
 * @returns A preferred farm, if found - or the first element of the farms array
 */
export const filterFarmsByQuoteToken = (farms: Farm[]): Farm => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? 820
  const preferredFarm = farms.find((farm) => {
    return preferredQuoteTokensForMulti[chainId].some((quoteToken) => {
      return farm.quoteToken.symbol === quoteToken
    })
  })
  return preferredFarm || farms[2]
}

export default filterFarmsByQuoteToken
