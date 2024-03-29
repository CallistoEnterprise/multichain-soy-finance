import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { useCallback } from 'react'
import { getAddress } from 'utils/addressHelpers'
import { harvestFarm } from 'utils/calls'
import { getLpContractWithAccount } from 'utils/contractHelpers'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const useHarvestFarm = (farmPid: number) => {
  const { account, library, chainId } = useActiveWeb3React()
  const currentFarm = CHAINS_CONSTANTS[chainId].farms.find((farm) => farm.pid === farmPid)
  const { lpAddresses, localFarmAddresses } = currentFarm
  const lpContract = getLpContractWithAccount(getAddress(lpAddresses), library, account)
  const farmAddress = getAddress(localFarmAddresses)
  const web3 = useWeb3ProviderByRpc(chainId)

  const handleHarvest = useCallback(async () => {
    await harvestFarm(lpContract, farmAddress, web3)
  }, [farmAddress, lpContract, web3])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
