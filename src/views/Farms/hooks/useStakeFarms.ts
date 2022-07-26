import { useCallback } from 'react'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { stakeFarm } from 'utils/calls'
// import { useMasterchef } from 'hooks/useContract'
import farms from 'config/constants/farms'
import { getLpContractWithAccount } from 'utils/contractHelpers'
import { getAddress } from 'utils/addressHelpers'
import { localStorageChainIdKey } from 'config'

const useStakeFarms = (pid: number) => {
  const { account, library } = useActiveWeb3React()
  const locChainId = parseInt(window.localStorage.getItem(localStorageChainIdKey) ?? '820')

  // const masterChefContract = useMasterchef()
  const currentFarm = farms[locChainId].find((farm) => farm.pid === pid)
  const { lpAddresses, localFarmAddresses }= currentFarm
  const lpContract = getLpContractWithAccount(getAddress(lpAddresses), library, account)
  const farmAddress = getAddress(localFarmAddresses)
  const web3 = useWeb3ProviderByRpc(locChainId)

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(lpContract, farmAddress, amount, web3)
      console.info(txHash)
    },
    [lpContract, farmAddress, web3],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
