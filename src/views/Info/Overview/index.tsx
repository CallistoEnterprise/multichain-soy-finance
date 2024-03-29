import React, { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Box, Text, Heading, Card, Skeleton } from 'uikit2'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { format, fromUnixTime } from 'date-fns'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import LineChart from 'views/Info/components/InfoCharts/LineChart'
import TokenTable from 'views/Info/components/InfoTables/TokensTable'
import PoolTable from 'views/Info/components/InfoTables/PoolsTable'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
import BarChart from 'views/Info/components/InfoCharts/BarChart'
//import { loadSubgraphVars }  from 'config/constants/endpoints';
import { renameTokens, renamePool, renameTransactions } from 'views/Info/utils/tokenInfoRename'
import {
  useAllPoolData,
  useAllTokenData,
  useProtocolChartData,
  useProtocolData,
  useProtocolTransactions,
} from 'state/info/hooks'
import TransactionTable from 'views/Info/components/InfoTables/TransactionsTable'
import { tokenLists } from 'state/lists/hooks'
import { CHAINS_CONSTANTS } from 'config/constants/chains'

export const ChartCardsContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1em;

  & > * {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  } ;
`

const Overview: React.FC = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const [liquidityHover, setLiquidityHover] = useState<number | undefined>()
  const [liquidityDateHover, setLiquidityDateHover] = useState<string | undefined>()
  const [volumeHover, setVolumeHover] = useState<number | undefined>()
  const [volumeDateHover, setVolumeDateHover] = useState<string | undefined>()

  const [protocolData] = useProtocolData()
  const [chartData] = useProtocolChartData()
  const [transactions] = renameTransactions(useProtocolTransactions(), 0)

  const currentDate = format(new Date(), 'MMM d, yyyy')

  //loadSubgraphVars(chainId)
  // Getting latest liquidity and volumeUSD to display on top of chart when not hovered
  useEffect(() => {
    if (volumeHover == null && protocolData) {
      setVolumeHover(protocolData.volumeUSD)
    }
  }, [protocolData, volumeHover])
  useEffect(() => {
    if (liquidityHover == null && protocolData) {
      setLiquidityHover(protocolData.liquidityUSD)
    }
  }, [liquidityHover, protocolData])

  const formattedLiquidityData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: fromUnixTime(day.date),
          value: day.liquidityUSD,
        }
      })
    }
    return []
  }, [chartData])

  const formattedVolumeData = useMemo(() => {
    if (chartData) {
      return chartData.map((day) => {
        return {
          time: fromUnixTime(day.date),
          value: day.volumeUSD,
        }
      })
    }
    return []
  }, [chartData])

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

  const allPoolData = useAllPoolData()
  const poolDatas = useMemo(() => {
    return Object.values(allPoolData)
      .map((pool) => renamePool(pool.data))
      .filter((pool) => pool)
  }, [allPoolData])

  const somePoolsAreLoading = useMemo(() => {
    return Object.values(allPoolData).some((pool) => !pool.data)
  }, [allPoolData])

  return (
    <Page>
      <Heading scale="lg" mb="16px" id="info-overview-title">
        {t('Soy.Swap Info & Analytics')}
      </Heading>
      <ChartCardsContainer>
        <Card>
          <Box p={['16px', '16px', '24px']}>
            <Text bold color="secondary" textAlign="center">
              {t('Liquidity')}
            </Text>
            <Text textAlign="end">{liquidityDateHover ?? currentDate}</Text>
            {liquidityHover > 0 ? (
              <Text bold fontSize="24px" textAlign="end">
                ${formatAmount(liquidityHover)}
              </Text>
            ) : (
              <Skeleton marginLeft="77%" width="128px" height="36px" />
            )}

            <Box height="250px">
              <LineChart
                data={formattedLiquidityData}
                setHoverValue={setLiquidityHover}
                setHoverDate={setLiquidityDateHover}
              />
            </Box>
            <Text small color="secondary" textAlign="end">
              {t('date')}
            </Text>
          </Box>
        </Card>
        <Card>
          <Box p={['16px', '16px', '24px']}>
            <Text bold color="secondary" textAlign="center">
              {t('Volume 24H')}
            </Text>
            <Text textAlign="end">{volumeDateHover ?? currentDate}</Text>
            {volumeHover > 0 ? (
              <Text bold fontSize="24px" textAlign="end">
                ${formatAmount(volumeHover)}
              </Text>
            ) : (
              <Skeleton marginLeft="77%" width="128px" height="36px" />
            )}
            <Box height="250px">
              <BarChart data={formattedVolumeData} setHoverValue={setVolumeHover} setHoverDate={setVolumeDateHover} />
            </Box>
            <Text small color="secondary" textAlign="end">
              {t('date')}
            </Text>
          </Box>
        </Card>
      </ChartCardsContainer>
      <Heading scale="lg" mt="40px" mb="16px">
        {t('Top Tokens')}
      </Heading>
      <TokenTable tokenDatas={formattedTokens} />
      <Heading scale="lg" mt="40px" mb="16px">
        {t('Top Pools')}
      </Heading>
      <PoolTable poolDatas={poolDatas} loading={somePoolsAreLoading} />
      <Heading scale="lg" mt="40px" mb="16px">
        {t('Transactions')}
      </Heading>
      <TransactionTable transactions={transactions} />
    </Page>
  )
}

export default Overview
