import { localStorageChainIdKey } from 'config'

const getTokenLogoURL = (address: string) => {
  const chId = Number(window.window.localStorage.getItem(localStorageChainIdKey) ?? 820)
  return `images/coins/${chId}/${address}.png`
}

export default getTokenLogoURL
