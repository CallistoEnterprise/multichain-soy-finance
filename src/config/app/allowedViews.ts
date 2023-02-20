import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'

const coreViews = ['/home', '/swap', '/send', '/find', '/pool', '/liquidity', '/create', '/add', '/remove']

const viewsMainnet = ['/farms', '/pools', '/staking', '/launchpad', '/ido', '/ido-week', '/nft', 'lottery', '/info']

const viewsBTT = ['/farms']

const viewsETC = ['/farms']

const viewsTestnet = ['/farms', '/pools', '/staking', 'lottery', 'info']

const allowedViews = (chainId: ChainId) => {
  const configs = {
    [ChainId.Mainnet]: viewsMainnet,
    [ChainId.BTT]: viewsBTT,
    [ChainId.ETC]: viewsETC,
    [ChainId.Testnet]: viewsTestnet,
  }
  return [...coreViews, ...configs[chainId]]
}

export default allowedViews
