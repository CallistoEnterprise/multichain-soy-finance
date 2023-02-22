import React from 'react'
import styled from 'styled-components'
import { Skeleton } from 'uikit2'
import ApyButton from 'views/Farms/components/FarmCard/ApyButton'
import { Address } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getDisplayApr } from 'views/Farms/Farms'

export interface AprProps {
  farmApr: number
  lpApr?: number
  multiplier: string
  lpLabel: string
  tokenAddress?: Address
  quoteTokenAddress?: Address
  cakePrice: BigNumber
  hideButton?: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Apr: React.FC<AprProps> = ({
  farmApr,
  lpApr,
  lpLabel,
  tokenAddress,
  quoteTokenAddress,
  cakePrice,
  hideButton = false,
}) => {
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAddress, tokenAddress })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const totalApr = (farmApr || 0) + (lpApr || 0)

  return totalApr !== 0 ? (
    <Container>
      {farmApr ? (
        <>
          <AprWrapper>{getDisplayApr(totalApr)}%</AprWrapper>
          {!hideButton && (
            <ApyButton
              lpLabel={lpLabel}
              cakePrice={cakePrice}
              farmApr={farmApr}
              lpApr={lpApr}
              addLiquidityUrl={addLiquidityUrl}
            />
          )}
        </>
      ) : (
        <AprWrapper>
          <Skeleton width={60} />
        </AprWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <AprWrapper>0%</AprWrapper>
    </Container>
  )
}

export default Apr
