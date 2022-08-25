import BigNumber from 'bignumber.js'
import { ChainId } from '@soy-libs/sdk-multichain'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CALLISTO_BLOCK_TIME = 2.2

export const BASE_CALLISTO_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://explorer.callisto.network',
  [ChainId.CLOTESTNET]: 'https://testnet-explorer.callisto.network',
  [ChainId.BTTMAINNET]: 'https://bttcscan.com',
  [ChainId.BSC]: 'https://bscscan.com',
  [ChainId.BSCTESTNET]: 'https://testnet.bscscan.com',
  [ChainId.ETCCLASSICMAINNET]: 'https://etc.etcdesktop.com/'
}

export const ExplorerText = {
  [ChainId.MAINNET]: 'CallistoScan',
  [ChainId.CLOTESTNET]: 'CallistoScan',
  [ChainId.BTTMAINNET]: 'BttcScan',
  [ChainId.BSC]: 'BSCScan',
  [ChainId.BSCTESTNET]: 'BSCScan',
  [ChainId.ETCCLASSICMAINNET]: 'ETCScan'
}

export const NetworkNames = {
  [ChainId.MAINNET]: 'Callisto',
  [ChainId.CLOTESTNET]: 'CLO Testnet',
  [ChainId.BTTMAINNET]: 'Bittorent',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSCTESTNET]: 'BSC Testnet',
  [ChainId.ETCCLASSICMAINNET]: 'ETC'
}

export const NativeSymbols = {
  [ChainId.MAINNET]: 'clo',
  [ChainId.CLOTESTNET]: 'clo',
  [ChainId.BTTMAINNET]: 'btt',
  [ChainId.BSC]: 'bnb',
  [ChainId.BSCTESTNET]: 'bnb',
  [ChainId.ETCCLASSICMAINNET]: 'etc'
}

export const WrappedNativeSymbols = {
  [ChainId.MAINNET]: 'WCLO',
  [ChainId.CLOTESTNET]: 'WCLO',
  [ChainId.BTTMAINNET]: 'WBTT',
  [ChainId.BSC]: 'WBNB',
  [ChainId.BSCTESTNET]: 'WBNB',
  [ChainId.ETCCLASSICMAINNET]: 'WETC'
}

export const NativeAddress = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.CLOTESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.BTTMAINNET]: '0x0000000000000000000000000000000000001010',
  [ChainId.BSC]: '0x0000000000000000000000000000000000000007',
  [ChainId.BSCTESTNET]: '0x0000000000000000000000000000000000000007',
  [ChainId.ETHEREUM]: '0x0000000000000000000000000000000000000006',
  [ChainId.ETCCLASSICMAINNET]: '0x0000000000000000000000000000000000000005'
}

// SOY_PER_BLOCK details
// 40 SOY is minted per block
// 20 SOY per block is sent to Burn pool (A farm just for burning SOY)
// 10 SOY per block goes to SOY pool
// 9 SOY per block goes to Yield farms and lottery
// SOY_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// SOY/Block in src/views/Home/components/CakeDataRow.tsx = 19 (40 - Amount sent to burn pool)
export const SOY_PER_BLOCK = new BigNumber(5)
export const BLOCKS_PER_YEAR = new BigNumber((60 / CALLISTO_BLOCK_TIME) * 60 * 24 * 365)
export const SOY_PER_YEAR = SOY_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'http://localhost:3000' // 'https://app.soy.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_URL}/pool`
export const BASE_CALLISTO_SCAN_URL = BASE_CALLISTO_SCAN_URLS[ChainId.MAINNET]
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 3000000
export const DEFAULT_GAS_PRICE = 5
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const ONE_YEAR_TIMESTAMP = 365 * 24 * 60 * 60

export const REWARD_TOKENS_PER_YEAR ={
  20729:  new BigNumber(50000000 * 0.8),
  820:  new BigNumber(50000000 * 0.8),
  199:  new BigNumber(50000000 * 0.1),
  61:  new BigNumber(50000000 * 0.1),
}

export const localStorageChainIdKey = "soyfinanceChainId"
