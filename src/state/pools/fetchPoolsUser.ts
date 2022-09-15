import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import sousChefABINew from 'config/abi/sousChefNew.json'
import erc20ABI from 'config/abi/erc20.json'
import {multicall3} from 'utils/multicall'
import { getAddress } from 'utils/addressHelpers'
import { getRpcProvider } from 'utils/providers'
import BigNumber from 'bignumber.js'

// Pool 0, SOY / SOY is a different kind of contract (master chef)
// CLO pools use the native CLO token (wrapping ? unwrapping is done at the contract level)
const nonCloPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'CLO')
const bnbPools = poolsConfig.filter((p) => p.stakingToken.symbol === 'CLO')
const nonMasterPools = poolsConfig.filter((p) => p.sousId !== 0)

export const fetchPoolsAllowance = async (account) => {
  const calls = nonCloPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'allowance',
    params: [account, getAddress(p.contractAddress)],
  }))
  const allowances = await multicall3(erc20ABI, calls)
  return nonCloPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  // Non CLO pools
  const calls = nonCloPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall3(erc20ABI, calls)
  const tokenBalances = nonCloPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  const simpleRpcProvider = await getRpcProvider()
  // CLO pools
  const bnbBalance = await simpleRpcProvider.getBalance(account)
  const bnbBalances = bnbPools.reduce(
    (acc, pool) => ({ ...acc, [pool.sousId]: new BigNumber(bnbBalance.toString()).toJSON() }),
    {},
  )

  return { ...tokenBalances, ...bnbBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const callsOld = nonMasterPools.filter((_) => !_.isNew).map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'staker',
    params: [account],
  }))
  const callsNew = nonMasterPools.filter((_) => _.isNew).map((p) => p.isNew && ({
    address: getAddress(p.contractAddress),
    name: 'staker',
    params: [account],
  }))

  const userInfoOld = await multicall3(sousChefABI, callsOld)
  const userInfoNew = await multicall3(sousChefABINew, callsNew)

  const userInfo1 = [ ...userInfoNew, ...userInfoOld]

  const stakedBalances = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo1[index].amount.toString()).toJSON(),
    }),
    {},
  )
  
  const userInfo = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: {
        time: !pool.isNew ? new BigNumber(userInfo1[index].time.toString()).toJSON() : new BigNumber(0).toJSON(),
        multiplier: !pool.isNew ? new BigNumber(userInfo1[index].multiplier.toString()).toJSON() : new BigNumber(0).toJSON(),
        endTime: !pool.isNew ? new BigNumber(userInfo1[index].end_time.toString()).toJSON() : new BigNumber(userInfo1[index].endTime.toString()).toJSON()
      },
    }),
    {},
  )

  return { stakedBalances, userInfo } // 0: new BigNumber(masterPoolAmount.toString()).toJSON()
}

export const fetchUserPendingRewards = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.contractAddress),
    name: p.isNew ? 'pendingReward' : 'stake_reward',
    params: [account],
  }))

  const res = await multicall3(sousChefABI, calls)

  const pendingRewards = poolsConfig.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index].toString()).toJSON(),
    }),
    {},
  )

  return { ...pendingRewards }
}
