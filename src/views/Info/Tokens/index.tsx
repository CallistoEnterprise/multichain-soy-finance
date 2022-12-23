import React, { useMemo, useEffect } from 'react'
// import { Text, Heading, Card } from '@callisto-enterprise/soy-uikit2'
import { Heading } from '@callisto-enterprise/soy-uikit2'
import styled from 'styled-components'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import Page from 'components/Layout/Page'
import TokenTable from 'views/Info/components/InfoTables/TokensTable'
import { useAllTokenData } from 'state/info/hooks' // useTokenDatas
// import { useWatchlistTokens } from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'
import TopTokenMovers from 'views/Info/components/TopTokenMovers'
import { renameTokens } from 'views/Info/utils/tokenInfoRename'
import { tokenLists } from 'state/lists/hooks'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

const ResponsiveGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  margin: 8px 0;
  align-items: center;
`
const TokensOverview: React.FC = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allTokens = useAllTokenData()

  const formattedTokens1 = useMemo(() => {
    return Object.values(allTokens)
      .map((token) => renameTokens(token.data))
      .filter((token) => token)
  }, [allTokens])

  const isExist = (address) => {
    const oneItem = tokenLists[chainId]?.tokens.find((token) => token.address.toLowerCase() === address)
    return oneItem ? true : false
  }

  const formattedTokens = formattedTokens1
    ? formattedTokens1.filter(
        (token) => isExist(token.address) || token.symbol === CHAINS_CONSTANTS[chainId].general.nativeSymbol,
      )
    : []
  // const [savedTokens] = useWatchlistTokens()
  // const watchListTokens = useTokenDatas(savedTokens)

  return (
    <Page>
      {/* <Heading scale="lg" mb="16px">
        {t('Your Watchlist')}
      </Heading> */}
      {/* {savedTokens.length > 0 ? (
        <TokenTable tokenDatas={watchListTokens} />
      ) : ( */}
      {/* <Card>
          <Text py="16px" px="24px">
            {t('Saved tokens will appear here')}
          </Text>
        </Card> */}
      {/* )} */}
      <ResponsiveGrid>
        <TopTokenMovers />
      </ResponsiveGrid>
      <Heading scale="lg" mt="40px" mb="16px" id="info-tokens-title">
        {t('All Tokens')}
      </Heading>
      <TokenTable tokenDatas={formattedTokens} />
    </Page>
  )
}

export default TokensOverview
