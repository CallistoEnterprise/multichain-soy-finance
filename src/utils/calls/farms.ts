import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
// import { callWithEstimateGas } from './estimateGas'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeFarm = async (lpContract, localFarmAddress, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  // const tx = await callWithEstimateGas(lpContract, 'transfer', [localFarmAddress, value])
  const tx = await lpContract.transfer(localFarmAddress, value, options)
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (localFarmContract, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  // const tx = await callWithEstimateGas(localFarmContract, 'withdraw', [value])
  const tx = await localFarmContract.withdraw(value, options)
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (lpContract, localFarmAddress, web3?: any) => {
  const _amount = ethers.utils.parseUnits('0', 18);
  const gasLimit = await lpContract.estimateGas.transfer(localFarmAddress, _amount);
  const gasPrice = await web3.eth.getGasPrice()
  const tx = await lpContract.transfer(localFarmAddress, _amount, { gasLimit: gasLimit, gasPrice: gasPrice });

  // const value = new BigNumber(0).times(DEFAULT_TOKEN_DECIMAL).toString()
  // const tx = await lpContract.transfer(localFarmAddress, value, options)
  const receipt = await tx.wait()
  return receipt.status
}
