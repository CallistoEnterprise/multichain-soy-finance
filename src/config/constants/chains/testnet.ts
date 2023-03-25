import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlist_test.json'
import farms from '../farms/farmsInCLOTestnet'

const TESTNET_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.Testnet,
    hexChainId: '0x50F9',
    chainName: 'CLO Testnet',
    officialName: 'Callisto Testnet',
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
  rewardTokensPerYear: new BigNumber(40000000 * 1),
}

export default TESTNET_CONSTANTS
