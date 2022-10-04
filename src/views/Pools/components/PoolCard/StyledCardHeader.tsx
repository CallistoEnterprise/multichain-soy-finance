import React from 'react'
import { CardHeader, Heading, Text, Flex } from '@soy-libs/uikit2'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Token } from 'config/constants/types'
import { TokenPairImage } from 'components/TokenImage'
import CakeVaultTokenPairImage from '../CakeVaultCard/CakeVaultTokenPairImage'
import { ChainId } from '@soy-libs/sdk-multichain'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundDisabled : theme.colors.gradients[background]};
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
`

const soyTemp = {
  symbol: 'SOY',
  address: {
    [ChainId.MAINNET]: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB1grey',
    [ChainId.CLOTESTNET]: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB1grey',
  },
  decimals: 18,
  projectLink: 'https://app.soy.finance/',
}

const StyledCardHeader: React.FC<{
  earningToken: Token
  stakingToken: Token
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
  lockPeriod?: number | string
  lockPeriodUnit?: string
  isNew?: boolean
}> = ({ earningToken, stakingToken, isFinished = false, isAutoVault = false, isStaking = false, lockPeriod, lockPeriodUnit, isNew }) => {
  const { t } = useTranslation()
  const isCakePool = earningToken.symbol === 'SOY' && stakingToken.symbol === 'SOY'
  const background = isStaking ? 'bubblegum' : 'cardHeader'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (isCakePool) {
      // manual cake
      return !isNew ? t('Cold Staking(V1)') : t('Staking')
    }
    // all other pools
    return t('Earn')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Automatic restaking')
    }
    if (isCakePool) {
      return !isNew ? t('Freeze SOY, Earn SOY') : t(`Time lock ${lockPeriod} ${lockPeriodUnit}`)
    }
    return t('Stake %symbol%', { symbol: stakingToken.symbol })
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading color={!isNew || isFinished ? 'textDisabled' : 'body'} scale="lg">
            {`${earningToken.symbol} ${getHeadingPrefix()}`}
          </Heading>
          <Text color={!isNew || isFinished ? 'textDisabled' : 'textSubtle'}>{getSubHeading()}</Text>
        </Flex>
        {isAutoVault ? (
          <CakeVaultTokenPairImage width={64} height={64} />
        ) : (
          <TokenPairImage primaryToken={!isNew ? soyTemp : earningToken} secondaryToken={!isNew ? soyTemp : stakingToken} width={64} height={64} />
        )}
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
