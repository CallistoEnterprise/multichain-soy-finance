import React from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  Card,
  CardBody,
  Button,
} from '@soy-libs/uikit2'
import { useTranslation } from 'contexts/Localization'
import { Nft } from 'config/constants/types'
import InfoRow from '../InfoRow'
import Preview from './Preview'

export interface NftCardProps {
  nft: Nft
  canClaim?: boolean
  tokenIds?: number[]
  onClaim?: () => Promise<ethers.providers.TransactionResponse>
  refresh: () => void
}

const StyledCard = styled(Card)`
  border-radius: 0;
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

const Header = styled(InfoRow)<{bkColor?: string}>`
  min-height: 70px;
  width: 100%;
  background-color: ${({bkColor}) => bkColor};
  justify-content: center;
  flex-direction: column;
`
const BuyButton = styled(Button)<{bkColor?: string}>`
  background-color: ${({bkColor}) => bkColor};
  color: #FFFFFF;
`

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  min-height: 40px;
  width: 100%;
`
const NftCard: React.FC<NftCardProps> = ({ nft, tokenIds = [] }) => {
  const { t } = useTranslation()

  const handleConfirm = async () => {
    window.open('https://warz.vip/#/ico/', '_blank');
  }

  return (
    <StyledCard>
      <Preview nft={nft} isOwned={false} />

      <CardBody>
        <BuyButton
          width="100%"
          mt="0px"
          bkColor = {nft.primaryColor}
          onClick={handleConfirm}
        >
          {t('Discover VIPWarz')}
        </BuyButton>
      </CardBody>
    </StyledCard>
  )
}

export default NftCard