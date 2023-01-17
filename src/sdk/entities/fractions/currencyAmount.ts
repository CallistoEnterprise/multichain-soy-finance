import { currencyEquals } from '../token'
import { Currency, ETHERS } from '../currency'
import invariant from 'tiny-invariant'
import JSBI from 'jsbi'
import _Big from 'big.js'
import toFormat from 'toformat'

import { BigintIsh, Rounding, TEN, SolidityType } from '../../constants'
import { parseBigintIsh, validateSolidityTypeInstance } from '../../utils'
import { Fraction } from './fraction'

const Big = toFormat(_Big)

export class CurrencyAmount extends Fraction {
  public readonly currency: Currency

  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */
  public static ether(amount: BigintIsh, chainId?: number): CurrencyAmount {
    let ether = ETHERS[820]
    switch (chainId) {
      case 20729: {
        ether = ETHERS[20729]
        break
      }
      case 820: {
        ether = ETHERS[820]
        break
      }
      case 1: {
        ether = ETHERS[1]
        break
      }
      case 199: {
        ether = ETHERS[199]
        break
      }
      case 56: {
        ether = ETHERS[56]
        break
      }
      case 61: {
        ether = ETHERS[61]
        break
      }
      default: {
        break
      }
    }
    return new CurrencyAmount(ether, amount)
  }

  // amount _must_ be raw, i.e. in the native representation
  protected constructor(currency: Currency, amount: BigintIsh) {
    const parsedAmount = parseBigintIsh(amount)
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256)

    super(parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals)))
    this.currency = currency
  }

  public get raw(): JSBI {
    return this.numerator
  }

  public add(other: CurrencyAmount): CurrencyAmount {
    invariant(currencyEquals(this.currency, other.currency), 'TOKEN')
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw))
  }

  public subtract(other: CurrencyAmount): CurrencyAmount {
    invariant(currencyEquals(this.currency, other.currency), 'TOKEN')
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw))
  }

  public toSignificant(
    significantDigits: number = 6,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN,
  ): string {
    return super.toSignificant(significantDigits, format, rounding)
  }

  public toFixed(
    decimalPlaces: number = this.currency.decimals,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN,
  ): string {
    invariant(decimalPlaces <= this.currency.decimals, 'DECIMALS')
    return super.toFixed(decimalPlaces, format, rounding)
  }

  public toExact(format: object = { groupSeparator: '' }): string {
    Big.DP = this.currency.decimals
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(format)
  }
}
