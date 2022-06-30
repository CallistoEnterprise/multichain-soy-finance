import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import { callWithEstimateGas } from './estimateGas'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeFarm = async (lpContract, localFarmAddress, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  const tx = await callWithEstimateGas(lpContract, 'transfer', [localFarmAddress, value])
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (localFarmContract, amount) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  const tx = await callWithEstimateGas(localFarmContract, 'withdraw', [value])
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (lpContract, localFarmAddress) => {
  const tx = await callWithEstimateGas(lpContract, 'transfer', [localFarmAddress, '0'])
  const receipt = await tx.wait()
  return receipt.status
}
