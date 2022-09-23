import { SUPPORTED_CHAINS } from 'config'
import { CHAINS_CONSTANTS } from './chains'
import { ChainConstants } from './chains/types'

export const Networks = []

//temp solution until we finish the chain configurations
// if(process.env.REACT_APP_TESTNET_ONLY !== 'true'){
//   Networks.push({
//     name: CHAINS_CONSTANTS[ChainId.MAINNET].general.chainName,
//     symbol: CHAINS_CONSTANTS[ChainId.MAINNET].general.nativeSymbol,
//     img: CHAINS_CONSTANTS[ChainId.MAINNET].general.image,
//     chainId: CHAINS_CONSTANTS[ChainId.MAINNET].general.chainId,
//     hexChainId: CHAINS_CONSTANTS[ChainId.MAINNET].general.hexChainId,
//     rpcs: CHAINS_CONSTANTS[ChainId.MAINNET].rpcs,
//     explorer: CHAINS_CONSTANTS[ChainId.MAINNET].explorer.url,
//   },
//   {
//     name: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.chainName,
//     symbol: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.nativeSymbol,
//     img: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.image,
//     chainId: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.chainId,
//     hexChainId: CHAINS_CONSTANTS[ChainId.BTTMAINNET].general.hexChainId,
//     rpcs: CHAINS_CONSTANTS[ChainId.BTTMAINNET].rpcs,
//     explorer: CHAINS_CONSTANTS[ChainId.BTTMAINNET].explorer.url,
//   },
//   {
//     name: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.chainName,
//     symbol: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.nativeSymbol,
//     img: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.image,
//     chainId: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.chainId,
//     hexChainId: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].general.hexChainId,
//     rpcs: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].rpcs,
//     explorer: CHAINS_CONSTANTS[ChainId.ETCCLASSICMAINNET].explorer.url,
//   })
// }

// if(process.env.REACT_APP_ENABLE_TESTNET === 'true' || process.env.REACT_APP_TESTNET_ONLY === 'true')
//   Networks.push({
//     name: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.chainName,
//     symbol: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.nativeSymbol,
//     img: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.image,
//     chainId: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.chainId,
//     hexChainId: CHAINS_CONSTANTS[ChainId.CLOTESTNET].general.hexChainId,
//     rpcs: CHAINS_CONSTANTS[ChainId.CLOTESTNET].rpcs,
//     explorer: CHAINS_CONSTANTS[ChainId.CLOTESTNET].explorer.url,
//   })

Object.keys(CHAINS_CONSTANTS).forEach(key => {
  const chain:ChainConstants = CHAINS_CONSTANTS[key]
  if(!SUPPORTED_CHAINS.includes(chain.general.chainId)) return
  Networks.push({
        name: chain.general.chainName,
        symbol: chain.general.nativeSymbol,
        img: chain.general.image,
        chainId: chain.general.chainId,
        hexChainId: chain.general.hexChainId,
        rpcs: chain.rpcs,
        explorer: chain.explorer.url,
      })
})
