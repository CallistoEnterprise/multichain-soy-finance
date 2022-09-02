import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import farms from 'config/constants/farms'
import { getLocalFarmContractWithAccount } from 'utils/contractHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { localStorageChainIdKey } from 'config'
import { ChainId } from '@soy-libs/sdk-multichain'

const useUnstakeFarms = (pid: number) => {
  const { account, library } = useActiveWeb3React()
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET

  const currentFarm = farms[chainId].find((farm) => farm.pid === pid)
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
