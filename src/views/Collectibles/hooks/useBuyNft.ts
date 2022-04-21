import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { useCharityContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { BIG_TEN } from 'utils/bigNumber'

const useBuyNft = () => {
  const contract = useCharityContract()
  const { toastError,} = useToast()

  const handleBuy = useCallback(
    async (classId: number, value: string | number) => {
      try {
        const bigAmount = new BigNumber(value).multipliedBy(BIG_TEN.pow(18)).toString() 

        const tx = await contract.buyNFT(classId.toString(), {value: bigAmount})
        if (tx) {
          const receipt = await tx.wait()
          return receipt.status
        }
        return false
      } catch(err: {data?: {message?: string}} | any) {
        // console.log(err, "<==== error")
        toastError(err?.data?.message)
        return false
      }
    },
    [contract, toastError],
  )

  return { onBuyNft: handleBuy }
}

export default useBuyNft
