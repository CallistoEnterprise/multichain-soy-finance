import { ethers } from 'ethers'
import getRpcUrl, { getRpcForMulti } from 'utils/getRpcUrl'
import { localStorageChainIdKey } from 'config'
import RPC_URLS from 'config/constants/networks'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const getRpcProvider = () => {
    const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID)
    return new ethers.providers.JsonRpcProvider(getRpcForMulti([RPC_URLS[chId]]),)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default null
