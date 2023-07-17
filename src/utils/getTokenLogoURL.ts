import { BASE_URL } from 'config'
import getLocalStorageChainId from './getLocalStorageChainId'

const getTokenLogoURL = (address: string) => {
  const chId = getLocalStorageChainId()
  return `${BASE_URL}/images/coins/${chId}/${address}.png`
}

export default getTokenLogoURL
