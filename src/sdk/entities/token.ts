import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
    18,
    'WCLO',
    'Wrapped CLO',
  ),
  [ChainId.CLOTESTNET]: new Token(
    ChainId.CLOTESTNET,
    '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
    18,
    'WCLO',
    'Wrapped CLO',
  ),
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
    18,
    'WETH',
    'Wrapped ETH',
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
    18,
    'WETH',
    'Wrapped ETH',
  ),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa', 18, 'WETH', 'Wrapped ETH'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSCTESTNET]: new Token(
    ChainId.BSCTESTNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
  ),
  [ChainId.BTTMAINNET]: new Token(
    ChainId.BTTMAINNET,
    '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e',
    18,
    'WBTT',
    'Wrapped BTT',
  ),
  [ChainId.ETCCLASSICMAINNET]: new Token(
    ChainId.ETCCLASSICMAINNET,
    '0x35e9A89e43e45904684325970B2E2d258463e072',
    18,
    'WETC',
    'Wrapped ETC',
  ),
}
