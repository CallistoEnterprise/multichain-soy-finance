import { getUnixTime } from 'date-fns'
import { gql } from 'graphql-request'
import { getBlocksFromTimestamps } from 'views/Info/hooks/useBlocksFromTimestamps'
import { multiQuery } from 'views/Info/utils/infoQueryHelpers'
import { PriceChartEntry } from 'state/info/types'
import { INFO_CLIENT } from 'config/constants/endpoints'
import { coinPrice, derivedCOIN } from 'config/constants/info'

import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'

const chainId = 820 //parseInt(window.localStorage.getItem('soyfinanceChainId') ?? '820')

const getPriceSubqueries = (tokenAddress: string, blocks: any) =>
  blocks.map(
    (block: any) => `
      t${block.timestamp}:token(id:"${tokenAddress}", block: { number: ${block.number} }) { 
        ${derivedCOIN}
      }
      b${block.timestamp}: bundle(id:"1", block: { number: ${block.number} }) { 
        ${coinPrice}
      }
    `,
  )

/**
 * Price data for token and clo based on block number
 */
const priceQueryConstructor = (subqueries: string[]) => {
  return gql`
    query tokenPriceData {
      ${subqueries}
    }
  `
}

const fetchTokenPriceData = async (
  address: string,
  interval: number,
  startTimestamp: number,
): Promise<{
  data?: PriceChartEntry[]
  error: boolean
}> => {
  // Construct timestamps to query against
  const endTimestamp = getUnixTime(new Date())
  const timestamps = []
  let time = startTimestamp
  while (time <= endTimestamp) {
    timestamps.push(time)
    time += interval
  }
  try {
    const blocks = await getBlocksFromTimestamps(timestamps, 'asc', 500)
    if (!blocks || blocks.length === 0) {
      console.error('Error fetching blocks for timestamps', timestamps)
      return {
        error: false,
      }
    }

    const prices: any | undefined = await multiQuery(
      priceQueryConstructor,
      getPriceSubqueries(address, blocks),
      INFO_CLIENT,
      200,
    )

    if (!prices) {
      console.error('Price data failed to load')
      return {
        error: false,
      }
    }

    // format token CLO price results
    const tokenPrices: {
      timestamp: string
      derivedCOIN: number
      priceUSD: number
    }[] = []

    // Get Token prices in CLO
    Object.keys(prices).forEach((priceKey) => {
      const timestamp = priceKey.split('t')[1]
      // if its CLO price e.g. `b123` split('t')[1] will be undefined and skip CLO price entry

      if (timestamp) {
        if (chainId === ChainId.Mainnet) {
          tokenPrices.push({
            timestamp,
            derivedCOIN: prices[priceKey]?.derivedCLO ? parseFloat(prices[priceKey].derivedCLO) : 0,
            priceUSD: 0,
          })
        } else if (chainId === ChainId.ETC) {
          tokenPrices.push({
            timestamp,
            derivedCOIN: prices[priceKey]?.derivedETC ? parseFloat(prices[priceKey].derivedETC) : 0,
            priceUSD: 0,
          })
        }
      }
    })

    // Go through CLO USD prices and calculate Token price based on it
    Object.keys(prices).forEach((priceKey) => {
      const timestamp = priceKey.split('b')[1]
      // if its Token price e.g. `t123` split('b')[1] will be undefined and skip Token price entry
      if (timestamp) {
        const tokenPriceIndex = tokenPrices.findIndex((tokenPrice) => tokenPrice.timestamp === timestamp)
        if (tokenPriceIndex >= 0) {
          const { derivedCOIN } = tokenPrices[tokenPriceIndex]
          if (chainId === ChainId.Mainnet) {
            tokenPrices[tokenPriceIndex].priceUSD = parseFloat(prices[priceKey]?.cloPrice ?? 0) * derivedCOIN
          } else if (chainId === ChainId.ETC) {
            tokenPrices[tokenPriceIndex].priceUSD = parseFloat(prices[priceKey]?.etcPrice ?? 0) * derivedCOIN
          }
        }
      }
    })

    // graphql-request does not guarantee same ordering of batched requests subqueries, hence sorting by timestamp from oldest to newest
    tokenPrices.sort((a, b) => parseInt(a.timestamp, 10) - parseInt(b.timestamp, 10))

    const formattedHistory = []

    // for each timestamp, construct the open and close price
    for (let i = 0; i < tokenPrices.length - 1; i++) {
      formattedHistory.push({
        time: parseFloat(tokenPrices[i].timestamp),
        open: tokenPrices[i].priceUSD,
        close: tokenPrices[i + 1].priceUSD,
        high: tokenPrices[i + 1].priceUSD,
        low: tokenPrices[i].priceUSD,
      })
    }

    return { data: formattedHistory, error: false }
  } catch (error) {
    console.error(`Failed to fetch price data for token ${address}`, error)
    return {
      error: true,
    }
  }
}

export default fetchTokenPriceData
