import { CALLISTO_CHAIN_ID as ChainId } from '@callisto-enterprise/chain-constants'
import BigNumber from 'bignumber.js'
import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlistInETH.json'
import farms from '../farms/farmsInETH'

const ETH_CONSTANTS: ChainConstants = {
  general: {
    chainId: ChainId.ETH,
    hexChainId: '0x1',
    chainName: 'ETH Chain',
    officialName: 'Ethereum Mainnet',
    image: `${BASE_URL}/images/networks/eth.png`,
    nativeSymbol: 'ETH',
    wrappedNativeSymbol: 'WETH',
    nativeAddress: '0x0000000000000000000000000000000000001010',
    wrappedNativeAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  rpcs: ['https://rpc.ankr.com/eth'],
  explorer: {
    name: 'Etherscan',
    url: 'https://etherscan.io/',
  },
  tokenLists: DEFAULT_TOKEN_LIST,
  farms: farms,
  rewardTokensPerYear: new BigNumber(50000000 * 0),
}

export default ETH_CONSTANTS
