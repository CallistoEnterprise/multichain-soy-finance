import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { getLocalFarmContractWithAccount } from 'utils/contractHelpers'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const useUnstakeFarms = (pid: number) => {
  const { account, library, chainId } = useActiveWeb3React()

  const currentFarm = CHAINS_CONSTANTS[chainId].farms.find((farm) => farm.pid === pid)
  const { localFarmAddresses } = currentFarm
  const localFarmContract = getLocalFarmContractWithAccount(localFarmAddresses, library, account)
  const web3 = useWeb3ProviderByRpc(chainId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      await unstakeFarm(localFarmContract, amount, web3)
    },
    [localFarmContract, web3],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
