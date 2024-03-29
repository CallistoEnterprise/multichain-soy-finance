import React from 'react'
import LaunchPads from 'config/constants/launchPads'
import NftCard from './NftCard'
import NftGrid from './NftGrid'

/**
 * A map of bunnyIds to special campaigns (NFT distribution)
 * Each NftCard is responsible for checking it's own claim status
 *
 */

const PadList = () => {
  return (
    <NftGrid>
      {LaunchPads.map((nft) => {
        return <NftCard nft={nft} key={`${nft.name}-${nft.classId}`} />
      })}
    </NftGrid>
  )
}

export default PadList
