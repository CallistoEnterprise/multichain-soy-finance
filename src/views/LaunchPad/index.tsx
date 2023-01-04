import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading } from '@callisto-enterprise/soy-uikit2'
import history from 'routerHistory'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import NftList from './components/PadList'
import { ChainId } from 'sdk'

const StyledHero = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const LaunchPad = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  useEffect(() => {
    const init = () => {
      history.push('/')
    }
    if (chainId !== ChainId.Mainnet) {
      init()
    }
  }, [chainId])

  return (
    <Page>
      <StyledHero>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('Soy Launchpad')}
        </Heading>
      </StyledHero>
      <NftList />
    </Page>
  )
}

export default LaunchPad
