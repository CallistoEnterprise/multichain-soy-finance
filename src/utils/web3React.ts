import UAuth from '@uauth/js'
import { UAuthConnector } from '@uauth/web3-react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import type { AbstractConnector } from '@web3-react/abstract-connector'
import { ConnectorNames } from '@soy-libs/uikit2'
// import { localStorageChainIdKey } from 'config'
import { ethers } from 'ethers'
// import getNodeUrl from './getRpcUrl'
import NETWORK_URLS from 'config/constants/networks';

const POLLING_INTERVAL = 12000
// const rpcUrl = getNodeUrl()
// const chainId = window.localStorage.getItem(localStorageChainIdKey) ? Number(window.localStorage.getItem(localStorageChainIdKey)) : parseInt(process.env.REACT_APP_CHAIN_ID, 10)

const injected = new InjectedConnector({ supportedChainIds: [1, 4, 42, 56, 97, 61, 820, 199, 20729] })

const walletconnect = new WalletConnectConnector({
  rpc: NETWORK_URLS,
  bridge: 'https://soyfinance.bridge.walletconnect.org/',
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
})

const bscConnector = new BscConnector({ supportedChainIds: [1, 4, 42, 56, 97, 61, 820, 199, 20729] })

export const uauth = new UAuthConnector({
  clientID: process.env.REACT_APP_UNSTOPPABLE_CLIENT_ID,
  redirectUri: 'https://app.soy.finance',
  postLogoutRedirectUri: 'https://app.soy.finance',

  scope: 'openid wallet',

  connectors: { injected, walletconnect },

  
})

export const unstoppableAuth = new UAuth({
  clientID: process.env.REACT_APP_UNSTOPPABLE_CLIENT_ID,
  redirectUri: 'https://app.soy.finance',
  postLogoutRedirectUri: 'https://app.soy.finance',
  scope: 'openid wallet',
})

export const connectors: Record<string, AbstractConnector> = {
  injected,
  walletconnect,
  uauth,
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
  [ConnectorNames.Unstoppable]: uauth,
}

export const getLibrary = (provider): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}

export const signMessage = async (provider: any, account: string, message: string): Promise<string> => {
  if (window.CallistoChain) {
    const { signature } = await window.CallistoChain.cloSign(account, message)
    return signature
  }

  /**
   * Wallet Connect does not sign the message correctly unless you use their method
   * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
   */
  if (provider.provider?.wc) {
    const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
    const signature = await provider.provider?.wc.signPersonalMessage([wcMessage, account])
    return signature
  }

  return provider.getSigner(account).signMessage(message)
}
