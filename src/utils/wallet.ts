// Set of helper functions to facilitate wallet setup

import { BASE_CALLISTO_SCAN_URL } from 'config'
import { nodes } from './getRpcUrl'
import { localStorageChainIdKey } from '../config/index';

/**
 * Prompt the user to add Polygon as a network on Metamask, or switch to Polygon if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Callisto Mainnet',
            nativeCurrency: {
              name: 'CLO',
              symbol: 'clo',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_CALLISTO_SCAN_URL}/`],
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

    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: curNet.hexChainId
          }
        ]
      });
      return true;
    } catch (error: any) {
      if (error.code === 4902 || error.code === -32603) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: curNet.hexChainId,
                chainName: `${curNet.name}`,
                rpcUrls: curNet.rpcs,
                nativeCurrency: {
                  name: `${curNet.name}`,
                  symbol: `${curNet.symbol}`,
                  decimals: 18
                },
                blockExplorerUrls: [`${curNet.explorer}`]
              }
            ]
          });
        } catch (err) {
          console.error("Can't switch network on metamask because window.ethereum is undefined");
        }
      }
      return false;
    }
  } else {
    console.error("Can't switch network on metamask because window.ethereum is undefined");
    return false;
  }
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const chId = Number(localStorage.getItem(localStorageChainIdKey) ?? '820')
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `images/coins/${chId}/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}

export const addSoyToMetamask = async () => {
  await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
        symbol: 'SOY',
        decimals: 18,
        image: `https://app.soy.finance/images/coins/0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65.png`,
      },
    },
  })
}
