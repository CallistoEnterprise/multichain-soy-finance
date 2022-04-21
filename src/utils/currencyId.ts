import { Currency, ETHER, BTTETHER, Token } from '@soy-libs/sdk-multichain'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CLO'
  if (currency === BTTETHER) return 'BTT'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
