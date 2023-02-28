import { CALLISTO_CHAIN_ID as ChainId } from '@callisto-enterprise/chain-constants'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.Mainnet]: '0x8bA3D23241c7044bE703afAF2A728FdBc16f5F6f',
  [ChainId.Testnet]: '0xDd2742Ba146A57F1F6e8F47235024ba1bd0cf568',
  [ChainId.ETC]: '0x98194aaA67638498547Df929DF4926C7D0DCD135',
  [ChainId.BTT]: '0x8dFbdEEeF41eefd92A663a34331db867CA6581AE',
  [ChainId.ETH]: '0x9d006725ba838fa5fd37efeaeb519bb4ff0d3636',
  [ChainId.BSC]: '0x98194aaa67638498547df929df4926c7d0dcd135',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
