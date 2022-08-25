import { ChainId, Token } from '@soy-libs/sdk-multichain'

export const SOY: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
  [ChainId.CLOTESTNET]: new Token(
    ChainId.CLOTESTNET,
    '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
  [ChainId.BTTMAINNET]: new Token(
    ChainId.BTTMAINNET,
    '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
  [ChainId.ETCCLASSICMAINNET]: new Token(
    ChainId.ETCCLASSICMAINNET,
    '0xcC67D978Ddf07971D9050d2b424f36f6C1a15893',
    18,
    'SOY',
    'SoyERC223-Token',
  )
}

export const WCLO: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a', 18, 'WCLO', 'Wrapped CLO'),
  [ChainId.CLOTESTNET]: new Token(ChainId.CLOTESTNET, '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa', 18, 'WCLO', 'Wrapped CLO'),
  [ChainId.BTTMAINNET]: new Token(ChainId.BTTMAINNET, '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53', 18, 'ccCLO', 'Wrapped Callisto Coin'),
  [ChainId.ETCCLASSICMAINNET]: new Token(ChainId.ETCCLASSICMAINNET, '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53', 18, 'ccCLO', 'Wrapped Callisto Coin'),
}
export const BUSDT = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4', 18, 'BUSDT', 'Tether USD'),
  [ChainId.CLOTESTNET]: new Token(ChainId.CLOTESTNET, '0xD83C3D10B30E7C939301DD5f72E0bfb91d3FE0CB', 18, 'BUSDT', 'Tether USD'),
  [ChainId.ETCCLASSICMAINNET]: new Token(ChainId.ETCCLASSICMAINNET, '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968', 18, 'BUSDT', 'Tether USD'),
  [ChainId.BTTMAINNET]: new Token(ChainId.BTTMAINNET, '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF', 18, 'BUSDT', 'Tether USD')
}
export const WBTT = new Token(ChainId.BTTMAINNET, '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e', 18, 'WBTT', 'Wrapped BTT')
// export const CCCLO = new Token(ChainId.BTTMAINNET, '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53', 18, 'ccCLO', 'Wrapped Callisto Coin')

export const ETH = new Token(
  ChainId.MAINNET,
  '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
  18,
  'ccETH',
  'Wrapped Ether',
)

