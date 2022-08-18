import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import { localStorageChainIdKey } from 'config'
import getRpcUrl, { getRpcForMulti } from 'utils/getRpcUrl'
import NETWORK_URLS from 'config/constants/networks'

const RPC_URL = getRpcUrl()
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID) 
  const rpcs = getRpcForMulti([NETWORK_URLS[chainId]])
  const httpProviderByChain = new Web3.providers.HttpProvider(rpcs, { timeout: 10000 } as HttpProviderOptions)

  return new Web3(httpProviderByChain)
}

export { getWeb3NoAccount }
export default web3NoAccount
