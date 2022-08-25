# How to add support for new chain

## Preparation
-   create a new branch from `development` branch with name of the new chain f.e. `bttchain`
-   keep updated this branch with development branch until the implementation is finished

## Configuration
-   create a new specific token list in `/src/config/constants/tokenLists/` (copy structure from `tokenlist.json`)
-   create a new configuration file `/src/config/constants/chains/mainnet` (copy structure from `mainnet.ts`)
-   add a new item into list of networks in `/src/config/constants/networks.ts` (link all values into the main configuration of chain)
    <- `this step will be removed in the future`