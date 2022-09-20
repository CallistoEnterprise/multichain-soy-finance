import { ChainId } from '@soy-libs/sdk-multichain'
import { CHAINS_CONSTANTS } from './chains'

export const Networks = []

//temp solution until we finish the chain configurations
if(process.env.REACT_APP_TESTNET_ONLY !== 'true'){
  Networks.push({
    name: CHAINS_CONSTANTS[ChainId.MAINNET].general.chainName,
    symbol: CHAINS_CONSTANTS[ChainId.MAINNET].general.nativeSymbol,
    img: CHAINS_CONSTANTS[ChainId.MAINNET].general.image,
    chainId: CHAINS_CONSTANTS[ChainId.MAINNET].general.chainId,
    hexChainId: CHAINS_CONSTANTS[ChainId.MAINNET].general.hexChainId,
    rpcs: CHAINS_CONSTANTS[ChainId.MAINNET].rpcs,
    explorer: CHAINS_CONSTANTS[ChainId.MAINNET].explorer.url,
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
  // },
  {
    name: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.chainName,
    symbol: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.nativeSymbol,
    img: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.image,
    chainId: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.chainId,
    hexChainId: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.hexChainId,
    rpcs: CHAINS_CONSTANTS[ChainId.BTTMAINNET].rpcs,
    explorer: CHAINS_CONSTANTS[ChainId.BTTMAINNET].explorer.url,
  },
  {
    name: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.chainName,
    symbol: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.nativeSymbol,
    img: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.image,
    chainId: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.chainId,
    hexChainId: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.hexChainId,
    rpcs: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].rpcs,
    explorer: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].explorer.url,
  })
}

if(process.env.REACT_APP_ENABLE_TESTNET === 'true' || process.env.REACT_APP_TESTNET_ONLY === 'true')
  Networks.push({
    name: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.chainName,
    symbol: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.nativeSymbol,
    img: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.image,
    chainId: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.chainId,
    hexChainId: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.hexChainId,
    rpcs: CHAINS_CONSTANTS[ChainId.CLOTESTNET].rpcs,
    explorer: CHAINS_CONSTANTS[ChainId.CLOTESTNET].explorer.url,
  })
