import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import { ChainId } from '@soy-libs/sdk-multichain'
import { localStorageChainIdKey } from 'config'
import getRpcUrl, { getRpcForMulti } from 'utils/getRpcUrl'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const RPC_URL = getRpcUrl()
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? ChainId.MAINNET)
  const rpcs = getRpcForMulti(CHAINS_CONSTANTS[chainId].rpcs)
  const httpProviderByChain = new Web3.providers.HttpProvider(rpcs, { timeout: 10000 } as HttpProviderOptions)

  return new Web3(httpProviderByChain)
}

export { getWeb3NoAccount }
export default web3NoAccount
