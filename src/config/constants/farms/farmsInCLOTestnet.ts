import tokens from '../tokens'
import { FarmConfig } from '../types'

const farms: FarmConfig[] = [  
   {
    pid: 2,
    lpSymbol: 'SOY-CLO LP',
    lpAddresses: {
      20729: '0xb691dcF32ce577Cd15B5426c07969bDF0f757361',
      820: '0x1ceE27d0627ce8A81dF9B4D7eEE0d753b8c2F613',
    },
    localFarmAddresses: {
      820: '0xf43Db9BeC8F8626Cb5ADD409C7EBc7272c8f5F8f',
      20729: '0x093E764cC19FAD812d5F8aDD5A624eC0b934A4b4'
    },
    token: tokens.soy,
    quoteToken: tokens.wclo,
  },
  {
    pid: 4,
    lpSymbol: 'BUSDT-CLO LP',
    lpAddresses: {
      20729: '0x0f01090542433BbF6F58D640D45C34165aA1409d',
      820: '0xB852AD87329986EaC6e991954fe329231D1E4De1',
    },
    localFarmAddresses: {
      820: '0x3E5B906eE1Cb467E1511a2b1ad5a1bc4a3F9BF8B',
      20729: '0x093E764cC19FAD812d5F8aDD5A624eC0b934A4b4'
    },
    token: tokens.busdt,
    quoteToken: tokens.wclo,
  },
  {
    pid: 5,
    lpSymbol: 'SOY-BUSDT LP',
    lpAddresses: {
      20729: '0x093E764cC19FAD812d5F8aDD5A624eC0b934A4b4',
      820: '0x23288A0a9c7ac3bEC523aeED146E4F0bf04d6309',
    },
    localFarmAddresses: {
      820: '0xf16edf5Ba6bc116C17f6769deB470a190e272381',
      20729: '0x093E764cC19FAD812d5F8aDD5A624eC0b934A4b4'
    },
    token: tokens.soy,
    quoteToken: tokens.busdt,
  },
]

export default farms