import { ChainId } from '@soy-libs/sdk-multichain'
import { BASE_URL } from 'config'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://clo-geth.0xinfra.com/',
  [ChainId.CLOTESTNET]: 'https://testnet-rpc.callisto.network',
  [ChainId.ETHEREUM]: 'https://mainnet.infura.io/v3/d819f1add1a34a60adab4df578e0e741',
  [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/d819f1add1a34a60adab4df578e0e741',
  [ChainId.KOVAN]: 'https://kovan.infura.io/v3/d819f1add1a34a60adab4df578e0e741',
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [ChainId.BSCTESTNET]: '',
  [ChainId.ETCCLASSICMAINNET]: 'https://www.ethercluster.com/etc',
  [ChainId.BTTMAINNET]: 'https://rpc.bt.io/', // 'https://rpc.bittorrentchain.io/'
}

export const Networks = [
  {
      name: "Callisto",
      symbol: "CLO",
      img: `${BASE_URL}/images/networks/clo.png`,
      chainId: "820",
      hexChainId: "0x334",
      rpcs: ["https://clo-geth.0xinfra.com/"],
      explorer: "https://explorer.callisto.network/"
  },
  // {
  //     name: "BSC",
  //     symbol: "BNB",
  //     img: '/images/networks/bnb.png',
  //     chainId: "56",
  //     hexChainId: "0x38",
  //     rpcs: ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/"],
  //     explorer: "https://bscscan.com/"
  // },
  // {
  //     name: "Ethereum Network",
  //     symbol: "ETH",
  //     img: '/images/networks/eth.png',
  //     chainId: "1",
  //     rpcs: ["https://mainnet.infura.io/v3/d819f1add1a34a60adab4df578e0e741"],
  //     explorer: "https://etherscan.io/"
  // },{
  //     name: "Ethereum Classic",
  //     symbol: "ETC",
  //     img: '/images/networks/etc.png',
  //     chainId: "61",
  //     rpcs: ["https://www.ethercluster.com/etc"],
  //     explorer: "https://blockscout.com/etc/mainnet/"
  // },https://rpc.bittorrentchain.io/
  {
      name: "BitTorrent",
      symbol: "BTT",
      img: '/images/networks/btt.png',
      chainId: "199",
      hexChainId: "0xc7",
      rpcs: ["https://rpc.bt.io/"],
      explorer: "https://bttcscan.com/" 
  },
]

export default NETWORK_URLS
