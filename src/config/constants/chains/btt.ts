import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInBTT.json'
import farms from '../farms/farmsInBTT'

const BTT_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.BTT,
    hexChainId: '0xc7',
    chainName: 'BitTorrent',
    officialName: 'BitTorrent Chain Mainnet',
    image: `${BASE_URL}/images/networks/btt.png`,
    nativeSymbol: 'BTT',
    wrappedNativeSymbol: 'WBTT',
    nativeAddress: '0x0000000000000000000000000000000000001010',
    wrappedNativeAddress: '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e',
  },
  rpcs: ['https://rpc.ankr.com/bttc'],
  explorer: {
    name: 'BttcScan',
    url: 'https://bttcscan.com/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(40000000 * 0),
}

export default BTT_CONSTANTS
