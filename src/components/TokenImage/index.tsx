import React from 'react'
import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  TokenImage as UIKitTokenImage,
  ImageProps,
} from '@soy-libs/uikit2'
import { BASE_URL, localStorageChainIdKey, NativeSymbols } from 'config'
import tokens, { wrappedNativeTokens } from 'config/constants/tokens'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token, chainId?: number) => {
  const address = getAddress(token.symbol === NativeSymbols[chainId].toUpperCase() ? wrappedNativeTokens[chainId].address : token.address, chainId)
  return `${BASE_URL}/images/coins/${chainId}/${address}.png`
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, ...props }) => {
  const {chainId} = useActiveWeb3React()

  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken, chainId)}
      secondarySrc={getImageUrlFromToken(secondaryToken, chainId)}
      {...props}
    />
  )
}

interface TokenImageProps extends ImageProps {
  token: Token
}

export const TokenImage: React.FC<TokenImageProps> = ({ token, ...props }) => {
  return <UIKitTokenImage src={getImageUrlFromToken(token)} {...props} />
}
