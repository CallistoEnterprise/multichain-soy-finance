import { ChainId } from "@soy-libs/sdk-multichain"
export const MINIMUM_SEARCH_CHARACTERS = 2

export const WEEKS_IN_YEAR = 52.1429

export const TOTAL_FEE = 0.0025
export const LP_HOLDERS_FEE = 0.0017
export const TREASURY_FEE = 0.0003
export const BUYBACK_FEE = 0.0005
export let SS_V2_START = 1634494539 // CLO chain October-17-2021 09:15:02 PM +2 UTC
// SS_V2_START = 1655710961 ETC chain June-20-2022 10:42:41 AM +3 UTC
export let trackedReserveCOIN = 'trackedReserveCLO'
export let coinPrice = 'cloPrice'
export let derivedCOIN = 'derivedCLO'

export const setSoyStart = async (chainId) => {
    if (chainId === ChainId.ETCCLASSICMAINNET){
        SS_V2_START = 1655710961
        trackedReserveCOIN = 'trackedReserveETC'
        coinPrice = 'etcPrice'
        derivedCOIN = 'derivedETC'
    } else if (chainId === ChainId.MAINNET){
        SS_V2_START = 1634494539
        trackedReserveCOIN = 'trackedReserveCLO'
        coinPrice = 'cloPrice'
        derivedCOIN = 'derivedCLO'
    }
}

export const ONE_DAY_UNIX = 86400 // 24h * 60m * 60s
export const ONE_HOUR_SECONDS = 3600

export const ITEMS_PER_INFO_TABLE_PAGE = 10

// These tokens are either incorrectly priced or have some other issues that spoil the query data
// None of them present any interest as they have almost 0 daily trade volume
export const TOKEN_BLACKLIST = ["0xffbce94c24a6c67daf7315948eb8b9fa48c5cdee"]