import { ChainId } from 'sdk'
import { createStore, Store } from 'redux'
import { updateBlockNumber } from './actions'
import reducer, { ApplicationState } from './reducer'

describe('application reducer', () => {
  let store: Store<ApplicationState>

  beforeEach(() => {
    store = createStore(reducer, {
      blockNumber: {
        [ChainId.Mainnet]: 3,
      },
    })
  })

  describe('updateBlockNumber', () => {
    it('updates block number', () => {
      store.dispatch(updateBlockNumber({ chainId: ChainId.Mainnet, blockNumber: 4 }))
      expect(store.getState().blockNumber[ChainId.Mainnet]).toEqual(4)
    })
    it('no op if late', () => {
      store.dispatch(updateBlockNumber({ chainId: ChainId.Mainnet, blockNumber: 2 }))
      expect(store.getState().blockNumber[ChainId.Mainnet]).toEqual(3)
    })
    it('works with non-set chains', () => {
      store.dispatch(updateBlockNumber({ chainId: ChainId.Testnet, blockNumber: 2 }))
      expect(store.getState().blockNumber).toEqual({
        [ChainId.Mainnet]: 3,
        [ChainId.Testnet]: 2,
      })
    })
  })
})
