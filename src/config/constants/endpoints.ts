import { ChainId } from '@callisto-enterprise/chain-constants'
import { DEFAULT_CHAIN_ID } from 'config'
import getLocalStorageChainId from 'utils/getLocalStorageChainId'
import { CHAINS_CONSTANTS } from './chains'

export const SUBGRAPH_SUPPORTED_CHAIN_IDS = [ChainId.Mainnet, ChainId.Testnet]

/*
export const GRAPH_API_PROFILE = process.env.REACT_APP_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.REACT_APP_GRAPH_API_PREDICTION
export const SNAPSHOT_VOTING_API = process.env.REACT_APP_SNAPSHOT_VOTING_API
export const SNAPSHOT_BASE_URL = process.env.REACT_APP_SNAPSHOT_BASE_URL
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const API_NFT = process.env.REACT_APP_API_NFT
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const GRAPH_API_NFTMARKET = process.env.REACT_APP_GRAPH_API_NFT_MARKET
*/
export const API_PROFILE = process.env.REACT_APP_API_PROFILE

export const GRAPH_API_LOTTERY = {
  820: 'https://graphql.callisto.network/mainnet/subgraphs/name/SoyFinance/lottery',
  20729: 'https://graphql.callisto.network/testnet/subgraphs/name/SoyFinance/lottery',
} //process.env.REACT_APP_GRAPH_API_LOTTERY

let chainId = getLocalStorageChainId()
if (!SUBGRAPH_SUPPORTED_CHAIN_IDS.includes(chainId)) chainId = DEFAULT_CHAIN_ID

export const INFO_CLIENT = CHAINS_CONSTANTS[chainId].subgraph.infoClient
export const BLOCKS_CLIENT = CHAINS_CONSTANTS[chainId].subgraph.blocksClient
