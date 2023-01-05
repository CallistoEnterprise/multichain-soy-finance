import JSBI from 'jsbi'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

/*export enum ChainId {
  ETC = 6 1,
  BTT = 1 9 9,
  Mainnet = 8 2 0,
  Testnet = 2 0 7 2 9,
}*/

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS = {
  [ChainId.Mainnet]: '0x9CC7C769eA3B37F1Af0Ad642A268b80dc80754c5',
  [ChainId.Testnet]: '0x9D43dd4C1Ef8384c070Bfd05615142F55EFBD89f',
  [ChainId.ETC]: '0x23675f1Ac7cce101Aff647B96d7201EfCf66E4b0',
  [ChainId.BTT]: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
}

export const INIT_CODE_HASH = {
  [ChainId.Mainnet]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.Testnet]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.ETC]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.BTT]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(998)
export const FEES_DENOMINATOR = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}
