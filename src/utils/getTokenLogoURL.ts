import { localStorageChainIdKey } from 'config'

const getTokenLogoURL = (address: string) => {
  const chId = Number(localStorage.getItem(localStorageChainIdKey) ?? 820)
  return `images/coins/${chId}/${address}.png`
}

export default getTokenLogoURL
