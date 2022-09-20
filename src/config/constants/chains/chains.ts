import { ChainId } from '@soy-libs/sdk-multichain'
import MAINNET_CONSTANTS from './mainnet'
import BTT_CONSTANTS from './btt'

export const CHAINS_CONSTANTS = {
  [ChainId.MAINNET]: MAINNET_CONSTANTS,
  [ChainId.BTTMAINNET]: BTT_CONSTANTS,
}
