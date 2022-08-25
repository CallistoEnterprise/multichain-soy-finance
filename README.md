# Multichain SOY Finance UI

> Disclaimer: Before contributing to the codebase, please respect the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model.

## Technical info

-   App is written in React with Typescript.
-   Store and binding solution is [Redux](https://redux.js.org/)
-   Configuration layer is done with [Craco](https://www.npmjs.com/package/@craco/craco)
-   Project is forked from [Pancake swap](https://github.com/pancakeswap/pancake-frontend) (The codebase is currently different, but the similar fork with the original codebase is [here](https://github.com/Yepman0620/pancake-frontend))

## Installation

After git clone run `npm install`.

## Development

-   Run dev server: `npm run start`
-   Install Metamask, create an account and con`nect it to Callisto network.

## Deployment
> All deployments are hosted by Netlify

-   Deployment to **development** server is done with each push to the `development` branch

    domain: https://development--multichain-soy-finance.netlify.app

-   Deployment to **production** server is done with each push to the `main` branch (only via PR or locally `npm run build`)

    domain: https://app.soy.finance

-   Deployment of any other branch, for example **hot-fix-121** is done by each push

    domain: https://**hot-fix-121**--multichain-soy-finance.netlify.app

## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.

## Contracts info
-   All ABIs are stored in `/src/config/abi/`

## Constants
> Please do not use any hard-coded constants directly into the code

-   All configurations are stored in `/src/config/constants/`
-   All token lists are stored in `/src/config/constants/tokenLists`
-   Each chain has a single configuration file f.e. `/src/config/constants/chains/mainnet.ts`, please read [NEWCHAIN.md](./NEWCHAIN.md) if you want to add new chain support.

## Environment variables
> TBD

## Analytics
-   Google Analytics