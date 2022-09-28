import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInETC.json'
import farms from '../farms/farmsInETC'

const ETC_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.ETCCLASSICMAINNET,
    hexChainId: '0x3D',
    chainName: 'ETC Chain',
    officialName: 'Ethereum Classic Mainnet',
    image: `${BASE_URL}/images/networks/etc.png`,
    nativeSymbol: 'ETC',
    wrappedNativeSymbol: 'WETC',
    nativeAddress: '0x0000000000000000000000000000000000000005',
    wrappedNativeAddress: '0x35e9A89e43e45904684325970B2E2d258463e072',
  },
  rpcs: ['https://etc.etcdesktop.com/'],
  explorer: {
    name: 'ETCScan',
    url: 'https://blockscout.com/etc/mainnet/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(50000000 * 0.1),
}

export default ETC_CONSTANTS
