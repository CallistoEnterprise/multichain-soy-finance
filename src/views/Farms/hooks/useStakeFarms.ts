import { useCallback } from 'react'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { stakeFarm } from 'utils/calls'
import { getLpContractWithAccount } from 'utils/contractHelpers'
import { getAddress } from 'utils/addressHelpers'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const useStakeFarms = (pid: number) => {
  const { account, library, chainId } = useActiveWeb3React()

  // const masterChefContract = useMasterchef()
  const currentFarm = CHAINS_CONSTANTS[chainId].farms.find((farm) => farm.pid === pid)
  const { lpAddresses, localFarmAddresses } = currentFarm
  const lpContract = getLpContractWithAccount(getAddress(lpAddresses), library, account)
  const farmAddress = getAddress(localFarmAddresses)
  const web3 = useWeb3ProviderByRpc(chainId)

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