const tokens = {
  clo: {
    symbol: 'CLO',
    projectLink: 'https://callisto.network/',
  },
  // btt: {
  //   symbol: 'BTT',
  //   projectLink: 'https://bt.io/',
  // },
  soy: {
    symbol: 'SOY',
    address: {
      820: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
      20729: '0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92',
      199: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
      61: '0xcC67D978Ddf07971D9050d2b424f36f6C1a15893'
    },
    decimals: 18,
    projectLink: 'https://app.soy.finance/',
  },
  wclo: {
    symbol: 'WCLO',
    address: {
      820: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      20729: '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
      199: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
      61: ''
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  wetc: {
    symbol: 'WETC',
    address: {
      820: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      20729: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      199: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
      61: '0x35e9A89e43e45904684325970B2E2d258463e072'
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  ccclo: {
    symbol: 'ccCLO',
    address: {
      820: '',
      20729: '',
      199: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
      61: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53'
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  busdt:{
    symbol: 'BUSDT',
    address: {
      820: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      20729: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      199: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      61: '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968'
    },
    decimals: 18,
    projectLink: 'https://bullsinvesting.club/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      820: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      20729: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      199: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      61: '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968'
    },
    decimals: 18,
    projectLink: 'https://bullsinvesting.club/',
  },
  cloe:{
    symbol: 'CLOE',
    address: {
      820: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
      20729: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
      199: '0xCC20d1B86bf1b80d4b9F0C19B138E17034457271',
      61: '0x09c4a1ACAE1b591C63691B8E62F46E2F0eD9A0F9',
    },
    decimals: 18,
    projectLink: 'https://callistoenterprise.com/',
  },
  ccetc:{
    symbol: 'ETC',
    address: {
      820: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
      20729: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
      199: '0xCc944bF3e76d483e41CC6154d5196E2e5d348fB0',
      61: '0x35e9A89e43e45904684325970B2E2d258463e072'
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F/transactions',
  },
  ccbnb:{
    symbol: 'BNB',
    address: {
      820: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      20729: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      199: '0x185a4091027E2dB459a2433F85f894dC3013aeB5',
      61: '0xcC653d74E087D35577049AB23e2141D619D95AEe'
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF/transactions',
  },
  cceth:{
    symbol: 'ETH',
    address: {
      820: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
      20729: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
      199: '0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006',
      61: '0xcc74b43F5092B9Dd0A4a86c85794C7d19ff10d88'
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC00860947035a26Ffe24EcB1301ffAd3a89f910/transactions',
  },
  "ccbnb_erc223":{
    symbol: 'BNB',
    address: {
      820: '0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9',
      199: '0x185a4091027E2dB459a2433F85f894dC3013aeB5',
      20729: '0x185a4091027E2dB459a2433F85f894dC3013aeB5',
      61: '0xcC653d74E087D35577049AB23e2141D619D95AEe'
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9/transactions',
  },
  "cceth_erc223":{
    symbol: 'ETH',
    address: {
      820: '0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796',
      20729: '',
      199: '0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006',
      61: '0xcc74b43F5092B9Dd0A4a86c85794C7d19ff10d88'
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796/transactions',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      820: '0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd',
      20729: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd/transactions',
  },
  twt: {
    symbol: 'TWT',
    address: {
      820: '0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e',
      20729: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e/transactions',
  },
  wsg: {
    symbol: "WSG",
    address: {
      820: "0xccEbb9f0EE6D720DebccEE42f52915037f774A70",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://wsg.gg/"
  },
  reef: {
    symbol: "REEF",
    address: {
      820: "0xCc1530716A7eBecFdc7572eDCbF01766f042155c",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xCc1530716A7eBecFdc7572eDCbF01766f042155c/transactions"
  },
  bake: {
    symbol: "BAKE",
    address: {
      820: "0xCCeC9F26F52E8e0D1d88365004f4F475f5274279",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xCCeC9F26F52E8e0D1d88365004f4F475f5274279/transactions"
  },
  shib: {
    symbol: "SHIB",
    address: {
      820: "0xccA4F2ED7Fc093461c13f7F5d79870625329549A",
      20729: ''
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xccA4F2ED7Fc093461c13f7F5d79870625329549A/transactions"
  },
  raca: {
    symbol: "RACA",
    address: {
      820: "0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b/transactions"
  },
  lina: {
    symbol: "LINA",
    address: {
      820: "0xCC10A4050917f771210407DF7A4C048e8934332c",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xCC10A4050917f771210407DF7A4C048e8934332c/transactions"
  },
  ton: {
    symbol: "TONCOIN",
    address: {
      820: "0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08",
      20729: '',
    },
    decimals: 9,
    projectLink: "https://explorer.callisto.network/address/0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08/transactions"
  },
  xms: {
    symbol: "XMS",
    address: {
      820: "0xcc45afedd2065EDcA770801055d1E376473a871B",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xcc45afedd2065EDcA770801055d1E376473a871B/transactions"
  },
  ftm: {
    symbol: "FTM",
    address: {
      820: "0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34",
      20729: ''
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34/transactions"
  },
  btt: {
    symbol: "ccBTT",
    address: {
      820: "0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3",
      20729: ''
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3/transactions"
  },
  bbt: {
    symbol: "BBT",
    address: {
      820: "0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427",
      20729: '',
    },
    decimals: 8,
    projectLink: "https://explorer.callisto.network/address/0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427/transactions"
  },
  antex: {
    symbol: "ANTEX",
    address: {
      820: "0xCCd792f5D06b73685a1b54A32fE786346cAd1894",
      20729: '',
    },
    decimals: 8,
    projectLink: "https://explorer.callisto.network/address/0xCCd792f5D06b73685a1b54A32fE786346cAd1894/transactions"
  },
  zoo: {
    symbol: "ZOO",
    address: {
      820: "0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D/transactions"
  },
  bcoin: {
    symbol: "BCOIN",
    address: {
      820: "0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65",
      20729: '',
    },
    decimals: 18,
    projectLink: "https://explorer.callisto.network/address/0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65/transactions"
  },
  wbtt: {
    symbol: "WBTT",
    address: {
      829: '',
      20729: '',
      199: '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e'
    },
    decimals: 18,
    projectLink: "https://wbtt.io/"
  }
}

export const wrappedNativeTokens = {
  820: tokens.wclo,
  199: tokens.wbtt,
  61: tokens.wetc
}

export default tokens
