import { useCallback } from 'react'
import { ethers } from 'ethers'
import { DEFAULT_GAS_LIMIT } from 'config'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward } from 'state/actions'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { useStakingTokenContract, useSousChef } from 'hooks/useContract'
import { getStakingPoolAddress } from 'utils/addressHelpers'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const harvestPool = async (contract, to, web3?: any) => {
  const _amount = ethers.utils.parseUnits('0', 18)
  const gasLimit = await contract.estimateGas.transfer(to, _amount)
  const gasPrice = await web3.eth.getGasPrice()
  const increasedGas = gasLimit.add(100000)
  const tx = await contract.transfer(to, _amount, { gasLimit: increasedGas, gasPrice: gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

const harvestPoolOld = async (sousChefContract) => {
  const tx = await sousChefContract.claim(options)
  const receipt = await tx.wait()
  return receipt.status
}

const useHarvestPool = (sousId, isNew = true) => {
  const { account, chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  const stakingTkContract = useStakingTokenContract(sousId, true)
  const web3 = useWeb3ProviderByRpc(chainId)
  const sousChefContract = useSousChef(sousId, isNew)

  const handleHarvest = useCallback(async () => {
    const stakingPoolAddress = getStakingPoolAddress(sousId)
    isNew ? await harvestPool(stakingTkContract, stakingPoolAddress, web3) : await harvestPoolOld(sousChefContract)
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, stakingTkContract, sousChefContract, sousId, web3, isNew])

  return { onReward: handleHarvest }
}

export default useHarvestPool
