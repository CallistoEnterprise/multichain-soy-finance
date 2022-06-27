import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import farms from 'config/constants/farms'
import { getLocalFarmContractWithAccount } from 'utils/contractHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { localStorageChainIdKey } from 'config'

const useUnstakeFarms = (pid: number) => {
  const { account, library } = useActiveWeb3React()
  const locChainId = parseInt(window.localStorage.getItem(localStorageChainIdKey) ?? '820')

  const currentFarm = farms[locChainId].find((farm) => farm.pid === pid)
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
