import MAINNET_CONSTANTS from './mainnet'
import type { ChainConstants } from './types'
import { SupportedChain } from './types'

export const CHAINS_CONSTANTS = {
    [SupportedChain.Mainnet]: MAINNET_CONSTANTS,
}
