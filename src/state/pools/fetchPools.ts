import BigNumber from 'bignumber.js'
import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import erc223ABI from 'config/abi/erc223.json'
// import wcloABI from 'config/abi/weth.json'
import {multicall3} from 'utils/multicall'
import { getAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => !p.isNew)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'BlockStartStaking',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'LastBlock',
    }
  })

  const starts = await multicall3(sousChefABI, callsStartBlock)
  const ends = await multicall3(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((soyPoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: soyPoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStaking = async () => {
  const oldPools = poolsConfig.filter((p) => !p.isNew)
  const newPools = poolsConfig.filter((p) => p.isNew)
  // const bnbPool = poolsConfig.filter((p) => p.stakingToken.symbol === 'CLO')

  const callsOldPools = oldPools.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'TotalStakingAmount',
      // params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const callsNewPools = newPools.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.stakingToken.address),
      name: 'balanceOf',
      params: [
        getAddress(poolConfig.contractAddress)
      ]
    }
  })

  // const callsCloPools = bnbPool.map((poolConfig) => {
  //   return {
  //     address: getWcloAddress(),
  //     name: 'balanceOf',
  //     params: [getAddress(poolConfig.contractAddress)],
  //   }
  // })

  const oldPoolsTotalStaked = await multicall3(sousChefABI, callsOldPools)
  const newPoolsTotalStaked = await multicall3(erc223ABI, callsNewPools)
  // const cloPoolsTotalStaked = await multicall3(wcloABI, callsCloPools)

  // return [
  //   ...nonBnbPools.map((p, index) => ({
  //     sousId: p.sousId,
  //     totalStaked: new BigNumber(nonBnbPoolsTotalStaked[index]).toJSON(),
  //   })),
  //   ...bnbPool.map((p, index) => ({
  //     sousId: p.sousId,
  //     totalStaked: new BigNumber(bnbPoolsTotalStaked[index]).toJSON(),
  //   })),
  // ]

  const totalStakedAmount = [
    ...oldPoolsTotalStaked,
    ...newPoolsTotalStaked
  ]
  return [
    ...[...oldPools, ...newPools].map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(totalStakedAmount[index]).toJSON(),
    })),
    // ...bnbPool.map((p) => ({
    //   sousId: p.sousId,
    //   totalStaked: new BigNumber(0).toJSON(),
    // })),
  ]
}

export const fetchPoolStakingLimit = async (sousId?: number): Promise<BigNumber> => {
  try {
    // const sousContract = getSouschefV2Contract(sousId)
    // const stakingLimit = await sousContract.poolLimitPerUser()
    return new BigNumber(9000000000000000000000000000)
  } catch (error) {
    return BIG_ZERO
  }
}

export const fetchPoolsStakingLimits = async (
  poolsWithStakingLimit: number[],
): Promise<{ [key: string]: BigNumber }> => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? DEFAULT_CHAIN_ID)
  const validPools = poolsConfig
    .filter((p) => p.stakingToken.symbol !== 'CLO' && !p.isFinished[chainId])
    .filter((p) => !poolsWithStakingLimit.includes(p.sousId))

  // Get the staking limit for each valid pool
  // Note: We cannot batch the calls via multicall because V1 pools do not have "poolLimitPerUser" and will throw an error
  const stakingLimitPromises = validPools.map((validPool) => fetchPoolStakingLimit(validPool.sousId))
  const stakingLimits = await Promise.all(stakingLimitPromises)

  return stakingLimits.reduce((accum, stakingLimit, index) => {
    return {
      ...accum,
      [validPools[index].sousId]: stakingLimit,
    }
  }, {})
}
