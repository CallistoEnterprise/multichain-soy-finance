// import { useWeb3React } from '@web3-react/core'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { localStorageChainIdKey } from 'config'
import farms from 'config/constants/farms'
import { useCallback } from 'react'
import { getAddress } from 'utils/addressHelpers'
import { harvestFarm } from 'utils/calls'
import { getLpContractWithAccount } from 'utils/contractHelpers'

const useHarvestFarm = (farmPid: number) => {
  const { account, library } = useActiveWeb3React()
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? '820')
  const currentFarm = farms[chainId].find((farm) => farm.pid === farmPid)
  const { lpAddresses, localFarmAddresses }= currentFarm
  const lpContract = getLpContractWithAccount(getAddress(lpAddresses), library, account)
  const farmAddress = getAddress(localFarmAddresses)
  const web3 = useWeb3ProviderByRpc(chainId)

  const handleHarvest = useCallback(async () => {
    await harvestFarm(lpContract, farmAddress, web3)
  }, [farmAddress, lpContract, web3])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
