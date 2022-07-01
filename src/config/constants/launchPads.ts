import { NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://cloudflare-ipfs.com'

export const nftSources: NftSource = {
  [NftType.SAFEMOON]: {
    address: {
      820: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      20729: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
    },
    identifierKey: 'image',
  },
  [NftType.MIXIE]: {
    address: {
      820: '0xa251b5EAa9E67F2Bc8b33F33e20E91552Bf85566',
      20729: '',
    },
    identifierKey: 'image',
  },
}

/**
 * NOTE: https://cloudflare-ipfs.com does not support video streaming so for the video URLS we need to use
 * https://gateway.pinata.cloud
 */

const LaunchPads = [
  {
    name: 'Saphire',
    subName: 'One Earth, One Heart',
    images: {
      lg: 'VW.png',
      md: 'VW.png',
      sm: 'VW.png',
      ipfs: '',
    },
    minPrice: 1000,
    maxPrice: 5000,
    primaryColor: '#5A9BD5',
    classId: 0,
  },
]

export default LaunchPads