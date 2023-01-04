import { ChainId } from 'sdk'
import MAINNET_CONSTANTS from './mainnet'
import BTT_CONSTANTS from './btt'
import ETC_CONSTANTS from './etc'
import TESTNET_CONSTANTS from './testnet'

export const CHAINS_CONSTANTS = {
  [ChainId.Mainnet]: MAINNET_CONSTANTS,
  [ChainId.BTT]: BTT_CONSTANTS,
  [ChainId.ETC]: ETC_CONSTANTS,
  [ChainId.Testnet]: TESTNET_CONSTANTS,
}
