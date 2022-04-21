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

const Nfts = [
  {
    name: 'Emerald',
    subName: 'Cold Sloth',
    images: {
      lg: 'Cold Sloth-02.png',
      md: 'Cold Sloth-02.png',
      sm: 'Cold Sloth-02.png',
      ipfs: '',
    },
    minPrice: 10000,
    maxPrice: 'infinity',
    primaryColor: '#74AB46',
    classId: 11,
  },
  {
    name: 'Saphire',
    subName: 'Cold Sloth',
    images: {
      lg: 'Cold Sloth-01.png',
      md: 'Cold Sloth-01.png',
      sm: 'Cold Sloth-01.png',
      ipfs: '',
    },
    minPrice: 1000,
    maxPrice: 5000,
    primaryColor: '#5A9BD5',
    classId: 10,
  },
  {
    name: 'Purple',
    subName: 'Cold Sloth',
    images: {
      lg: 'Cold Sloth-03.png',
      md: 'Cold Sloth-03.png',
      sm: 'Cold Sloth-03.png',
      ipfs: '',
    },
    minPrice: 100,
    maxPrice: 500,
    primaryColor: '#A85EFD',
    classId: 9,
  },
  {
    name: 'Emerald',
    subName: 'Astronaut Heart',
    images: {
      lg: 'Astronaut Heart_3.jpg',
      md: 'Astronaut Heart_3.jpg',
      sm: 'Astronaut Heart_3.jpg',
      ipfs: '',
    },
    minPrice: 10000,
    maxPrice: 'infinity',
    primaryColor: '#74AB46',
    classId: 8,
  },
  {
    name: 'Saphire',
    subName: 'Astronaut Heart',
    images: {
      lg: 'Astronaut Heart_1.jpg',
      md: 'Astronaut Heart_1.jpg',
      sm: 'Astronaut Heart_1.jpg',
      ipfs: '',
    },
    minPrice: 1000,
    maxPrice: 5000,
    primaryColor: '#5A9BD5',
    classId: 7,
  },
  {
    name: 'Purple',
    subName: 'Astronaut Heart',
    images: {
      lg: 'Astronaut Heart_2.jpg',
      md: 'Astronaut Heart_2.jpg',
      sm: 'Astronaut Heart_2.jpg',
      ipfs: '',
    },
    minPrice: 100,
    maxPrice: 500,
    primaryColor: '#A85EFD',
    classId: 6,
  },
  {
    name: 'Emerald',
    subName: 'BatSloth',
    images: {
      lg: 'claire-lg-2.jpg',
      md: 'claire-md-2.jpg',
      sm: 'emerald-sm-2.jpg',
      ipfs: 'https://cloudflare-ipfs.com/ipfs',
    },
    minPrice: 10000,
    maxPrice: 'infinity',
    primaryColor: '#74AB46',
    classId: 5,
  },
  {
    name: 'Saphire',
    subName: 'BatSloth',
    images: {
      lg: 'saphire-lg-2.jpg',
      md: 'saphire-md-2.jpg',
      sm: 'saphire-sm-2.jpg',
      ipfs: 'https://cloudflare-ipfs.com/ipfs',
    },
    minPrice: 1000,
    maxPrice: 5000,
    primaryColor: '#5A9BD5',
    classId: 4,
  },
  {
    name: 'Purple',
    subName: 'BatSloth',
    images: {
      lg: 'purple-lg-2.jpg',
      md: 'purple-md-2.jpg',
      sm: 'purple-sm-2.jpg',
      ipfs: 'https://cloudflare-ipfs.com/ipfs',
    },
    minPrice: 100,
    maxPrice: 500,
    primaryColor: '#A85EFD',
    classId: 3,
  },
  {
    name: 'Emerald',
    subName: 'One Earth, One Heart',
    images: {
      lg: 'claire-lg.png',
      md: 'claire-md.png',
      sm: 'emerald-sm.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs',
    },
    minPrice: 10000,
    maxPrice: 'infinity',
    primaryColor: '#74AB46',
    classId: 2,
  },
  {
    name: 'Saphire',
    subName: 'One Earth, One Heart',
    images: {
      lg: 'saphire-lg.png',
      md: 'saphire-md.png',
      sm: 'saphire-sm.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs',
    },
    minPrice: 1000,
    maxPrice: 5000,
    primaryColor: '#5A9BD5',
    classId: 1,
  },
  {
    name: 'Purple',
    subName: 'One Earth, One Heart',
    images: {
      lg: 'purple-lg.png',
      md: 'purple-md.png',
      sm: 'purple-sm.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs',
    },
    minPrice: 100,
    maxPrice: 500,
    primaryColor: '#A85EFD',
    classId: 0,
  },
]

export default Nfts
