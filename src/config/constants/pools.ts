import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      [ChainId.Mainnet]: '0xfF9289C2656CA1d194DeA1895aAf3278B744Fa70',
      [ChainId.Testnet]: '0xe36cfdefD7BA6e855B9dad251deFb731833A5832',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '5',
    isFinished: {
      [ChainId.Mainnet]: true,
      [ChainId.Testnet]: false,
    },
    lockPeriod: {
      [ChainId.Mainnet]: 7,
      [ChainId.Testnet]: 1,
    },
    lockPeriodUnit: {
      [ChainId.Mainnet]: 'days',
      [ChainId.Testnet]: 'hour',
    },
    isNew: true,
  },
  {
    sousId: 2,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      [ChainId.Mainnet]: '0x86F7e2ef599690b64f0063b3F978ea6Ae2814f63',
      [ChainId.Testnet]: '0xFE29fC8bA4AAE5d10A567F4105894278DB5212d4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      [ChainId.Mainnet]: true,
      [ChainId.Testnet]: false,
    },
    lockPeriod: {
      [ChainId.Mainnet]: 30,
      [ChainId.Testnet]: 2,
    },
    lockPeriodUnit: {
      [ChainId.Mainnet]: 'days',
      [ChainId.Testnet]: 'hours',
    },
    isNew: true,
  },
  {
    sousId: 3,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      [ChainId.Mainnet]: '0x7d6C70b6561C31935e6B0dd77731FC63D5aC37F2',
      [ChainId.Testnet]: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      [ChainId.Mainnet]: false,
      [ChainId.Testnet]: true,
    },
    lockPeriod: {
      [ChainId.Mainnet]: 91,
      [ChainId.Testnet]: 2,
    },
    lockPeriodUnit: {
      [ChainId.Mainnet]: 'days',
      [ChainId.Testnet]: 'hours',
    },
    isNew: true,
  },
  {
    sousId: 4,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      [ChainId.Mainnet]: '0x19DcB402162b6937a8ACEac87Ed6c05219c9bEf7',
      [ChainId.Testnet]: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      [ChainId.Mainnet]: false,
      [ChainId.Testnet]: true,
    },
    lockPeriod: {
      [ChainId.Mainnet]: 182,
      [ChainId.Testnet]: 2,
    },
    lockPeriodUnit: {
      [ChainId.Mainnet]: 'days',
      [ChainId.Testnet]: 'hours',
    },
    isNew: true,
  },
  {
    sousId: 5,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      [ChainId.Mainnet]: '0x31bFf88C6124E1622f81b3Ba7ED219e5d78abd98',
      [ChainId.Testnet]: '0x6011860C4caC5d251Aed44A132bbC67B4CcaBf6E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '5',
    isFinished: {
      [ChainId.Mainnet]: false,
      [ChainId.Testnet]: true,
    },
    lockPeriod: {
      [ChainId.Mainnet]: 365,
      [ChainId.Testnet]: 2,
    },
    lockPeriodUnit: {
      [ChainId.Mainnet]: 'days',
      [ChainId.Testnet]: 'hours',
    },
    isNew: true,
  },
  {
    sousId: 6,
    stakingToken: tokens.soy,
    earningToken: tokens.soy,
    contractAddress: {
      [ChainId.Mainnet]: '0xeB4511C90F9387De8F8945ABD8C803d5cB275509',
      [ChainId.Testnet]: '0x4E35A7060a499595a2337bc6A5ba6Ce8914e5F0A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: {
      [ChainId.Mainnet]: false,
      [ChainId.Testnet]: false,
    },
    isNew: false,
  },
]

export default pools
