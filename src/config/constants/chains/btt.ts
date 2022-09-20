import { ChainId } from '@soy-libs/sdk-multichain'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInBTT.json'
import { farmsConfig } from 'config/constants'
import { wrappedNativeTokens } from '../tokens'

const BTT_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.BTTMAINNET,
    hexChainId: '0xc7',
    chainName: 'BitTorrent',
    image: `${BASE_URL}/images/networks/btt.png`,
    nativeSymbol: 'BTT',
    wrappedNativeSymbol: 'WBTT',
    nativeAddress: '0x0000000000000000000000000000000000001010',
  },
  rpcs: ['https://bttcscan.com/'],
  explorer: {
    name: 'BttcScan',
    url: 'https://blockscout.com/etc/mainnet/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farmsConfig[ChainId.BTTMAINNET],
  rewardTokensPerYear: new BigNumber(50000000 * 0.1),
  wrappedNativeTokens: wrappedNativeTokens[ChainId.BTTMAINNET],
}

export default BTT_CONSTANTS
