import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlist.json'
import { farmsConfig } from 'config/constants'
import { wrappedNativeTokens } from '../tokens'

const MAINNET_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.MAINNET,
    hexChainId: '0x334',
    chainName: 'Callisto',
    image: `${BASE_URL}/images/networks/clo.png`,
    nativeSymbol: 'CLO',
    wrappedNativeSymbol: 'WCLO',
    nativeAddress: '0x0000000000000000000000000000000000000001',
  },
  rpcs: ['https://rpc.callisto.network/'],
  explorer: {
    name: 'CallistoScan',
    url: 'https://explorer.callisto.network',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farmsConfig[ChainId.MAINNET],
  rewardTokensPerYear: new BigNumber(50000000 * 0.8),
  wrappedNativeTokens: wrappedNativeTokens[ChainId.MAINNET],
}

export default MAINNET_CONSTANTS
