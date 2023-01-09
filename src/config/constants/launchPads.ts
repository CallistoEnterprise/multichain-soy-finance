export const IPFS_GATEWAY = 'https://cloudflare-ipfs.com'

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
