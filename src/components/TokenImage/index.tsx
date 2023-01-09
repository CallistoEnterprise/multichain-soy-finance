import React from 'react'
import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  TokenImage as UIKitTokenImage,
  ImageProps,
} from '@callisto-enterprise/soy-uikit2'
import { BASE_URL } from 'config'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token, chainId?: number) => {
  const address =
    token.symbol === CHAINS_CONSTANTS[chainId].general.nativeSymbol
      ? CHAINS_CONSTANTS[chainId].general.wrappedNativeAddress
      : getAddress(token.address, chainId)

  return `${BASE_URL}/images/coins/${chainId}/${address}.png`
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, ...props }) => {
  const { chainId } = useActiveWeb3React()

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
