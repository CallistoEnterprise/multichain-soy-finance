import { BASE_URL } from 'config'
import type { ChainConstants } from './types'
import { SupportedChain } from './types'
import DEFAULT_TOKEN_LIST from '../tokenLists/tokenlist.json'

const MAINNET_CONSTANTS: ChainConstants = {
    general: {
        chainId: SupportedChain.Mainnet,
        hexChainId: '0x334',
        chainName: 'Callisto',
        image: `${BASE_URL}/images/networks/clo.png`,
        nativeSymbol: "CLO",
        wrappedNativeSymbol: 'WCLO',
        nativeAddress: '0x0000000000000000000000000000000000000001'
    },
    rpcs: [
        "https://rpc.callisto.network/",
    ],
    explorer: {
        name: 'CallistoScan',
        url: 'https://explorer.callisto.network'
    },
    tokenLists: DEFAULT_TOKEN_LIST,
}
export default MAINNET_CONSTANTS
