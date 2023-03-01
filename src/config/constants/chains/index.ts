import { CALLISTO_CHAIN_ID as ChainId } from '@callisto-enterprise/chain-constants'
import MAINNET_CONSTANTS from './mainnet'
import TESTNET_CONSTANTS from './testnet'
import ETC_CONSTANTS from './etc'
import BTT_CONSTANTS from './btt'
import ETH_CONSTANTS from './eth'
import BSC_CONSTANTS from './bsc'

export const CHAINS_CONSTANTS = {
  [ChainId.Mainnet]: MAINNET_CONSTANTS,
  [ChainId.Testnet]: TESTNET_CONSTANTS,
  [ChainId.ETC]: ETC_CONSTANTS,
  [ChainId.BTT]: BTT_CONSTANTS,
  [ChainId.ETH]: ETH_CONSTANTS,
  [ChainId.BSC]: BSC_CONSTANTS,
}
