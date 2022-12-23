import { ChainId } from 'sdk'
import { MenuEntry } from '@callisto-enterprise/soy-uikit2'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
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
    target: "_blank"
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
    href: '/info'
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SoyFinance',
        target: "_blank"
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
        target: "_blank"
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
        target: "_blank"
      },
    ],
  },
]

export const bttConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
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
    target: "_blank"
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/SoyFinance',
        target: "_blank"
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
        target: "_blank"
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
        target: "_blank"
      },
    ],
  },
]

export const etcConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
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
    target: "_blank"
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
        target: "_blank"
      },
      {
        label: t('Docs'),
        href: 'https://callisto.network/',
        target: "_blank"
      },
      {
        label: t('Blog'),
        href: 'https://callisto.network/blog/',
        target: "_blank"
      },
    ],
  },
]

export const clotestnetConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
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
    target: "_blank"
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info'
  },
]

export const getConfig = (chainId:ChainId) => {
  switch(chainId) {
    case ChainId.BTTMAINNET:
      return bttConfig
    case ChainId.ETCCLASSICMAINNET:
      return etcConfig
    case ChainId.CLOTESTNET:
      return clotestnetConfig
    default:
      return config
  }
}

export default config
