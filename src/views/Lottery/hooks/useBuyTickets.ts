import { useCallback } from 'react'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { useLotteryV2Contract } from 'hooks/useContract'
import { buyTickets } from 'utils/calls/lottery'

const useBuyTickets = (currentLotteryId: string) => {
  const { chainId } = useActiveWeb3React()

  const lotteryContract = useLotteryV2Contract()
  const web3 = useWeb3ProviderByRpc(chainId)

  const handleBuyConfirm = useCallback(
    async (ticketsForPurchase: number[]) => {
      const status = await buyTickets(lotteryContract, currentLotteryId, ticketsForPurchase, web3)
      return status
    },
    [lotteryContract, currentLotteryId, web3],
  )

  return { handleBuyConfirm: handleBuyConfirm }
}

export default useBuyTickets
