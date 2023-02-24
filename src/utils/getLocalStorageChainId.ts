import { DEFAULT_CHAIN_ID, LOCAL_STORAGE_CHAIN_ID_KEY } from 'config'

const getLocalStorageChainId = () => {
  return Number(window.localStorage.getItem(LOCAL_STORAGE_CHAIN_ID_KEY) ?? DEFAULT_CHAIN_ID)
}

export default getLocalStorageChainId
