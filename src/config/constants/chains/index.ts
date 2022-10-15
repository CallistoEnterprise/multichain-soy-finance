import { ChainId } from '@callisto-enterprise/soy-sdk'
import MAINNET_CONSTANTS from './mainnet'
import BTT_CONSTANTS from './btt'
import ETC_CONSTANTS from './etc'
import TESTNET_CONSTANTS from './testnet'

export const CHAINS_CONSTANTS = {
  [ChainId.MAINNET]: MAINNET_CONSTANTS,
  [ChainId.BTTMAINNET]: BTT_CONSTANTS,
  [ChainId.ETCCLASSICMAINNET]: ETC_CONSTANTS,
  [ChainId.CLOTESTNET]: TESTNET_CONSTANTS,
}
