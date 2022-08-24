export enum SupportedChain {
    Mainnet = 820,
    Testnet = 20729,
    BTT = 199,
    BSC = 56,
    ETC = 61,
}

export interface ChainConstants {
    general: {
        chainId: SupportedChain
        hexChainId: string
        chainName: string
        image?: string,
        nativeSymbol: string
        wrappedNativeSymbol: string
        nativeAddress: string
    },
    rpcs: string[],
    explorer: {
        name: string
        url: string
    }
    tokenLists?: any
}
