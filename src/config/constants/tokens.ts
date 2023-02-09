import { Token } from 'sdk'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'

export const SOY: { [chainId: number]: Token } = {
  [ChainId.Mainnet]: new Token(
    ChainId.Mainnet,
    '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
  [ChainId.Testnet]: new Token(
    ChainId.Testnet,
    '0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92',
    18,
    'SOY',
    'SoyERC223-Token',
  ),
  [ChainId.BTT]: new Token(ChainId.BTT, '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910', 18, 'SOY', 'SoyERC223-Token'),
  [ChainId.ETC]: new Token(ChainId.ETC, '0xcC67D978Ddf07971D9050d2b424f36f6C1a15893', 18, 'SOY', 'SoyERC223-Token'),
}

export const WCLO: { [chainId: number]: Token } = {
  [ChainId.Mainnet]: new Token(
    ChainId.Mainnet,
    '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
    18,
    'WCLO',
    'Wrapped CLO',
  ),
  [ChainId.Testnet]: new Token(
    ChainId.Testnet,
    '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
    18,
    'WCLO',
    'Wrapped CLO',
  ),
  [ChainId.BTT]: new Token(
    ChainId.BTT,
    '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
    18,
    'ccCLO',
    'Wrapped Callisto Coin',
  ),
  [ChainId.ETC]: new Token(
    ChainId.ETC,
    '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
    18,
    'ccCLO',
    'Wrapped Callisto Coin',
  ),
}
export const BUSDT = {
  [ChainId.Mainnet]: new Token(
    ChainId.Mainnet,
    '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
    18,
    'BUSDT',
    'Tether USD',
  ),
  [ChainId.Testnet]: new Token(
    ChainId.Testnet,
    '0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C',
    18,
    'BUSDT',
    'Tether USD',
  ),
  [ChainId.ETC]: new Token(ChainId.ETC, '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968', 18, 'BUSDT', 'Tether USD'),
  [ChainId.BTT]: new Token(ChainId.BTT, '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF', 18, 'BUSDT', 'Tether USD'),
}
export const WBTT = new Token(ChainId.BTT, '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e', 18, 'WBTT', 'Wrapped BTT')
// export const CCCLO = new Token(ChainId.BTT, '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53', 18, 'ccCLO', 'Wrapped Callisto Coin')

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
      [ChainId.Mainnet]: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
      [ChainId.Testnet]: '0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92',
      [ChainId.BTT]: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
      [ChainId.ETC]: '0xcC67D978Ddf07971D9050d2b424f36f6C1a15893',
    },
    decimals: 18,
    projectLink: 'https://app.soy.finance/',
  },
  wclo: {
    symbol: 'WCLO',
    address: {
      [ChainId.Mainnet]: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      [ChainId.Testnet]: '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
      [ChainId.BTT]: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
      [ChainId.ETC]: '',
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  wetc: {
    symbol: 'WETC',
    address: {
      [ChainId.Mainnet]: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      [ChainId.Testnet]: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
      [ChainId.BTT]: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
      [ChainId.ETC]: '0x35e9A89e43e45904684325970B2E2d258463e072',
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  ccclo: {
    symbol: 'ccCLO',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
      [ChainId.ETC]: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
    },
    decimals: 18,
    projectLink: 'https://callisto.network/',
  },
  busdt: {
    symbol: 'BUSDT',
    address: {
      [ChainId.Mainnet]: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      [ChainId.Testnet]: '0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C',
      [ChainId.BTT]: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      [ChainId.ETC]: '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968',
    },
    decimals: 18,
    projectLink: 'https://bullsinvesting.club/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      [ChainId.Mainnet]: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
      [ChainId.Testnet]: '0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C',
      [ChainId.BTT]: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
      [ChainId.ETC]: '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968',
    },
    decimals: 18,
    projectLink: 'https://bullsinvesting.club/',
  },
  cloe: {
    symbol: 'CLOE',
    address: {
      [ChainId.Mainnet]: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0xCC20d1B86bf1b80d4b9F0C19B138E17034457271',
      [ChainId.ETC]: '0x09c4a1ACAE1b591C63691B8E62F46E2F0eD9A0F9',
    },
    decimals: 18,
    projectLink: 'https://callistoenterprise.com/',
  },
  ccetc: {
    symbol: 'ETC',
    address: {
      [ChainId.Mainnet]: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0xCc944bF3e76d483e41CC6154d5196E2e5d348fB0',
      [ChainId.ETC]: '0x35e9A89e43e45904684325970B2E2d258463e072',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F/transactions',
  },
  ccbnb: {
    symbol: 'BNB',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0x185a4091027E2dB459a2433F85f894dC3013aeB5',
      [ChainId.ETC]: '0xcC653d74E087D35577049AB23e2141D619D95AEe',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF/transactions',
  },
  cceth: {
    symbol: 'ETH',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006',
      [ChainId.ETC]: '0xcc74b43F5092B9Dd0A4a86c85794C7d19ff10d88',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC00860947035a26Ffe24EcB1301ffAd3a89f910/transactions',
  },
  ccbnb_erc223: {
    symbol: 'BNB',
    address: {
      [ChainId.Mainnet]: '0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9',
      [ChainId.BTT]: '0x185a4091027E2dB459a2433F85f894dC3013aeB5',
      [ChainId.Testnet]: '',
      [ChainId.ETC]: '0xcC653d74E087D35577049AB23e2141D619D95AEe',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9/transactions',
  },
  cceth_erc223: {
    symbol: 'ETH',
    address: {
      [ChainId.Mainnet]: '0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006',
      [ChainId.ETC]: '0xcc74b43F5092B9Dd0A4a86c85794C7d19ff10d88',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796/transactions',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      [ChainId.Mainnet]: '0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd/transactions',
  },
  twt: {
    symbol: 'TWT',
    address: {
      [ChainId.Mainnet]: '0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e/transactions',
  },
  wsg: {
    symbol: 'WSG',
    address: {
      [ChainId.Mainnet]: '0xccEbb9f0EE6D720DebccEE42f52915037f774A70',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://wsg.gg/',
  },
  reef: {
    symbol: 'REEF',
    address: {
      [ChainId.Mainnet]: '0xCc1530716A7eBecFdc7572eDCbF01766f042155c',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCc1530716A7eBecFdc7572eDCbF01766f042155c/transactions',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      [ChainId.Mainnet]: '0xCCeC9F26F52E8e0D1d88365004f4F475f5274279',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCCeC9F26F52E8e0D1d88365004f4F475f5274279/transactions',
  },
  shib: {
    symbol: 'SHIB',
    address: {
      [ChainId.Mainnet]: '0xccA4F2ED7Fc093461c13f7F5d79870625329549A',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xccA4F2ED7Fc093461c13f7F5d79870625329549A/transactions',
  },
  raca: {
    symbol: 'RACA',
    address: {
      [ChainId.Mainnet]: '0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b/transactions',
  },
  lina: {
    symbol: 'LINA',
    address: {
      [ChainId.Mainnet]: '0xCC10A4050917f771210407DF7A4C048e8934332c',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC10A4050917f771210407DF7A4C048e8934332c/transactions',
  },
  ton: {
    symbol: 'TONCOIN',
    address: {
      [ChainId.Mainnet]: '0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08',
      [ChainId.Testnet]: '',
    },
    decimals: 9,
    projectLink: 'https://explorer.callisto.network/address/0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08/transactions',
  },
  xms: {
    symbol: 'XMS',
    address: {
      [ChainId.Mainnet]: '0xcc45afedd2065EDcA770801055d1E376473a871B',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcc45afedd2065EDcA770801055d1E376473a871B/transactions',
  },
  ftm: {
    symbol: 'FTM',
    address: {
      [ChainId.Mainnet]: '0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34/transactions',
  },
  btt: {
    symbol: 'ccBTT',
    address: {
      [ChainId.Mainnet]: '0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3/transactions',
  },
  bbt: {
    symbol: 'BBT',
    address: {
      [ChainId.Mainnet]: '0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427',
      [ChainId.Testnet]: '',
    },
    decimals: 8,
    projectLink: 'https://explorer.callisto.network/address/0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427/transactions',
  },
  antex: {
    symbol: 'ANTEX',
    address: {
      [ChainId.Mainnet]: '0xCCd792f5D06b73685a1b54A32fE786346cAd1894',
      [ChainId.Testnet]: '',
    },
    decimals: 8,
    projectLink: 'https://explorer.callisto.network/address/0xCCd792f5D06b73685a1b54A32fE786346cAd1894/transactions',
  },
  zoo: {
    symbol: 'ZOO',
    address: {
      [ChainId.Mainnet]: '0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D/transactions',
  },
  bcoin: {
    symbol: 'BCOIN',
    address: {
      [ChainId.Mainnet]: '0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65/transactions',
  },
  vvt: {
    symbol: 'VVT',
    address: {
      [ChainId.Mainnet]: '0x9f9b6DD3DEDB4D2e6C679bCb8782f546400e9A53',
      [ChainId.Testnet]: '',
    },
    decimals: 18,
    projectLink: 'https://explorer.callisto.network/address/0x9f9b6DD3DEDB4D2e6C679bCb8782f546400e9A53/transactions',
  },
  tmt: {
    symbol: 'TMT',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0xB4dDe88Fd2D7Cf5AA0880fa2Ec893124Cbbe0FA3',
    },
    decimals: 18,
    projectLink:
      'https://testnet-explorer.callisto.network/address/0xB4dDe88Fd2D7Cf5AA0880fa2Ec893124Cbbe0FA3/transactions',
  },
  cat: {
    symbol: 'CAT',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0xEd385a41AB79625973617E43d6F591a5F3668716',
    },
    decimals: 18,
    projectLink:
      'https://testnet-explorer.callisto.network/address/0xEd385a41AB79625973617E43d6F591a5F3668716/transactions',
  },
  dad: {
    symbol: 'DAD',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0xb1f1b49ed2bE5FaE8Bd07d6CD462D81578f950bd',
    },
    decimals: 18,
    projectLink:
      'https://testnet-explorer.callisto.network/address/0xb1f1b49ed2bE5FaE8Bd07d6CD462D81578f950bd/transactions',
  },
  art: {
    symbol: 'ART',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0xBb311da561ACE7e7329Bcd9A79aA3cd98BE14F8D',
    },
    decimals: 18,
    projectLink:
      'https://testnet-explorer.callisto.network/address/0xBb311da561ACE7e7329Bcd9A79aA3cd98BE14F8D/transactions',
  },
  mnn: {
    symbol: 'MNN',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0x0DD4011b77A138A1969c11c3d87496B955F7BAF6',
    },
    decimals: 18,
    projectLink:
      'https://testnet-explorer.callisto.network/address/0x0DD4011b77A138A1969c11c3d87496B955F7BAF6/transactions',
  },
  ftr: {
    symbol: 'FTR',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0x996fc789002EfB99fd735c23DC77AA3CD89Fd56d',
    },
    decimals: 18,
    projectLink:
      'https://testnet-explorer.callisto.network/address/0x996fc789002EfB99fd735c23DC77AA3CD89Fd56d/transactions',
  },
  wbtt: {
    symbol: 'WBTT',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '',
      [ChainId.BTT]: '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e',
    },
    decimals: 18,
    projectLink: 'https://wbtt.io/',
  },
  srt: {
    symbol: 'SRT',
    address: {
      [ChainId.Mainnet]: '',
      [ChainId.Testnet]: '0xA38760109D760fe65427551242eAC320AD7bf672',
    },
    decimals: 18,
    projectLink: 'https://wbtt.io/',
  },
}

export default tokens
