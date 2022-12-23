import React from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { Card, CardBody, Button } from '@callisto-enterprise/soy-uikit2'
import { useTranslation } from 'contexts/Localization'
import { Nft } from 'config/constants/types'
import Preview from './Preview'

export interface NftCardProps {
  nft: Nft
  canClaim?: boolean
  tokenIds?: number[]
  onClaim?: () => Promise<ethers.providers.TransactionResponse>
}

const StyledCard = styled(Card)`
  border-radius: 0;
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

const BuyButton = styled(Button)<{ bkColor?: string }>`
  background-color: ${({ bkColor }) => bkColor};
  color: #ffffff;
`

const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const { t } = useTranslation()

  const handleConfirm = async () => {
    window.open('https://warz.vip/#/ico/', '_blank')
  }

  return (
    <StyledCard>
      <Preview nft={nft} isOwned={false} />

      <CardBody>
        <BuyButton width="100%" mt="0px" bkColor={nft.primaryColor} onClick={handleConfirm}>
          {t('Discover VIPWarz')}
        </BuyButton>
      </CardBody>
    </StyledCard>
  )
}

export default NftCard
