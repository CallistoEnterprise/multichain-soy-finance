import { getCallistoToken } from '@callisto-enterprise/assetslist'
import { CALLISTO_CHAIN_ID as ChainId } from '@callisto-enterprise/chain-constants'

export const getCallistoRiskLevelToken = (address: string, chainId: ChainId) => {
  const audit = getCallistoToken(address, chainId).audit
  return audit.isAudited ? audit.riskLevel : undefined
}

export const getCallistoRiskLevelFarm = (token1: string, token2: string, chainId: ChainId) => {
  const r1 = getCallistoRiskLevelToken(token1, chainId)
  const r2 = getCallistoRiskLevelToken(token2, chainId)
  if (!r1 || !r2) return undefined

  const levels = ['CRITICAL', 'HIGH', 'MED', 'LOW', 'SAFE']
  for (let level of levels) {
    if (r1 === level || r2 === level) return level
  }

  return undefined
}

export const getCallistoIsAuditedFarm = (token1: string, token2: string, chainId: ChainId) => {
  return getCallistoToken(token1, chainId).audit.isAudited && getCallistoToken(token2, chainId).audit.isAudited
}
