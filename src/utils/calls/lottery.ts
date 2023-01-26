import { ethers } from 'ethers'
import { DEFAULT_GAS_LIMIT } from 'config'

export const buyTickets = async (lotteryContract, currentLotteryId, ticketsForPurchase, web3) => {
  const gasLimit = await lotteryContract.estimateGas.buyTickets(currentLotteryId, ticketsForPurchase)
  //const gasLimit = ethers.BigNumber.from(2000000)
  const gasPrice = await web3.eth.getGasPrice()
  const increasedGas = gasLimit.add(200000)
  const tx = await lotteryContract.buyTickets(currentLotteryId, ticketsForPurchase, {
    gasLimit: increasedGas,
    gasPrice: gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}
