import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
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
  },
  {
    sousId: 2,
    stakingToken: tokens.soy,
    earningToken: tokens.srt,
    contractAddress: {
      820: '',
      20729: '0x5017D4771605a4C6295f436D51135c2e20c0a83C',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '5',
    isFinished: false,
    lockPeriod: 2,
    lockPeriodUnit: 'hours'
  },
  {
    sousId: 3,
    stakingToken: tokens.soy,
    earningToken: tokens.srt,
    contractAddress: {
      820: '',
      20729: '0x6E56f8e797dd2C06c7aE9982e982Bb763c75cB5C',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: false,
    lockPeriod: 3,
    lockPeriodUnit: 'hours'
  },
]

export default pools
