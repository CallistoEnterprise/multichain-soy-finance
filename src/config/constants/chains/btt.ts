import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInBTT.json'
import farms from '../farms/farmsInBTT'

const BTT_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.BTTMAINNET,
    hexChainId: '0xc7',
    chainName: 'BitTorrent',
    officialName: 'BitTorrent Chain Mainnet',
    image: `${BASE_URL}/images/networks/btt.png`,
    nativeSymbol: 'BTT',
    wrappedNativeSymbol: 'WBTT',
    nativeAddress: '0x0000000000000000000000000000000000001010',
    wrappedNativeAddress: '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e',
  },
  rpcs: ['https://rpc.bt.io/'],
  explorer: {
    name: 'BttcScan',
    url: 'https://bttcscan.com/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(50000000 * 0.1),
}

export default BTT_CONSTANTS
