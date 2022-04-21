import React from 'react'
import { useWeb3React } from '@web3-react/core'
import nfts from 'config/constants/nfts'
import { useAppDispatch } from 'state'
import { fetchWalletNfts } from 'state/collectibles'
import { useGetCollectibles } from 'state/collectibles/hooks'
import NftCard from './NftCard'
import NftGrid from './NftGrid'

/**
 * A map of bunnyIds to special campaigns (NFT distribution)
 * Each NftCard is responsible for checking it's own claim status
 *
 */

const NftList = () => {
  const { tokenIds } = useGetCollectibles()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleRefresh = () => {
    dispatch(fetchWalletNfts(account))
  }

  return (
    <NftGrid>
      {
        nfts.map((nft) => {
          return (
            <NftCard nft = {nft} tokenIds = {tokenIds[nft.name]} refresh = {handleRefresh} key={`${nft.name}-${nft.classId}`}/>
          )
        })
      }
    </NftGrid>
  )
}

export default NftList
