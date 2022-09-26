import { FarmConfig } from '../types'
import BigNumber from 'bignumber.js'

export interface ChainConstants {
  general: {
    chainId: number
    hexChainId: string
    chainName: string
    image?: string
    nativeSymbol: string
    wrappedNativeSymbol: string
    nativeAddress: string
    wrappedNativeAddress?: string
  }
  rpcs: string[]
  explorer: {
    name: string
    url: string
  }
  tokenLists?: any
  farms?: FarmConfig[]
  rewardTokensPerYear?: BigNumber
}
