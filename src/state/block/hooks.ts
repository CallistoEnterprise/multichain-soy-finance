import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { getRpcProvider } from 'utils/providers'
import { setBlock } from '.'
import { State } from '../types'

export const useGetRpcProvider = () => {
  const [provider, setProvider] = useState(null)

  useEffect(() => {
    const init = async () => {
      const temp = await getRpcProvider()
      setProvider(temp)
    }
    init()
  }, [])

  return provider;
}
export const usePollBlockNumber = () => {
  const dispatch = useAppDispatch()
  const simpleRpcProvider = useGetRpcProvider()

  useEffect(() => {
    const interval = setInterval(async () => {
      const blockNumber = await simpleRpcProvider?.getBlockNumber()
      dispatch(setBlock(blockNumber))
    }, 6000)

    return () => clearInterval(interval)
  }, [dispatch, simpleRpcProvider])
}

export const useBlock = () => {
  return useSelector((state: State) => state.block)
}

export const useInitialBlock = () => {
  return useSelector((state: State) => state.block.initialBlock)
}
