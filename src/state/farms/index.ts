import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import farmsConfig from 'config/constants/farms'
import { localStorageChainIdKey } from 'config'
import isArchivedPid from 'utils/farmHelpers'
// import priceHelperLpsConfig from 'config/constants/priceHelperLps'
import fetchFarms from './fetchFarms'
import fetchFarmsPrices from './fetchFarmsPrices'
import {
  fetchFarmUserEarnings,
  fetchFarmUserAllowances,
  fetchFarmUserTokenBalances,
  fetchFarmUserStakedBalances,
} from './fetchFarmUser'
import { FarmsState, Farm } from '../types'

const noAccountFarmConfig = farmsConfig[820].map((farm) => ({
  ...farm,
  userData: {
    allowance: '0',
    tokenBalance: '0',
    stakedBalance: '0',
    earnings: '0',
  },
}))
const noAccountFarmConfigBTT = farmsConfig[199].map((farm) => ({
  ...farm,
  userData: {
    allowance: '0',
    tokenBalance: '0',
    stakedBalance: '0',
    earnings: '0',
  },
}))
const noAccountFarmConfigETC = farmsConfig[61].map((farm) => ({
  ...farm,
  userData: {
    allowance: '0',
    tokenBalance: '0',
    stakedBalance: '0',
    earnings: '0',
  },
}))

const initialState: FarmsState = { data: {
  820: noAccountFarmConfig,
  199: noAccountFarmConfigBTT,
  61: noAccountFarmConfigETC
}, loadArchivedFarmsData: false, userDataLoaded: false }

export const nonArchivedFarms = { 
  820: farmsConfig[820].filter(({ pid }) => !isArchivedPid(pid)),
  199: farmsConfig[199].filter(({ pid }) => !isArchivedPid(pid)),
  61: farmsConfig[61].filter(({ pid }) => !isArchivedPid(pid)),
}

// Async thunks
export const fetchFarmsPublicDataAsync = createAsyncThunk<Farm[], number[]>(
  'farms/fetchFarmsPublicDataAsync',
  async (pids) => {
    const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID) 
    const farmsToFetch = farmsConfig[chId].filter((farmConfig) => pids.includes(farmConfig.pid))

    // Add price helper farms
    // const farmsWithPriceHelpers = farmsToFetch.concat(priceHelperLpsConfig)

    const farms = await fetchFarms(farmsToFetch)
    const farmsWithPrices = await fetchFarmsPrices(farms)
    // Filter out price helper LP config farms
    const farmsWithoutHelperLps = farmsWithPrices.filter((farm: Farm) => {
      return farm.pid
    })

    return farmsWithoutHelperLps
  },
)

interface FarmUserDataResponse {
  pid: number
  allowance: string
  tokenBalance: string
  stakedBalance: string
  earnings: string
}

export const fetchFarmUserDataAsync = createAsyncThunk<FarmUserDataResponse[], { account: string; pids: number[] }>(
  'farms/fetchFarmUserDataAsync',
  async ({ account, pids }) => {
    const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID) 
    const farmsToFetch = farmsConfig[chId].filter((farmConfig) => pids.includes(farmConfig.pid))
    const userFarmAllowances = await fetchFarmUserAllowances(account, farmsToFetch)
    const userFarmTokenBalances = await fetchFarmUserTokenBalances(account, farmsToFetch)
    const userStakedBalances = await fetchFarmUserStakedBalances(account, farmsToFetch)
    const userFarmEarnings = await fetchFarmUserEarnings(account, farmsToFetch)

    return userFarmAllowances.map((farmAllowance, index) => {
      return {
        pid: farmsToFetch[index].pid,
        allowance: userFarmAllowances[index],
        tokenBalance: userFarmTokenBalances[index],
        stakedBalance: userStakedBalances[index],
        earnings: userFarmEarnings[index],
      }
    })
  },
)

export const farmsSlice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setLoadArchivedFarmsData: (state, action) => {
      const loadArchivedFarmsData = action.payload
      state.loadArchivedFarmsData = loadArchivedFarmsData
    },
  },
  extraReducers: (builder) => {
    // Update farms with live data
    builder.addCase(fetchFarmsPublicDataAsync.fulfilled, (state, action) => {
      const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID) 
      state.data[chId] = state.data[chId].map((farm) => {
        const liveFarmData = action.payload.find((farmData) => farmData.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
    })

    // Update farms with user data
    builder.addCase(fetchFarmUserDataAsync.fulfilled, (state, action) => {
      const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? process.env.REACT_APP_CLO_CHAIN_ID) 
      action.payload.forEach((userDataEl) => {
        const { pid } = userDataEl
        const index = state.data[chId].findIndex((farm) => farm.pid === pid)
        state.data[chId][index] = { ...state.data[chId][index], userData: userDataEl }
      })

      state.userDataLoaded = true
    })
  },
})

// Actions
export const { setLoadArchivedFarmsData } = farmsSlice.actions

export default farmsSlice.reducer
