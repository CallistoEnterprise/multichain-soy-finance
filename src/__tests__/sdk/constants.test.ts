import { INIT_CODE_HASH } from '../../sdk/constants'

//import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
//import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
//const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    // it('matches computed bytecode hash', () => {
    //   expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    // })
    //TODO: Replace with real SoyfinancePair.json
    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0x6dc7455e5d9aec56bfab910b5d5ba32e651622de80b3e46a9e471b0c42cce641')
    })
  })
})
