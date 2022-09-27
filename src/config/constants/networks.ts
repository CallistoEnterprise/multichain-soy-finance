import { SUPPORTED_CHAINS } from 'config'
import { CHAINS_CONSTANTS } from './chains'
import { ChainConstants } from './chains/types'

export const Networks = []

SUPPORTED_CHAINS.forEach(key => {
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
