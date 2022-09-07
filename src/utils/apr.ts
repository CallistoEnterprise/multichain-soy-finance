import BigNumber from 'bignumber.js'
import { REWARD_TOKENS_PER_YEAR } from 'config'
import lpAprs from 'config/constants/lpAprs.json'

const POOL_REWARDS = {
  1: new BigNumber(23152 * 365),
  2: new BigNumber(1234),
  3: new BigNumber(2468)
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
  rewardBlockCount: BigNumber
): number => {
  // const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(rewardBlockCount)
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(POOL_REWARDS[poolId])
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
  chainId = 820
): { cakeRewardsApr: number; lpRewardsApr: number } => {

  const yearlySoyRewardAllocation = REWARD_TOKENS_PER_YEAR[chainId].times(poolWeight)
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
