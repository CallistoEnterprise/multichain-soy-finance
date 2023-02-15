import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlist.json'
import farms from '../farms/farmsInCLO'

const MAINNET_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.Mainnet,
    hexChainId: '0x334',
    chainName: 'Callisto',
    officialName: 'Callisto Mainnet',
    image: `${BASE_URL}/images/networks/clo.png`,
    nativeSymbol: 'CLO',
    wrappedNativeSymbol: 'WCLO',
    nativeAddress: '0x0000000000000000000000000000000000000001',
    wrappedNativeAddress: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
  },
  rpcs: ['https://rpc.callisto.network/'],
  explorer: {
    name: 'CallistoScan',
    url: 'https://explorer.callisto.network',
  },
  subgraph: {
    infoClient: 'https://graphql.callisto.network/mainnet/subgraphs/name/SoyFinance/exchange',
    blocksClient: 'https://graphql.callisto.network/mainnet/subgraphs/name/SoyFinance/blocks',
    startTimestamp: 1634494539, // October-17-2021 09:15:02 PM +2 UTC
    vars: {
      trackedReserveCOIN: 'trackedReserveCLO',
      coinPrice: 'cloPrice',
      derivedCOIN: 'derivedCLO',
    },
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(50000000 * 0.8),
}

export default MAINNET_CONSTANTS
