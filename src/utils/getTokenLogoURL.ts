import { ChainId } from '@soy-libs/sdk-multichain'
import { BASE_URL, localStorageChainIdKey } from 'config'

const getTokenLogoURL = (address: string) => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  return `${BASE_URL}/images/coins/${chainId}/${address}.png`
}

export default getTokenLogoURL
