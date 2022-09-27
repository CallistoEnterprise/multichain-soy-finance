import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      820: '0x86b2233cECc2f1C2c55dD4A8543219d02570a940',
      20729: '0xdCaa282Ca58A901a0a7542D150Bdc50911D864a7',
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
      820: '0xd976bCd2096FecDC3Bfdc39965211750Ba7395c5',
      20729: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
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
      820: '0xd350E59A2CCf0DdE06bCFB9d0F0AB9CC0e7F0310',
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
      820: '0x8f532E81B3b6F3f044F93b7004935d89a468d00D',
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
      820: '0x62D8994b791C53FcE2795A8eE7C55d79290D6863',
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
