import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInETC.json'
import farms from '../farms/farmsInETC'

const ETC_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.ETC,
    hexChainId: '0x3D',
    chainName: 'ETC Chain',
    officialName: 'Ethereum Classic Mainnet',
    image: `${BASE_URL}/images/networks/etc.png`,
    nativeSymbol: 'ETC',
    wrappedNativeSymbol: 'WETC',
    nativeAddress: '0x0000000000000000000000000000000000000005',
    wrappedNativeAddress: '0x35e9A89e43e45904684325970B2E2d258463e072',
  },
  rpcs: ['https://etc.etcdesktop.com'], // ,'https://geth-at.etc-network.info', 'https://01.callisto.network/etcnode2'
  explorer: {
    name: 'ETCScan',
    url: 'https://blockscout.com/etc/mainnet/',
  },
  subgraph: {
    infoClient: 'https://03.callisto.network/subgraphsetc/name/soyswapetc',
    blocksClient: 'https://03.callisto.network/subgraphsetc/name/blocksetc',
    startTimestamp: 1655710961, // June-20-2022 10:42:41 AM +3 UTC
    vars: {
      trackedReserveCOIN: 'trackedReserveETC',
      coinPrice: 'etcPrice',
      derivedCOIN: 'derivedETC',
    },
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(40000000 * 0),
}

export default ETC_CONSTANTS
