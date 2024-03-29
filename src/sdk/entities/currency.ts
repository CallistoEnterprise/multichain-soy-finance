import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'CLO', 'Callisto Network')
  public static readonly ETHERCLOTEST: Currency = new Currency(18, 'CLO', 'Callisto Test Network')
  public static readonly MAINETHER: Currency = new Currency(18, 'ETH', 'Ethereum Network')
  public static readonly BNBETHER: Currency = new Currency(18, 'BNB', 'BSC Network')
  public static readonly BTTETHER: Currency = new Currency(18, 'BTT', 'BitTorrent Chain')
  public static readonly ETCETHER: Currency = new Currency(18, 'ETC', 'Ethereum Classic')
  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHERS: { [chainId in ChainId]: Currency } = {
  [ChainId.Mainnet]: Currency.ETHER,
  [ChainId.Testnet]: Currency.ETHERCLOTEST,
  [ChainId.BTT]: Currency.BTTETHER,
  [ChainId.ETC]: Currency.ETCETHER,
}

export { ETHERS }
