import { BASE_URL, localStorageChainIdKey } from 'config'

const getTokenLogoURL = (address: string) => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID)
  return `${BASE_URL}/images/coins/${chainId}/${address}.png`
}

export default getTokenLogoURL
