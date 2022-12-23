import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  ETHEREUM = 1,
  RINKEBY = 4,
  KOVAN = 42,
  BSC = 56,
  BSCTESTNET = 97,
  ETCCLASSICMAINNET = 61,
  BTTMAINNET = 199,
  MAINNET = 820,
  CLOTESTNET = 20729,
}

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
  [ChainId.MAINNET]: '0x9CC7C769eA3B37F1Af0Ad642A268b80dc80754c5',
  [ChainId.CLOTESTNET]: '0x9D43dd4C1Ef8384c070Bfd05615142F55EFBD89f',
  [ChainId.ETHEREUM]: '0x9D43dd4C1Ef8384c070Bfd05615142F55EFBD89f',
  [ChainId.RINKEBY]: '0x9D43dd4C1Ef8384c070Bfd05615142F55EFBD89f',
  [ChainId.KOVAN]: '0x9D43dd4C1Ef8384c070Bfd05615142F55EFBD89f',
  [ChainId.BSC]: '0x23675f1Ac7cce101Aff647B96d7201EfCf66E4b0',
  [ChainId.BSCTESTNET]: '0x9D43dd4C1Ef8384c070Bfd05615142F55EFBD89f',
  [ChainId.ETCCLASSICMAINNET]: '0x23675f1Ac7cce101Aff647B96d7201EfCf66E4b0',
  [ChainId.BTTMAINNET]: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.CLOTESTNET]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.ETHEREUM]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.RINKEBY]: '',
  [ChainId.KOVAN]: '',
  [ChainId.BSC]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.BSCTESTNET]: '',
  [ChainId.ETCCLASSICMAINNET]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
  [ChainId.BTTMAINNET]: '0xe410ea0a25ce340e309f2f0fe9d58d787bb87dd63d02333e8a9a747230f61758',
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
