import { ethers } from 'ethers'
import { useEffect, useState, useRef, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { localStorageChainIdKey } from 'config'
import { Networks } from 'config/constants/networks';
import { getRpcForMulti } from 'utils/getRpcUrl'
import Web3 from 'web3';

export const getProviderByChainId = (chainId) => {
  const filtered = Networks.filter((_) => Number(_.chainId) === chainId)
  if (filtered.length > 0){
    const RPC_URL = getRpcForMulti(filtered[0].rpcs)
    const pvd = new ethers.providers.JsonRpcProvider(RPC_URL)
    return pvd
  }
  return null
}
export const useGetSimpleRpcProvider = (chainId) => {
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
export const useWeb3ProviderByRpc = (chainId: number | string) => {
  const filtered = Networks.filter((_) => Number(_.chainId) === chainId)

  return useMemo(() => new Web3(new Web3.providers.HttpProvider(filtered[0].rpcs[0])), [filtered]);
};

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { library, chainId, ...web3React } = useWeb3React()
  const refEth = useRef(library)
  const simpleRpcProviderInMulti = useGetSimpleRpcProvider(chainId)
  const [provider, setprovider] = useState(library || simpleRpcProviderInMulti)
  
  const locChainId = window.localStorage.getItem(localStorageChainIdKey) ? Number(window.localStorage.getItem(localStorageChainIdKey)) : Number(process.env.REACT_APP_CHAIN_ID)
  useEffect(() => {
    if (library !== refEth.current && simpleRpcProviderInMulti) {
      setprovider(library || simpleRpcProviderInMulti)
      refEth.current = library
    }
  }, [library, simpleRpcProviderInMulti])

  return { library: provider, chainId: chainId ?? locChainId, ...web3React }
}

export default useActiveWeb3React
