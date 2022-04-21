import { ethers } from 'ethers'
import { useEffect, useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
// import { simpleRpcProvider } from 'utils/providers'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { Networks } from 'config/constants/networks';
import { getRpcForMulti } from 'utils/getRpcUrl'

export const getProviderByChainId = (chainId) => {
  const filtered = Networks.filter((_) => Number(_.chainId) === chainId)
  if (filtered.length > 0){
    const RPC_URL = getRpcForMulti(filtered[0].rpcs)
    const pvd = new ethers.providers.JsonRpcProvider(RPC_URL)
    return pvd
  }
  return null
}
const useGetSimpleRpcProvider = (chainId) => {
  const [provider, setSimpleProvider] = useState(null)

  useEffect(() => {
    const get = async () => {
      // console.log("chainId ::", chainId);
      const pvd = getProviderByChainId(chainId)
      setSimpleProvider(pvd)
    }
    if (chainId) {
      get()
    } else {
      setSimpleProvider(null)
    }
  }, [chainId])

  return provider
}
/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { library, chainId, ...web3React } = useWeb3React()
  const refEth = useRef(library)
  const simpleRpcProviderInMulti = useGetSimpleRpcProvider(chainId)
  const [provider, setprovider] = useState(library || simpleRpcProviderInMulti)
  
  useEffect(() => {
    if (library !== refEth.current && simpleRpcProviderInMulti) {
      setprovider(library || simpleRpcProviderInMulti)
      refEth.current = library
    }
  }, [library, simpleRpcProviderInMulti])

  return { library: provider, chainId: chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID, 10), ...web3React }
}

export default useActiveWeb3React
