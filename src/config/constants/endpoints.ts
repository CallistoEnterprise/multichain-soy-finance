import { ChainId } from "@soy-libs/sdk-multichain"
import { setSoyStart } from "./info"
export const GRAPH_API_PROFILE = process.env.REACT_APP_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.REACT_APP_GRAPH_API_PREDICTION
export const GRAPH_API_LOTTERY = process.env.REACT_APP_GRAPH_API_LOTTERY
export const SNAPSHOT_VOTING_API = process.env.REACT_APP_SNAPSHOT_VOTING_API
export const SNAPSHOT_BASE_URL = process.env.REACT_APP_SNAPSHOT_BASE_URL
export const API_PROFILE = process.env.REACT_APP_API_PROFILE
export const API_NFT = process.env.REACT_APP_API_NFT
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export let INFO_CLIENT
export let BLOCKS_CLIENT
/**
 * V1 will be deprecated but is still used to claim old rounds
 */
/** export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'
 * //export const INFO_CLIENT = 'https://api.soy.finance/subgraphs/name/soyfinance'
 * //export const BLOCKS_CLIENT = 'https://api.soy.finance/subgraphs/name/blocks'
 */
export const loadSubgraphVars = async (chainId) => {
    if (chainId === ChainId.ETCCLASSICMAINNET){
        INFO_CLIENT = 'https://03.callisto.network/subgraphsetc/name/soyswapetc'
        BLOCKS_CLIENT = 'https://03.callisto.network/subgraphsetc/name/blocksetctmp'
    } else if (chainId === ChainId.MAINNET) {
        INFO_CLIENT = 'https://03.callisto.network/subgraphs/name/soyswap'
        BLOCKS_CLIENT = 'https://03.callisto.network/subgraphs/name/blocks'
    }
    setSoyStart(chainId)
}


export const GRAPH_API_NFTMARKET = process.env.REACT_APP_GRAPH_API_NFT_MARKET
