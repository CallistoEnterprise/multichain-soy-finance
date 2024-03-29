import { localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'
import { poolsConfig } from 'config/constants'

export const getAddress = (address: Address, chainId = DEFAULT_CHAIN_ID): string => {
  const chId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? chainId
  return address[chId] ? address[chId] : address[DEFAULT_CHAIN_ID]
}

export const getSoyAddress = () => {
  return getAddress(tokens.soy.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getLocalFarmAddress = (farmAddresses) => {
  return getAddress(farmAddresses)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getWrappedTokenAddress = (chainId: number) => {
  return CHAINS_CONSTANTS[chainId].general.wrappedNativeAddress
}
export const getDailyIdoAddress = () => {
  return getAddress(addresses.dailyIdo)
}
export const getWeeklyIdoAddress = () => {
  return getAddress(addresses.weeklyIdo)
}
export const getCharityNftAddress = () => {
  return getAddress(addresses.charityNft)
}
export const getWcloAddress = () => {
  return getAddress(tokens.wclo.address)
}
export const getStakingPoolAddress = (poolId: number | string) => {
  const pool = poolsConfig.find((pool) => pool.sousId === poolId)
  return getAddress(pool.contractAddress)
}

export const getSousChefAddress = () => {
  return getAddress(addresses.sousChef)
}
export const getMaticStakingAddress = () => {
  return getAddress(addresses.maticStaking)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}
export const getPmoonVaultAddress = () => {
  return getAddress(addresses.pmoonVault)
}
export const getPredictionsAddress = () => {
  return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
export const getBunnySpecialCakeVaultAddress = () => {
  return getAddress(addresses.bunnySpecialCakeVault)
}
export const getBunnySpecialPredictionAddress = () => {
  return getAddress(addresses.bunnySpecialPrediction)
}
export const getFarmAuctionAddress = () => {
  return getAddress(addresses.farmAuction)
}
