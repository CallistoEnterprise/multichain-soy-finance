import BigNumber from 'bignumber.js'
import { ChainId } from '@callisto-enterprise/soy-sdk'
import lpAprs from 'config/constants/lpAprs.json'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { DEFAULT_CHAIN_ID, ONE_YEAR_TIMESTAMP } from 'config';

const POOL_REWARDS = {
  6: {
    [ChainId.MAINNET]: new BigNumber(23152 * 365),
    [ChainId.CLOTESTNET]: new BigNumber(23152 * 365)
  },
}
/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new SOY allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  poolId: number,
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
  rewardBlockCount: BigNumber,
  chainId = DEFAULT_CHAIN_ID
): number => {
  // const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(rewardBlockCount)
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(POOL_REWARDS[poolId][chainId])
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)

  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param rewardPerSecond Amount of new SOY allocated to the pool for each second
 * @returns Null if the APR is NaN or infinite.
 */
 export const getPoolAprForNew = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  rewardPerSecond: BigNumber,
  multiplier1000: BigNumber,
): number => {
  // const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(rewardBlockCount)
  const poolRewards = new BigNumber(ONE_YEAR_TIMESTAMP).times(multiplier1000).times(rewardPerSecond).div(1000)
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(poolRewards)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)

  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd SOY price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  soyPriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
  chainId = DEFAULT_CHAIN_ID
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  const yearlySoyRewardAllocation = CHAINS_CONSTANTS[chainId].rewardTokensPerYear.times(poolWeight)
  const soyRewardsApr = yearlySoyRewardAllocation.times(soyPriceUsd).div(poolLiquidityUsd).times(100)
  let soyRewardsAprAsNumber = null
  if (!soyRewardsApr.isNaN() && soyRewardsApr.isFinite()) {
    soyRewardsAprAsNumber = soyRewardsApr.toNumber()
  }
  const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { cakeRewardsApr: soyRewardsAprAsNumber, lpRewardsApr }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default null