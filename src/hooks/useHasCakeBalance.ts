import BigNumber from 'bignumber.js'
import { getSoyAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's SOY balance is at least the amount passed in
 */
const useHasCakeBalance = (minimumBalance: BigNumber) => {
  const { balance: cakeBalance } = useTokenBalance(getSoyAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasCakeBalance
