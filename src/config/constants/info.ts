import { CHAINS_CONSTANTS } from './chains'
const chainId = 820 //getLocalStorageChainId()
export const MINIMUM_SEARCH_CHARACTERS = 2

export const WEEKS_IN_YEAR = 52.1429

export const TOTAL_FEE = 0.002
export const LP_HOLDERS_FEE = 0.002
export const TREASURY_FEE = 0.0
export const BUYBACK_FEE = 0.0
export const SS_V2_START = CHAINS_CONSTANTS[chainId].subgraph.startTimestamp
export const { trackedReserveCOIN, coinPrice, derivedCOIN } = CHAINS_CONSTANTS[chainId].subgraph.vars

export const ONE_DAY_UNIX = 86400 // 24h * 60m * 60s
export const ONE_HOUR_SECONDS = 3600

export const ITEMS_PER_INFO_TABLE_PAGE = 10

// These tokens are either incorrectly priced or have some other issues that spoil the query data
// None of them present any interest as they have almost 0 daily trade volume
export const TOKEN_BLACKLIST = [
  '0xffbce94c24a6c67daf7315948eb8b9fa48c5cdee',
  '0xcc78d0a86b0c0a3b32debd773ec815130f9527cf',
]
