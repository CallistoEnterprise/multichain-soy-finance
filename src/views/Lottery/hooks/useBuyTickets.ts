import { useCallback } from 'react'
import useActiveWeb3React, { useWeb3ProviderByRpc } from 'hooks/useActiveWeb3React'
import { stakeFarm } from 'utils/calls'
import { getLpContractWithAccount } from 'utils/contractHelpers'
import { getAddress } from 'utils/addressHelpers'
import { localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { useLotteryV2Contract } from 'hooks/useContract'
import { buyTickets } from 'utils/calls/lottery'

const useBuyTickets = (currentLotteryId: string) => {
  const { account, library, chainId } = useActiveWeb3React()

  const lotteryContract = useLotteryV2Contract()
  const web3 = useWeb3ProviderByRpc(chainId)

  const handleBuyConfirm = useCallback(
    async (ticketsForPurchase: number[]) => {
      const txHash = await buyTickets(lotteryContract, currentLotteryId, ticketsForPurchase, web3)
      console.info(txHash)
    },
    [lotteryContract, currentLotteryId, web3],
  )

  return { handleBuyConfirm: handleBuyConfirm }
}

export default useBuyTickets
