import React from 'react'
import styled from 'styled-components'
import { Flex } from '@soy-libs/uikit2'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import Footer from 'components/Menu/Footer'
import SubNav from 'components/Menu/SubNav'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: calc(100vh - 64px);

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const { chainId } = useActiveWeb3React()
  return (
    <StyledPage {...props}>
      <SubNav />
      {children}
      <Flex flexGrow={1} />
      {chainId === 820 && <Footer />}
    </StyledPage>
  )
}

export default Page
