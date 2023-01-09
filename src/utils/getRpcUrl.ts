import sample from 'lodash/sample'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const getNodeUrl = () => {
  return sample(CHAINS_CONSTANTS[ChainId.Mainnet].rpcs)
}

export const getRpcForMulti = (rpcs) => {
  return sample(rpcs)
}

export default getNodeUrl
