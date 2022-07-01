import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { ethers } from 'ethers'
import { BIG_ZERO } from 'utils/bigNumber'
// import { callWithEstimateGas } from './estimateGas'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT + 100000,
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

export const harvestFarm = async (lpContract, localFarmAddress) => {
  // const tx = await callWithEstimateGas(lpContract, 'transfer', [localFarmAddress, '0'])
  const value = ethers.utils.parseUnits('0', 18)
  const tx = await lpContract.transfer(localFarmAddress, value, options)
  const receipt = await tx.wait()
  return receipt.status
}
