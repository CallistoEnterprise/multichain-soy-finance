import React from 'react'
import { Heading, Text, Flex, ChevronRightIcon } from '@callisto-enterprise/soy-uikit2'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import CollectibleCard from './CollectibleCard'

const CollectibleList = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(5, 1fr);
  }
`

const Collectibles = () => {
  const { t } = useTranslation()

  return (
    <>
      <Heading as="h4" scale="md" mb="8px">
        {t('Polysafemoon Collectibles')}
      </Heading>
      <Text as="p">
        {t('Polysafemoon Collectibles are special ERC-721 NFTs that can be used on the Polysafemoon platform.')}
      </Text>
      <Text as="p">
        {t('NFTs in this user’s wallet that aren’t approved Polysafemoon Collectibles won’t be shown here.')}
      </Text>
      <Flex alignItems="center" justifyContent="flex-end">
        <Link to="/collectibles">{t('See all approved Polysafemoon Collectibles')}</Link>
        <ChevronRightIcon />
      </Flex>
    </>
  )
}

export default Collectibles
