import { ChainId } from '@soy-libs/sdk-multichain'
import farms from './farmsInCLO'
import testNetFarms from './farmsInCLOTestnet'
import bttFarms from './farmsInBTT'
import etcFarms from './farmsInETC'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [ChainId.MAINNET]: farms,
  [ChainId.CLOTESTNET]: testNetFarms,
  [ChainId.BTTMAINNET]: bttFarms,
  [ChainId.ETCCLASSICMAINNET]: etcFarms
}
