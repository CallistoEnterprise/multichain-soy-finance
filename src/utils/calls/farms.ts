import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { DEFAULT_TOKEN_DECIMAL } from 'config'

export const stakeFarm = async (lpContract, localFarmAddress, amount, web3?: any) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  const gasLimit = await lpContract.estimateGas.transfer(localFarmAddress, value)
  const gasPrice = await web3.eth.getGasPrice()
  const increasedGas = gasLimit.add(100000)
  const tx = await lpContract.transfer(localFarmAddress, value, { gasLimit: increasedGas, gasPrice: gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (localFarmContract, amount, web3?: any) => {
  const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  const gasLimit = await localFarmContract.estimateGas.withdraw(value)
  const gasPrice = await web3.eth.getGasPrice()
  const increasedGas = gasLimit.add(100000)
  const tx = await localFarmContract.withdraw(value, { gasLimit: increasedGas, gasPrice: gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (lpContract, localFarmAddress, web3?: any) => {
  const _amount = ethers.utils.parseUnits('0', 18)
  const gasLimit = await lpContract.estimateGas.transfer(localFarmAddress, _amount)
  const gasPrice = await web3.eth.getGasPrice()
  const increasedGas = gasLimit.add(100000)
  const tx = await lpContract.transfer(localFarmAddress, _amount, { gasLimit: increasedGas, gasPrice: gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}
