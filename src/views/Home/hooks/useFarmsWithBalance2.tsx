import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import {multicall3} from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import { FarmConfig } from 'config/constants/types'
import useRefresh from 'hooks/useRefresh'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const { account, chainId } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = CHAINS_CONSTANTS[chainId].farms.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingReward',
        params: [farm.pid, account],
      }))

      const rawResults = await multicall3(masterChefABI, calls)
      const results = CHAINS_CONSTANTS[chainId].farms.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarmsWithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, chainId, fastRefresh])

  return farmsWithBalances
}

export default useFarmsWithBalance
