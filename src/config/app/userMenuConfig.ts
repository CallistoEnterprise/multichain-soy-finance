import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { MenuEntry } from 'uikit2'
import { ContextApi } from 'contexts/Localization/types'
import { config } from 'process'

const menuMainnet: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking Pools'),
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: t('Launchpad'),
    icon: 'LaunchpadIcon',
    href: '/launchpad',
  },
  {
    label: t('Bridge'),
    icon: 'BridgeIcon',
    href: 'https://bridge.soy.finance/',
    target: '_blank',
  },
  {
    label: t('SOY Finance IDO'),
    icon: 'IDOIcon',
    href: '/ido',
  },
  {
    label: t('NFT'),
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SoyFinance',
        target: '_blank',
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
        target: '_blank',
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
        target: '_blank',
      },
    ],
  },
]

const menuBTT: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking Pools'),
    sublabel: t('(Only Callisto)'),
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: t('Bridge'),
    icon: 'BridgeIcon',
    href: 'https://bridge.soy.finance/',
    target: '_blank',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SoyFinance',
        target: '_blank',
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
        target: '_blank',
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
        target: '_blank',
      },
    ],
  },
]

const menuETC: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking Pools'),
    sublabel: t('(Only Callisto)'),
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: t('Bridge'),
    icon: 'BridgeIcon',
    href: 'https://bridge.soy.finance/',
    target: '_blank',
  },
  /*{
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info'
  }, */
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SoyFinance',
        target: '_blank',
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
        target: '_blank',
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
        target: '_blank',
      },
    ],
  },
]

const menuTestnet: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking Pools'),
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: t('Faucet'),
    icon: 'BridgeIcon',
    href: 'https://faucet.callisto.network/',
    target: '_blank',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info',
  },
]

const userMenuConfig = (chainId: ChainId) => {
  const configs = {
    [ChainId.Mainnet]: menuMainnet,
    [ChainId.BTT]: menuBTT,
    [ChainId.ETC]: menuETC,
    [ChainId.Testnet]: menuTestnet,
  }
  return configs[chainId]
}

export default userMenuConfig
