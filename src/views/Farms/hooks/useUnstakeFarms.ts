import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { getLocalFarmContractWithAccount } from 'utils/contractHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const useUnstakeFarms = (pid: number) => {
  const { account, library, chainId } = useActiveWeb3React()

  const currentFarm = CHAINS_CONSTANTS[chainId].farms.find((farm) => farm.pid === pid)
  const { localFarmAddresses } = currentFarm
  const localFarmContract = getLocalFarmContractWithAccount(localFarmAddresses, library, account)

  const handleUnstake = useCallback(
    async (amount: string) => {
      await unstakeFarm(localFarmContract, amount)
    },
    [localFarmContract],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
