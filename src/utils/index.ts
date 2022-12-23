import { useEffect, useState } from 'react'
import Blocks from 'eth-block-timestamp'
import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHERS } from 'sdk'
import { DEFAULT_CHAIN_ID } from 'config'
import SoyRouterABI from '../config/abi/soyRouter.json'
import { ROUTER_ADDRESS } from '../config/constants'
import { CHAINS_CONSTANTS } from 'config/constants/chains'
import { TokenAddressMap } from '../state/lists/hooks'

const ethereumInfura = 'https://mainnet.infura.io/v3/f2dcf6879de04faca05b3a01ccc2abd2'

const blocks = new Blocks(ethereumInfura)

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function getCallistoExpLink(
  data: string | number,
  type: 'transaction' | 'token' | 'address' | 'block' | 'countdown',
  chainId: ChainId = ChainId.MAINNET,
): string {
  switch (type) {
    case 'transaction': {
      return `${CHAINS_CONSTANTS[chainId].explorer.url}/tx/${data}/token-transfers`
    }
    case 'token': {
      return `${CHAINS_CONSTANTS[chainId].explorer.url}/address/${data}/transactions`
    }
    case 'block': {
      return `${CHAINS_CONSTANTS[chainId].explorer.url}/${data}`
    }
    case 'countdown': {
      return `${CHAINS_CONSTANTS[chainId].explorer.url}/${data}`
    }
    default: {
      return `${CHAINS_CONSTANTS[chainId].explorer.url}/address/${data}/transactions`
    }
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(5000))
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000)),
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library?.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is optional
export function getRouterContract(chainId: number, library: Web3Provider, account?: string): Contract {
  return getContract(ROUTER_ADDRESS[chainId ?? DEFAULT_CHAIN_ID], SoyRouterABI, library, account)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, chainId: number, currency?: Currency): boolean {
  if (currency === ETHERS[chainId]) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}

export const useBlockLatestTimestamp = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const getTimeStamp = async () => {
      const { timestamp } = await blocks.getDate('latest')
      // const d = new Date()
      // const timestamp = parseInt((d.getTime() / 1000).toString())
      setTime(timestamp)
    }
    getTimeStamp()
  }, [])
  return time
}
