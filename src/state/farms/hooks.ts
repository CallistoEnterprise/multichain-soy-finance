import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { localStorageChainIdKey } from 'config'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { farmsConfig } from 'config/constants'
import useRefresh from 'hooks/useRefresh'
// import useGetPriceData from 'hooks/useGetPriceData'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, nonArchivedFarms } from '.'
import { State, Farm, FarmsState } from '../types'
import { ChainId } from '@soy-libs/sdk-multichain'
import { getAddress } from 'utils/addressHelpers'

export const usePollFarmsData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  const { account } = useWeb3React()

  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  
  useEffect(() => {
    const filteredConfig = farmsConfig[chainId].filter((_) => getAddress(_.lpAddresses) !== '')
    const farmsToFetch = includeArchive ? filteredConfig : nonArchivedFarms
    const pids = farmsToFetch[chainId]?.map((farmToFetch) => farmToFetch.pid)

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
  [ChainId.MAINNET]: [2, 4],
  [ChainId.CLOTESTNET]: [2, 4],
  [ChainId.BTTMAINNET]: [10, 14, 19, 9],
  [ChainId.ETCCLASSICMAINNET]: [2, 6, 5, 1],
}
const coreEthFarms = {
  [ChainId.MAINNET]: 2,
  [ChainId.CLOTESTNET]: 2,
  [ChainId.BTTMAINNET]: 19,
  [ChainId.ETCCLASSICMAINNET]: 5,
}
const busdtFarms = {
  [ChainId.MAINNET]: 4,
  [ChainId.CLOTESTNET]: 4,
  [ChainId.BTTMAINNET]: 14,
  [ChainId.ETCCLASSICMAINNET]: 6,
}

export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET

  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync(coreFarms[chainId]))
  }, [dispatch, fastRefresh, chainId])
}

export const useFarms = (): FarmsState => {
  const farms = useSelector((state: State) => state.farms)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  const farm = useSelector((state: State) => state.farms.data[chainId]?.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromLpSymbol = (lpSymbol: string): Farm => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
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
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  const cloBusdtFarm = useFarmFromPid(busdtFarms[chainId])
  return new BigNumber(cloBusdtFarm.quoteToken.usdcPrice)
}

export const usePriceCakeBusd = (): BigNumber => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  const soyCloFarm = useFarmFromPid(coreEthFarms[chainId])
  const soyPriceBusdtAsString = soyCloFarm?.token.usdcPrice
  const soyPriceBusdt = useMemo(() => {
    return new BigNumber(soyPriceBusdtAsString)
  }, [soyPriceBusdtAsString])

  return soyPriceBusdt
}
