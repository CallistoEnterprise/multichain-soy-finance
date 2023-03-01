import { CALLISTO_CHAIN_ID as ChainId } from '@callisto-enterprise/chain-constants'

const coreViews = ['/home', '/swap', '/send', '/find', '/pool', '/liquidity', '/create', '/add', '/remove']

const viewsMainnet = ['/farms', '/pools', '/staking', '/launchpad', '/ido', '/ido-week', '/nft', 'lottery', '/info']

const viewsTestnet = ['/farms', '/pools', '/staking', 'lottery', 'info']

const viewsETC = ['/farms']

const viewsBTT = ['/farms']

const viewsETH = []

const viewsBSC = []

const allowedViews = (chainId: ChainId) => {
  const configs = {
    [ChainId.Mainnet]: viewsMainnet,
    [ChainId.Testnet]: viewsTestnet,
    [ChainId.ETC]: viewsETC,
    [ChainId.BTT]: viewsBTT,
    [ChainId.ETH]: viewsETH,
    [ChainId.BSC]: viewsBSC,
  }
  return [...coreViews, ...configs[chainId]]
}

export default allowedViews
