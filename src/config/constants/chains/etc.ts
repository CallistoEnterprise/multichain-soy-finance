import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInETC.json'
import tokens from '../tokens'

const ETC_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.ETCCLASSICMAINNET,
    hexChainId: '0x3D',
    chainName: 'ETC Chain',
    image: `${BASE_URL}/images/networks/etc.png`,
    nativeSymbol: 'ETC',
    wrappedNativeSymbol: 'WETC',
    nativeAddress: '0x0000000000000000000000000000000000000005',
  },
  rpcs: ['https://etc.etcdesktop.com/'],
  explorer: {
    name: 'ETCScan',
    url: 'https://blockscout.com/etc/mainnet/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  rewardTokensPerYear: new BigNumber(50000000 * 0.1),
  wrappedNativeAddress: tokens.wetc,
}

export default ETC_CONSTANTS
