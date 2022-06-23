import React from 'react'
import { TokenPairImage, ImageProps } from '@soy-libs/uikit2'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'
import { BASE_URL, localStorageChainIdKey } from 'config'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const chId = Number(window.localStorage.getItem(localStorageChainIdKey) ?? '820')
  const primaryTokenSrc = `${BASE_URL}/images/coins/${chId}/${getAddress(tokens.soy.address)}.png`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc={`${BASE_URL}/images/coins/autorenew.svg`} {...props} />
}

export default CakeVaultTokenPairImage
