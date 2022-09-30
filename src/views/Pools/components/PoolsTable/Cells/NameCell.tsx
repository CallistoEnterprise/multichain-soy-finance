import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, useMatchBreakpoints } from '@soy-libs/uikit2'
import { useTranslation } from 'contexts/Localization'
import { useCakeVault } from 'state/pools/hooks'
import { Pool } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import { TokenPairImage } from 'components/TokenImage'
import CakeVaultTokenPairImage from '../../CakeVaultCard/CakeVaultTokenPairImage'
import BaseCell, { CellContent } from './BaseCell'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

interface NameCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const soyTemp = {
  symbol: 'SOY',
  address: {
    820: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB1grey',
    20729: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB1grey',
  },
  decimals: 18,
  projectLink: 'https://app.soy.finance/',
}

const NameCell: React.FC<NameCellProps> = ({ pool }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const { isXs, isSm } = useMatchBreakpoints()
  const { sousId, stakingToken, earningToken, userData, isFinished, isAutoVault, isNew, lockPeriod, lockPeriodUnit } = pool
  const {
    userData: { userShares },
  } = useCakeVault()
  const hasVaultShares = userShares && userShares.gt(0)

  const stakingTokenSymbol = stakingToken?.symbol
  const earningTokenSymbol = earningToken?.symbol

  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isStaked = stakedBalance.gt(0)
  const isManualCakePool = sousId === 0

  const showStakedTag = isAutoVault ? hasVaultShares : isStaked

  let title = !isNew ? `${t('Earn')} ${earningTokenSymbol}(V1)` : `${stakingToken.symbol} Staking`
  let subtitle = isNew ? `Time lock ${lockPeriod[chainId]} ${lockPeriodUnit[chainId]}` : `${t('Freeze')} ${stakingTokenSymbol}`
  const showSubtitle = sousId !== 0 || (sousId === 0 && !isXs && !isSm)

  if (isAutoVault) {
    title = t('Auto SOY')
    subtitle = t('Automatic restaking')
  } else if (isManualCakePool) {
    title = t('Manual SOY')
    subtitle = `${t('Earn')} SOY ${t('Stake').toLocaleLowerCase()} SOY`
  }

  return (
    <StyledCell role="cell">
      {isAutoVault ? (
        <CakeVaultTokenPairImage mr="8px" width={40} height={40} />
      ) : (
        <TokenPairImage primaryToken={!isNew ? soyTemp : earningToken} secondaryToken={!isNew ? soyTemp : stakingToken} mr="8px" width={40} height={40} />
      )}
      <CellContent>
        {showStakedTag && !isNew && (
          <Text fontSize="12px" bold color={isFinished ? 'failure' : 'secondary'} textTransform="uppercase">
            {t('Staked')}
          </Text>
        )}
        <Text bold={!isXs && !isSm} small={isXs || isSm}>
          {title}
        </Text>
        {showSubtitle && (
          <Text fontSize="12px" color={!isNew ? "textDisabled" : "textSubtle"}>
            {subtitle}
          </Text>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default NameCell
