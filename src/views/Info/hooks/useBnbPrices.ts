import { useBlocksFromTimestamps } from 'views/Info/hooks/useBlocksFromTimestamps'
import { getDeltaTimestamps } from 'views/Info/utils/infoQueryHelpers'
import { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import { INFO_CLIENT } from 'config/constants/endpoints'
import { SoyChainId as ChainId } from '@callisto-enterprise/chain-constants'

const chainId = 820 // parseInt(window.localStorage.getItem('soyfinanceChainId') ?? '820')

export interface BnbPrices {
  current: number
  oneDay: number
  twoDay: number
  week: number
}

const CLO_PRICES = gql`
  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {
    current: bundle(id: "1") {
      cloPrice
    }
    oneDay: bundle(id: "1", block: { number: $block24 }) {
      cloPrice
    }
    twoDay: bundle(id: "1", block: { number: $block48 }) {
      cloPrice
    }
    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {
      cloPrice
    }
  }
`

const ETC_PRICES = gql`
  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {
    current: bundle(id: "1") {
      etcPrice
    }
    oneDay: bundle(id: "1", block: { number: $block24 }) {
      etcPrice
    }
    twoDay: bundle(id: "1", block: { number: $block48 }) {
      etcPrice
    }
    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {
      etcPrice
    }
  }
`

interface PricesResponse {
  current: {
    cloPrice: string
  }
  oneDay: {
    cloPrice: string
  }
  twoDay: {
    cloPrice: string
  }
  oneWeek: {
    cloPrice: string
  }
}

interface EtcPricesResponse {
  current: {
    etcPrice: string
  }
  oneDay: {
    etcPrice: string
  }
  twoDay: {
    etcPrice: string
  }
  oneWeek: {
    etcPrice: string
  }
}

const fetchCloPrices = async (
  block24: number,
  block48: number,
  blockWeek: number,
): Promise<{ cloPrices: BnbPrices | undefined; error: boolean }> => {
  try {
    const data = await request<PricesResponse>(INFO_CLIENT, CLO_PRICES, {
      block24,
      block48,
      blockWeek,
    })
    return {
      error: false,
      cloPrices: {
        current: parseFloat(data.current?.cloPrice ?? '0'),
        oneDay: parseFloat(data.oneDay?.cloPrice ?? '0'),
        twoDay: parseFloat(data.twoDay?.cloPrice ?? '0'),
        week: parseFloat(data.oneWeek?.cloPrice ?? '0'),
      },
    }
  } catch (error) {
    console.error('Failed to fetch CLO prices', error)
    return {
      error: true,
      cloPrices: undefined,
    }
  }
}

const fetchEtcPrices = async (
  block24: number,
  block48: number,
  blockWeek: number,
): Promise<{ cloPrices: BnbPrices | undefined; error: boolean }> => {
  try {
    const data = await request<EtcPricesResponse>(INFO_CLIENT, ETC_PRICES, {
      block24,
      block48,
      blockWeek,
    })
    return {
      error: false,
      cloPrices: {
        current: parseFloat(data.current?.etcPrice ?? '0'),
        oneDay: parseFloat(data.oneDay?.etcPrice ?? '0'),
        twoDay: parseFloat(data.twoDay?.etcPrice ?? '0'),
        week: parseFloat(data.oneWeek?.etcPrice ?? '0'),
      },
    }
  } catch (error) {
    console.error('Failed to fetch ETC prices', error)
    return {
      error: true,
      cloPrices: undefined,
    }
  }
}

/**
 * Returns BNB prices at current, 24h, 48h, and 7d intervals
 */
export const useBnbPrices = (): BnbPrices | undefined => {
  const [prices, setPrices] = useState<BnbPrices | undefined>()
  const [error, setError] = useState(false)

  const [t24, t48, tWeek] = getDeltaTimestamps()
  const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek])

  useEffect(() => {
    const fetch = async () => {
      const [block24, block48, blockWeek] = blocks
      let fetchPrices
      if (chainId === ChainId.Mainnet) {
        fetchPrices = fetchCloPrices
      } else if (chainId === ChainId.ETC) {
        fetchPrices = fetchEtcPrices
      }

      const { cloPrices, error: fetchError } = await fetchPrices(block24.number, block48.number, blockWeek.number)

      if (fetchError) {
        setError(true)
      } else {
        setPrices(cloPrices)
      }
    }
    if (!prices && !error && blocks && !blockError) {
      fetch()
    }
  }, [error, prices, blocks, blockError])

  return prices
}
