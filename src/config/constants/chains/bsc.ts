import { CALLISTO_CHAIN_ID as ChainId } from '@callisto-enterprise/chain-constants'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInBSC.json'
import farms from '../farms/farmsInBSC'

const BSC_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.BSC,
    hexChainId: '0x38',
    chainName: 'BSC Chain',
    officialName: 'BSCereum Mainnet',
    image: `${BASE_URL}/images/networks/bsc.png`,
    nativeSymbol: 'BNB',
    wrappedNativeSymbol: 'WBNB',
    nativeAddress: '0x0000000000000000000000000000000000001010',
    wrappedNativeAddress: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  },
  rpcs: ['https://rpc.ankr.com/bsc'],
  explorer: {
    name: 'Bscscan',
    url: 'https://bscscan.com/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(50000000 * 0),
}

export default BSC_CONSTANTS
