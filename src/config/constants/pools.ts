import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0xbE46415ce8bA0B1BA4cb3924953F200153E0bf24',
      20729: '0xe36cfdefD7BA6e855B9dad251deFb731833A5832',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '5',
    isFinished: {
      820: false,
      20729: false
    },
    lockPeriod: {
      820: 7,
      20729: 1
    },
    lockPeriodUnit: {
      820: 'days',
      20729: 'hour'
    },
    isNew: true
  },
  {
    sousId: 2,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0x03ee0bD7f616989c7DAd2BC4725c44129f5808e2',
      20729: '0xFE29fC8bA4AAE5d10A567F4105894278DB5212d4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      820: false,
      20729: false
    },
    lockPeriod: {
      820: 30,
      20729: 2
    },
    lockPeriodUnit: {
      820: 'days',
      20729: 'hours'
    },
    isNew: true
  },
  {
    sousId: 3,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0x745bF6270A50f66f49a8c816068E45a5C5774053',
      20729: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      820: false,
      20729: true
    },
    lockPeriod: {
      820: 91,
      20729: 2
    },
    lockPeriodUnit: {
      820: 'days',
      20729: 'hours'
    },
    isNew: true
  },
  {
    sousId: 4,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0x281C70eC147cD6fB5054cfD231A00BcbD17f157F',
      20729: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      820: false,
      20729: true
    },
    lockPeriod: {
      820: 182,
      20729: 2
    },
    lockPeriodUnit: {
      820: 'days',
      20729: 'hours'
    },
    isNew: true
  },
  {
    sousId: 5,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0x9aC9Cc6990c5516d121Fe42341855788924706c0',
      20729: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      820: false,
      20729: true
    },
    lockPeriod: {
      820: 365,
      20729: 2
    },
    lockPeriodUnit: {
      820: 'days',
      20729: 'hours'
    },
    isNew: true
  },
  {
    sousId: 6,
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
    isFinished: {
      820: false,
      20729: false
    },
    isNew: false
  },
]

export default pools
