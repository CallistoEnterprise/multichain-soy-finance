import { ethers } from 'ethers'
import getRpcUrl, { getRpcForMulti } from 'utils/getRpcUrl'
import { localStorageChainIdKey } from 'config'
import RPC_URLS from 'config/constants/networks'
import { ChainId } from '@soy-libs/sdk-multichain'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const getRpcProvider = () => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  return new ethers.providers.JsonRpcProvider(getRpcForMulti([RPC_URLS[chainId]]))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default null
