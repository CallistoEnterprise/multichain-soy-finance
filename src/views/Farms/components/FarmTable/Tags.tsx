import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@callisto-enterprise/soy-uikit2'
import ApyButton from 'views/Farms/components/FarmCard/ApyButton'
import { Address } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { CoreTag } from 'components/Tags'

export interface TagProps {
  isCore: boolean
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

const Tags: React.FC<TagProps> = ({
  isCore = true,
}) => {
  return (
    <Container>
      { isCore && <CoreTag /> }
    </Container>
  )
}

export default Tags
