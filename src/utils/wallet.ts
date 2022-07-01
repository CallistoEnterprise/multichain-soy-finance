// Set of helper functions to facilitate wallet setup

import { BASE_URL } from 'config'
import { Networks } from 'config/constants/networks';
import { localStorageChainIdKey } from '../config/index';

/**
 * Prompt the user to add Polygon as a network on Metamask, or switch to Polygon if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = window.localStorage.getItem(localStorageChainIdKey) ? Number(window.localStorage.getItem(localStorageChainIdKey)) : parseInt(process.env.REACT_APP_CHAIN_ID, 10)

    const curNet = Networks.filter((_) => Number(_.chainId) === chainId)

    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Callisto Mainnet',
            nativeCurrency: {
              name: curNet[0].name,
              symbol: curNet[0].symbol,
              decimals: 18,
            },
            rpcUrls: curNet[0].rpcs,
            blockExplorerUrls: [`${curNet[0].explorer}`],
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

export const setupNetwork2 = async () => {
  const provider = window.ethereum;
  if (provider) {
    const chainId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? 820)

    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
          },
        ],
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
  const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? '820')
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/coins/${chId}/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}

const SOY = {
  820: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
  199: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910'
}

export const addSoyToMetamask = async (chainId: number) => {
  
  await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: SOY[chainId],
        symbol: 'SOY',
        decimals: 18,
        image: `https://app.soy.finance/images/coins/0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65.png`,
      },
    },
  })
}
