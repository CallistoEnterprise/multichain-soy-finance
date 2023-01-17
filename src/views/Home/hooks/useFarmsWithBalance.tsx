import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { FarmConfig } from 'config/constants/types'
import useRefresh from 'hooks/useRefresh'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithStakedBalance, setFarmsWithStakedBalance] = useState<FarmWithBalance[]>([])
  const [earningsSum, setEarningsSum] = useState<number>(null)
  const { account, chainId } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = CHAINS_CONSTANTS[chainId].farms.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingReward',
        params: [farm.pid, account],
      }))

      const rawResults = await multicall(masterChefABI, calls)
      const results = CHAINS_CONSTANTS[chainId].farms.map((farm, index) => ({
        ...farm,
        balance: new BigNumber(rawResults[index]),
      }))
      const farmsWithBalances = results.filter((balanceType) => balanceType.balance.gt(0))
      const totalEarned = farmsWithBalances.reduce((accum, earning) => {
        const earningNumber = new BigNumber(earning.balance)
        if (earningNumber.eq(0)) {
          return accum
        }
        return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
      }, 0)

      setFarmsWithStakedBalance(farmsWithBalances)
      setEarningsSum(totalEarned)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, chainId, fastRefresh])

  return { farmsWithStakedBalance, earningsSum }
}

export default useFarmsWithBalance
