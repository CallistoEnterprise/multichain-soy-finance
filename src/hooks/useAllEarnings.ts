import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { multicall3 } from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import useRefresh from './useRefresh'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const useAllEarnings = () => {

  const [balances, setBalance] = useState([])
  const { account, chainId } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const calls = CHAINS_CONSTANTS[chainId].farms.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingReward',
        params: [farm.pid, account],
      }))

      const res = await multicall3(masterChefABI, calls)

      setBalance(res)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, chainId, fastRefresh])

  return balances
}

export default useAllEarnings
