import { ChainId } from '@soy-libs/sdk-multichain'
import { BASE_URL } from 'config'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://rpc.callisto.network/',
  [ChainId.CLOTESTNET]: 'https://testnet-rpc.callisto.network/',
  [ChainId.ETHEREUM]: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [ChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [ChainId.KOVAN]: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [ChainId.BSCTESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  [ChainId.ETCCLASSICMAINNET]: 'https://etc.etcdesktop.com/',
  [ChainId.BTTMAINNET]: 'https://rpc.bt.io/', // 'https://rpc.bittorrentchain.io/'
}

export const Networks = [
  {
    name: 'Callisto',
    symbol: 'CLO',
    img: `${BASE_URL}/images/networks/clo.png`,
    chainId: '820',
    hexChainId: '0x334',
    rpcs: ['https://rpc.callisto.network/'],
    explorer: 'https://explorer.callisto.network/',
  },
  // {
  //     name: "BSC",
  //     symbol: "BNB",
  //     img: '/images/networks/bnb.png',
  //     chainId: process.env.REACT_APP_BNB_CHAIN_ID,
  //     hexChainId: process.env.REACT_APP_BNB_HEX_CHAIN_ID,
  //     rpcs: [process.env.REACT_APP_BNB_NODE_1, process.env.REACT_APP_BNB_NODE_2, process.env.REACT_APP_BNB_NODE_3],
  //     explorer: process.env.REACT_APP_BNB_EXP
  // },
  // {
  //     name: "Ethereum Network",
  //     symbol: "ETH",
  //     img: '/images/networks/eth.png',
  //     chainId: process.env.REACT_APP_ETH_CHAIN_ID,
  //     hexChainId: process.env.REACT_APP_ETH_HEX_CHAIN_ID,
  //     rpcs: [process.env.REACT_APP_ETH_NODE],
  //     explorer: process.env.REACT_APP_ETH_EXP
  // },
  {
    name: 'BitTorrent',
    symbol: 'BTT',
    img: `${BASE_URL}/images/networks/btt.png`,
    chainId: '199',
    hexChainId: '0xc7',
    rpcs: ['https://rpc.bt.io/'],
    explorer: 'https://bttcscan.com/',
  },
  {
    name: 'ETC Chain',
    symbol: 'ETC',
    img: `${BASE_URL}/images/networks/etc.png`,
    chainId: '61',
    hexChainId: '0x3D',
    rpcs: ['https://etc.etcdesktop.com/'],
    explorer: 'https://blockscout.com/etc/mainnet/',
  },
]

//temp solution until we finish the chain configurations
if(process.env.REACT_APP_ENABLE_TESTNET === 'true')
  Networks.push( {
    name: 'Callisto Testnet',
    symbol: 'CLO',
    img: `${BASE_URL}/images/networks/clo.png`,
    chainId: '20729',
    hexChainId: '0x50F9',
    rpcs: ['https://testnet-rpc.callisto.network/'],
    explorer: 'https://testnet-explorer.callisto.network/',
  },)

export default NETWORK_URLS
