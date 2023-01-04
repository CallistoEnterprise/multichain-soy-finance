import { JSBI, Percent, Token, WETH } from 'sdk'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { BUSDT, SOY, WCLO } from './tokens'

export const ROUTER_ADDRESS = {
  [ChainId.Mainnet]: '0xeB5B468fAacC6bBdc14c4aacF0eec38ABCCC13e7',
  [ChainId.Testnet]: '0xdbe46b17FFd35D6865b69F9398AC5454389BF38c',
  [ChainId.BTT]: '0x8Cb2e43e5AEB329de592F7e49B6c454649b61929',
  [ChainId.ETC]: '0x8c5Bba04B2f5CCCe0f8F951D2DE9616BE190070D',
}

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.Mainnet]: [WETH[ChainId.Mainnet], SOY[ChainId.Mainnet], BUSDT[ChainId.Mainnet]],
  [ChainId.Testnet]: [WETH[ChainId.Testnet], SOY[ChainId.Testnet]],
  [ChainId.ETC]: [WETH[ChainId.ETC], SOY[ChainId.ETC], BUSDT[ChainId.ETC]],
  [ChainId.BTT]: [WETH[ChainId.BTT], SOY[ChainId.BTT], BUSDT[ChainId.BTT], WCLO[ChainId.BTT]],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.Mainnet]: {},
  [ChainId.Testnet]: {},
  [ChainId.ETC]: {},
  [ChainId.BTT]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.Mainnet]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.Mainnet]: {},
  [ChainId.Testnet]: {},
  [ChainId.ETC]: {},
  [ChainId.BTT]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.Mainnet]: [SOY[ChainId.Mainnet], BUSDT[ChainId.Mainnet]],
  [ChainId.Testnet]: [SOY[ChainId.Testnet], BUSDT[ChainId.Testnet]],
  [ChainId.ETC]: [SOY[ChainId.ETC], BUSDT[ChainId.ETC]],
  [ChainId.BTT]: [SOY[ChainId.BTT], BUSDT[ChainId.BTT], WCLO[ChainId.BTT]],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.Mainnet]: [WETH[ChainId.Mainnet], SOY[ChainId.Mainnet], BUSDT[ChainId.Mainnet]],
  [ChainId.Testnet]: [WETH[ChainId.Testnet], SOY[ChainId.Testnet], BUSDT[ChainId.Testnet]],
  [ChainId.ETC]: [WETH[ChainId.ETC], SOY[ChainId.ETC], BUSDT[ChainId.ETC]],
  [ChainId.BTT]: [WETH[ChainId.BTT], SOY[ChainId.BTT], BUSDT[ChainId.BTT], WCLO[ChainId.BTT]],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.Mainnet]: [[SOY[ChainId.Mainnet], WCLO[ChainId.Mainnet]]],
  [ChainId.BTT]: [[WETH[ChainId.BTT], SOY[ChainId.BTT]]],
  [ChainId.ETC]: [[WETH[ChainId.ETC], SOY[ChainId.ETC]]],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much CLO so they end up with <.01
export const MIN_CLO: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 CLO
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000)) // .5%

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = []

// export { default as farmsConfig } from './farms'
export { default as poolsConfig } from './pools'
//export { default as ifosConfig } from './ifo'
