import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlist_test.json'
import farms from '../farms/farmsInCLOTestnet'

const TESTNET_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.CLOTESTNET,
    hexChainId: '0x50F9',
    chainName: 'CLO Testnet',
    image: `${BASE_URL}/images/networks/clo.png`,
    nativeSymbol: 'CLO',
    wrappedNativeSymbol: 'WCLO',
    nativeAddress: '0x0000000000000000000000000000000000000001',
    wrappedNativeAddress: '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
  },
  rpcs: ['https://testnet-rpc.callisto.network/'],
  explorer: {
    name: 'CLOTestScan',
    url: 'https://testnet-explorer.callisto.network',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(50000000 * 0.8),
}

export default TESTNET_CONSTANTS
