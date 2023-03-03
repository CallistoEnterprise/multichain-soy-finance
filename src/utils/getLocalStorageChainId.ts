import { DEFAULT_CHAIN_ID, LOCAL_STORAGE_CHAIN_ID_KEY, SUBGRAPH_SUPPORTED_CHAIN_IDS } from 'config'

const getLocalStorageChainId = () => {
  return Number(window.localStorage.getItem(LOCAL_STORAGE_CHAIN_ID_KEY) ?? DEFAULT_CHAIN_ID)
}

export const getLocalStorageChainIdForSubgraphs = () => {
  const localChainId = getLocalStorageChainId()
  return SUBGRAPH_SUPPORTED_CHAIN_IDS.includes(localChainId) ? localChainId : DEFAULT_CHAIN_ID
}

export default getLocalStorageChainId
