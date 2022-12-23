// Set of helper functions to facilitate wallet setup

import { BASE_URL, localStorageChainIdKey, DEFAULT_CHAIN_ID } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { ChainConstants } from 'config/constants/chains/types'
import tokens from 'config/constants/tokens'

/**
 * Prompt the user to add Polygon as a network on Metamask, or switch to Polygon if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chainId: number) => {
  const provider = window.ethereum
  if (provider) {
    const chain: ChainConstants = CHAINS_CONSTANTS[chainId]

    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: chain.general.hexChainId,
            chainName: chain.general.officialName,
            nativeCurrency: {
              name: chain.general.officialName,
              symbol: chain.general.nativeSymbol,
              decimals: 18,
            },
            rpcUrls: chain.rpcs,
            blockExplorerUrls: [`${chain.explorer.url}`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the Polygon network on metamask because window.ethereum is undefined")
    return false
  }
}

export const switchNetwork = async (library, curNet: any) => {
  const provider = await library?.provider // window.ethereum;

  if (provider) {
    // const chainId = Number(curNet.chainId);
    const chain: ChainConstants = CHAINS_CONSTANTS[curNet.chainId]

    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: chain.general.hexChainId,
          },
        ],
      })
      return true
    } catch (error: any) {
      if (error.code === 4902 || error.code === -32603) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: chain.general.hexChainId,
                chainName: chain.general.officialName,
                nativeCurrency: {
                  name: chain.general.officialName,
                  symbol: chain.general.nativeSymbol,
                  decimals: 18,
                },
                rpcUrls: chain.rpcs,
                blockExplorerUrls: [`${chain.explorer.url}`],
              },
            ],
          })
        } catch (err) {
          console.error("Can't switch network on metamask because window.ethereum is undefined")
        }
      }
      return false
    }
  } else {
    console.error("Can't switch network on metamask because window.ethereum is undefined")
    return false
  }
}

export const setupNetwork2 = async (chainId: number) => {
  const provider = window.ethereum
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  chainId?: number,
) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/coins/${chainId}/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}

export const addSoyToMetamask = async (chainId: number) => {
  await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokens.soy.address[chainId],
        symbol: 'SOY',
        decimals: 18,
        image: `https://app.soy.finance/images/coins/0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65.png`,
      },
    },
  })
}
