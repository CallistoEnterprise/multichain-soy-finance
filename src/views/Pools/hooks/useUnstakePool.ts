import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { DEFAULT_GAS_LIMIT } from 'config'
import { updateUserStakedBalance, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { useSousChef } from 'hooks/useContract'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const sousUnstake = async (sousChefContract) => {
  const tx = await sousChefContract.withdraw_stake(options)
  const receipt = await tx.wait()
  return receipt.status
}

const unstakeFromNewPool = async (sousChefContract, isRequest) => {
  const tx = isRequest ? await sousChefContract.withdrawRequest(options) : await sousChefContract.withdraw(options)
  const receipt = await tx.wait()
  return receipt.status
}

const useUnstakePool = (sousId, isNew = true) => {
  const dispatch = useAppDispatch()
  const { account } = useActiveWeb3React()
  const sousChefContract = useSousChef(sousId, isNew)

  const handleUnstake = useCallback(
    async (isRequest?: boolean) => {
      const res = !isNew ? await sousUnstake(sousChefContract) : unstakeFromNewPool(sousChefContract, isRequest)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
      return res
    },
    [account, dispatch, sousChefContract, sousId, isNew],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
