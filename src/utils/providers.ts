import { localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'
import { ethers } from 'ethers'
import getRpcUrl, { getRpcForMulti } from 'utils/getRpcUrl'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const getRpcProvider = () => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? DEFAULT_CHAIN_ID)
  return new ethers.providers.JsonRpcProvider(getRpcForMulti(CHAINS_CONSTANTS[chainId].rpcs))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default null
