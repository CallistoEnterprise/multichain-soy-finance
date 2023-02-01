import { BASE_URL, localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'

const getTokenLogoURL = (address: string) => {
  const chId = Number(window.window.localStorage.getItem(localStorageChainIdKey) ?? DEFAULT_CHAIN_ID)
  return `${BASE_URL}/images/coins/${chId}/${address}.png`
}

export default getTokenLogoURL
