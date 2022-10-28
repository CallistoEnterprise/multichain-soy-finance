import sample from 'lodash/sample'
import { ChainId } from '@callisto-enterprise/soy-sdk'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const getNodeUrl = () => {
  return sample(CHAINS_CONSTANTS[ChainId.MAINNET].rpcs)
}

export const getRpcForMulti = (rpcs) => {
  return sample(rpcs)
}

export default getNodeUrl
