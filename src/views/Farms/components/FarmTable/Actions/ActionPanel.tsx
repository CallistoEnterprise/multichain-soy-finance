import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text } from 'uikit2'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getAddress } from 'utils/addressHelpers'
import { getCallistoExpLink } from 'utils'

import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'
import FarmTags from '../FarmTags'
import { getCallistoIsAuditedFarm, getCallistoRiskLevelFarm } from 'utils/getCallistoRiskLevel'

export interface ActionPanelProps {
  apr: AprProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
  userDataReady: boolean
  expanded: boolean
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 0;
  }
`

const LinksContainer = styled.div``

const ValueContainer = styled.div`
  display: block;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
    margin-top: 0;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apr,
  multiplier,
  liquidity,
  userDataReady,
  expanded,
}) => {
  const farm = details
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const isActive = farm.multiplier !== '0X'
  const lpLabel = farm?.lpSymbol && farm?.lpSymbol?.toUpperCase().replace('SOYFINANCE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const lpAddress = getAddress(farm?.lpAddresses)
  const polygon = getCallistoExpLink(lpAddress, 'address', chainId)
  // const info = `https://soyfinance.info/pool/${lpAddress}`

  return (
    <Container expanded={expanded}>
      <InfoContainer>
        <LinksContainer>
          {isActive && (
            <StakeContainer>
              <StyledLinkExternal href={`/add/${liquidityUrlPathParts}`}>
                {t('Get %symbol%', { symbol: lpLabel })}
              </StyledLinkExternal>
            </StakeContainer>
          )}
          <StyledLinkExternal href={polygon}>{t('View Contract')}</StyledLinkExternal>
        </LinksContainer>
        <TagsContainer>
          <FarmTags
            flexDirection="column"
            scale="sm"
            isCore={farm.multiplier && Number(farm.multiplier.replace('X', '')) >= 5}
            isAudited={getCallistoIsAuditedFarm(farm.quoteToken.address[chainId], farm.token.address[chainId], chainId)}
            riskLevel={getCallistoRiskLevelFarm(farm.quoteToken.address[chainId], farm.token.address[chainId], chainId)}
          />
        </TagsContainer>
      </InfoContainer>
      <ValueContainer>
        <ValueWrapper>
          <Text>{t('APR')}</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('Multiplier')}</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('Liquidity')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
      </ValueContainer>
      <ActionContainer>
        <HarvestAction {...farm} userDataReady={userDataReady} />
        <StakedAction {...farm} userDataReady={userDataReady} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
