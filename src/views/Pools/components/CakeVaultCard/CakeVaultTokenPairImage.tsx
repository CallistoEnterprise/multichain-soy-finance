import React from 'react'
import { TokenPairImage, ImageProps } from '@callisto-enterprise/soy-uikit2'
import { BASE_URL } from 'config'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const { chainId } = useActiveWeb3React()
  const primaryTokenSrc = `${BASE_URL}/images/coins/${chainId}/${getAddress(tokens.soy.address)}.png`

  return (
    <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc={`${BASE_URL}/images/coins/autorenew.svg`} {...props} />
  )
}

export default CakeVaultTokenPairImage
