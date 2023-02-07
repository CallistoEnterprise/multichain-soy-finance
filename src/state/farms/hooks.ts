import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, nonArchivedFarms } from '.'
import { State, Farm, FarmsState } from '../types'

export const usePollFarmsData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  const { account, chainId } = useActiveWeb3React()

  useEffect(() => {
    const farmsToFetch = includeArchive ? CHAINS_CONSTANTS[chainId].farms : nonArchivedFarms[chainId]
    const pids = farmsToFetch?.map((farmToFetch) => farmToFetch.pid)

    dispatch(fetchFarmsPublicDataAsync(pids))

    if (account) {
      dispatch(fetchFarmUserDataAsync({ account, pids }))
    }
  }, [includeArchive, dispatch, slowRefresh, account, chainId])
}

/**
 * Fetches the "core" farm data used globally
 * 2 = SOY-CLO LP
 * 4 = BUSDT-CLO LP
 */
const coreFarms = {
  [ChainId.Mainnet]: [2, 4],
  [ChainId.Testnet]: [20, 22, 23, 24, 25],
  [ChainId.BTT]: [10, 14, 19, 9],
  [ChainId.ETC]: [2, 6, 5, 1],
}
const coreEthFarms = {
  // soy-clo
  [ChainId.Mainnet]: 2,
  [ChainId.Testnet]: 23,
  [ChainId.BTT]: 19,
  [ChainId.ETC]: 5,
}
const busdtFarms = {
  // clo-busdt
  [ChainId.Mainnet]: 4,
  [ChainId.Testnet]: 25,
  [ChainId.BTT]: 14,
  [ChainId.ETC]: 6,
}

export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()
  const { chainId } = useActiveWeb3React()

  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync(coreFarms[chainId]))
  }, [dispatch, fastRefresh, chainId])
}

export const useFarms = (): FarmsState => {
  const farms = useSelector((state: State) => state.farms)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const { chainId } = useActiveWeb3React()
  const farm = useSelector((state: State) => state.farms.data[chainId]?.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromLpSymbol = (lpSymbol: string): Farm => {
  const { chainId } = useActiveWeb3React()
  const farm = useSelector((state: State) => state.farms.data[chainId]).find((f) => f?.lpSymbol === lpSymbol)
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm?.userData ? new BigNumber(farm?.userData.allowance) : BIG_ZERO,
    tokenBalance: farm?.userData ? new BigNumber(farm?.userData.tokenBalance) : BIG_ZERO,
    stakedBalance: farm?.userData ? new BigNumber(farm?.userData.stakedBalance) : BIG_ZERO,
    earnings: farm?.userData ? new BigNumber(farm?.userData.earnings) : BIG_ZERO,
  }
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  const farm = useFarmFromPid(pid)
  return farm && new BigNumber(farm.token.usdcPrice)
}

export const useLpTokenPrice = (symbol: string) => {
  const farm = useFarmFromLpSymbol(symbol)
  const farmTokenPriceInUsd = useBusdPriceFromPid(farm.pid)
  let lpTokenPrice = BIG_ZERO

  if (farm.lpTotalSupply && farm.lpTotalInQuoteToken) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = getBalanceAmount(new BigNumber(farm.lpTotalSupply))
    lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
  }

  return lpTokenPrice
}

// /!\ Deprecated , use the USDC hook in /hooks

export const usePriceBnbBusd = (): BigNumber => {
  const { chainId } = useActiveWeb3React()
  const cloBusdtFarm = useFarmFromPid(busdtFarms[chainId])
  return new BigNumber(cloBusdtFarm.quoteToken.usdcPrice)
}

export const usePriceCakeBusd = (): BigNumber => {
  const { chainId } = useActiveWeb3React()
  const soyCloFarm = useFarmFromPid(coreEthFarms[chainId])
  const soyPriceBusdtAsString = soyCloFarm?.token.usdcPrice
  const soyPriceBusdt = useMemo(() => {
    return new BigNumber(soyPriceBusdtAsString)
  }, [soyPriceBusdtAsString])

  return soyPriceBusdt
}
