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
    isNew: false
  },
  {
    sousId: 2,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '',
      20729: '0x84D311B1Ac7E9CD543628619A45Ae8de92b9d28D',
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
      20729: '0xD22D476Bc03071a6b4f5a820e4D1e8dbcc879F04',
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
]

export default pools
