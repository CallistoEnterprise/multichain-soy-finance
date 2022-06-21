import { localStorageChainIdKey, RPC_URLS } from 'config'
import { ethers } from 'ethers'
import getRpcUrl, { getRpcForMulti } from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const getRpcProvider = () => {
    const chId = Number(localStorage.getItem(localStorageChainIdKey) ?? '820')
    return new ethers.providers.JsonRpcProvider(getRpcForMulti(RPC_URLS[chId]),)
}

export default null
