import React from 'react'
import nfts from 'config/constants/nfts'
import NftCard from './NftCard'
import NftGrid from './NftGrid'

/**
 * A map of bunnyIds to special campaigns (NFT distribution)
 * Each NftCard is responsible for checking it's own claim status
 *
 */

const NftList = () => {
  return (
    <NftGrid>
      {nfts.map((nft) => {
        return <NftCard nft={nft} key={`${nft.name}-${nft.classId}`} />
      })}
    </NftGrid>
  )
}

export default NftList
