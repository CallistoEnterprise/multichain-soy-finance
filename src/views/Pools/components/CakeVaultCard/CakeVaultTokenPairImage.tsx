import React from 'react'
import { TokenPairImage, ImageProps } from '@soy-libs/uikit2'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'
import { BASE_URL, localStorageChainIdKey } from 'config'
import { ChainId } from '@soy-libs/sdk-multichain'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const chainId = Number(window.localStorage.getItem(localStorageChainIdKey)) ?? ChainId.MAINNET
  const primaryTokenSrc = `${BASE_URL}/images/coins/${chainId}/${getAddress(tokens.soy.address)}.png`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc={`${BASE_URL}/images/coins/autorenew.svg`} {...props} />
}

export default CakeVaultTokenPairImage
