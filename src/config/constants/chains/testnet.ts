import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlist_test.json'
import { farmsConfig } from 'config/constants'
import { wrappedNativeTokens } from '../tokens'

const TESTNET_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.CLOTESTNET,
    hexChainId: '0x50F9',
    chainName: 'CLO Testnet',
    image: `${BASE_URL}/images/networks/clo.png`,
    nativeSymbol: 'CLO',
    wrappedNativeSymbol: 'WCLO',
    nativeAddress: '0x0000000000000000000000000000000000000001',
  },
  rpcs: ['https://testnet-rpc.callisto.network/'],
  explorer: {
    name: 'CLOTestScan',
    url: 'https://testnet-explorer.callisto.network',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farmsConfig[ChainId.CLOTESTNET],
  rewardTokensPerYear: new BigNumber(50000000 * 0.8),
  wrappedNativeTokens: wrappedNativeTokens[ChainId.CLOTESTNET],
}

export default TESTNET_CONSTANTS
