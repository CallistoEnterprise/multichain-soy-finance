import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 2,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '',
      20729: '0xdCaa282Ca58A901a0a7542D150Bdc50911D864a7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '5',
    isFinished: false,
    lockPeriod: 1,
    lockPeriodUnit: 'hour',
    isNew: true
  },
  {
    sousId: 3,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '',
      20729: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: false,
    lockPeriod: 2,
    lockPeriodUnit: 'hours',
    isNew: true
  },
  {
    sousId: 1,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0xeB4511C90F9387De8F8945ABD8C803d5cB275509',
      20729: '0x4E35A7060a499595a2337bc6A5ba6Ce8914e5F0A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: false,
    isNew: false
  },
]

export default pools
