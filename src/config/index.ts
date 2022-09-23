import BigNumber from 'bignumber.js'
import { BIG_TEN } from 'utils/bigNumber'

export const CALLISTO_BLOCK_TIME = 2.2
export const SOY_PER_BLOCK = new BigNumber(5)
export const BLOCKS_PER_YEAR = new BigNumber((60 / CALLISTO_BLOCK_TIME) * 60 * 24 * 365)
export const BASE_URL = 'https://app.soy.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 3000000
export const DEFAULT_GAS_PRICE = 5
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const ONE_YEAR_TIMESTAMP = 365 * 24 * 60 * 60
export const localStorageChainIdKey = "soyfinanceChainId"
