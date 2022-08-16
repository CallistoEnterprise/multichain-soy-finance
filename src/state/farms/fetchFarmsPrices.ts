import BigNumber from 'bignumber.js'
import { localStorageChainIdKey, WrappedNativeSymbols } from 'config'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterFarmsByQuoteToken } from 'utils/farmsPriceHelpers'
import { Farm } from 'state/types'

const getFarmFromTokenSymbol = (farms: Farm[], tokenSymbol: string): Farm => {
  const farmsWithTokenSymbol = farms.filter((farm) => farm.token.symbol === tokenSymbol)
  const filteredFarm = filterFarmsByQuoteToken(farmsWithTokenSymbol)
  // console.log(farmsWithTokenSymbol, filteredFarm, tokenSymbol)
  return filteredFarm
}

const getFarmBaseTokenPrice = (
  farm: Farm,
  quoteTokenFarm: Farm,
  cloPriceBusd: BigNumber,
  ccCloPrice: BigNumber,
  chainId,
): BigNumber => {
  const hasTokenPriceVsQuote = Boolean(farm.tokenPriceVsQuote)

  if (farm.quoteToken.symbol === 'BUSDT' || farm.quoteToken.symbol === 'USDT') {
    return hasTokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (farm.quoteToken.symbol === WrappedNativeSymbols[chainId]) {
    return hasTokenPriceVsQuote ? cloPriceBusd.times(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  if ((chainId === 199 || chainId === 61) && farm.quoteToken.symbol === 'ccCLO') {
    return hasTokenPriceVsQuote ? ccCloPrice.times(farm.tokenPriceVsQuote) : BIG_ZERO
  }
  // We can only calculate profits without a quoteTokenFarm for BUSDT/CLO farms
  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  // Possible alternative farm quoteTokens:
  // UST (i.e. MIR-UST), pBTC (i.e. PNT-pBTC), BTCB (i.e. bBADGER-BTCB), ETH (i.e. SUSHI-ETH)
  // If the farm's quote token isn't BUSDT or wCLO, we then use the quote token, of the original farm's quote token
  // i.e. for farm PNT - pBTC we use the pBTC farm's quote token - CLO, (pBTC - CLO)
  // from the CLO - pBTC price, we can calculate the PNT - BUSDT price
  if (quoteTokenFarm.quoteToken.symbol === WrappedNativeSymbols[chainId]) {
    const quoteTokenInBusd = cloPriceBusd.times(quoteTokenFarm.tokenPriceVsQuote)
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'BUSDT' || quoteTokenFarm.quoteToken.symbol === 'USDT') {
    const quoteTokenInBusd = quoteTokenFarm.tokenPriceVsQuote
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  // Catch in case token does not have immediate or once-removed BUSDT/wCLO quoteToken
  return BIG_ZERO
}

const getFarmQuoteTokenPrice = (
  farm: Farm,
  quoteTokenFarm: Farm,
  bnbPriceBusd: BigNumber,
  ccCloPrice: BigNumber,
  chainId: number,
): BigNumber => {
  if (farm.quoteToken.symbol === 'BUSDT' || farm.quoteToken.symbol === 'USDT') {
    return BIG_ONE
  }

  if (farm.quoteToken.symbol === WrappedNativeSymbols[chainId]) {
    return bnbPriceBusd
  }

  if ((chainId === 199 || chainId === 61) && farm.quoteToken.symbol === 'ccCLO') {
    return ccCloPrice
  }

  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === WrappedNativeSymbols[chainId]) {
    return quoteTokenFarm.tokenPriceVsQuote ? bnbPriceBusd.times(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'BUSDT' || quoteTokenFarm.quoteToken.symbol === 'USDT') {
    return quoteTokenFarm.tokenPriceVsQuote ? new BigNumber(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  return BIG_ZERO
}

const farmsPids = {
  820: 4,
  199: 14,
  61: 6
}
const busdtFarms = {
  820: 5,
  199: 19,
  61: 5
}
const refFarms = {
  820: 2,
  199: 9,
  61: 1
}
const fetchFarmsPrices = async (farms) => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? 20729
  const nativeBusdtFarm = farms.find((farm: Farm) => farm.pid === farmsPids[chainId])
  const soyBusdtFarm = farms.find((farm: Farm) => farm.pid === busdtFarms[chainId])
  const soyCloFarm = farms.find((farm: Farm) => farm.pid === refFarms[chainId])

  const soyPrice = soyBusdtFarm ? new BigNumber(soyBusdtFarm.tokenPriceVsQuote) : BIG_ZERO
  const cloPrice = soyCloFarm ? soyPrice.times(soyCloFarm.tokenPriceVsQuote) : BIG_ZERO

  const nativePriceBusdt = nativeBusdtFarm.tokenPriceVsQuote ? BIG_ONE.div(nativeBusdtFarm.tokenPriceVsQuote) : BIG_ZERO
  const farmsWithPrices = farms.map((farm) => {
    const quoteTokenFarm = getFarmFromTokenSymbol(farms, farm.quoteToken.symbol)
    const baseTokenPrice =
      farm.pid === 15 && (chainId === 199 || chainId === 61)
        ? nativePriceBusdt
        : getFarmBaseTokenPrice(farm, quoteTokenFarm, nativePriceBusdt, cloPrice, chainId)
    const quoteTokenPrice =
      farm.pid === 15 && (chainId === 199 || chainId === 61)
        ? cloPrice
        : getFarmQuoteTokenPrice(farm, quoteTokenFarm, nativePriceBusdt, cloPrice, chainId)
    
    const token = { ...farm.token, usdcPrice: baseTokenPrice.toJSON() }
    const quoteToken = { ...farm.quoteToken, usdcPrice: quoteTokenPrice.toJSON() }
    return { ...farm, token, quoteToken }
  })

  return farmsWithPrices
}

export default fetchFarmsPrices
