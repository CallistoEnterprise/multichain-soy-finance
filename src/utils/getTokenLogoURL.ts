import { ChainId } from '@soy-libs/sdk-multichain'
import { BASE_URL, localStorageChainIdKey } from 'config'

const getTokenLogoURL = (address: string) => {
  const chId = Number(window.window.localStorage.getItem(localStorageChainIdKey) ?? ChainId.MAINNET)
  return `${BASE_URL}/images/coins/${chId}/${address}.png`
}

export default getTokenLogoURL
