# Multichain SOY Finance UI

> Disclaimer: Before contributing to the codebase, please respect the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model.

## Technical info

- App is written in React with Typescript.
- Store and binding solution is [Redux](https://redux.js.org/)
- Configuration layer is done with [Craco](https://www.npmjs.com/package/@craco/craco)
- Project is forked from [Pancake swap](https://github.com/pancakeswap/pancake-frontend) (The codebase is currently different, but the similar fork with the original codebase is [here](https://github.com/Yepman0620/pancake-frontend))

## Installation

After git clone run `npm install`.

## Development

- Run dev server: `npm run start`
- Install Metamask, create an account and con`nect it to Callisto network.

## Deployment

> All deployments are hosted by Netlify

- Deployment to **development** server is done with each push to the `development` branch

  domain: https://development--multichain-soy-finance.netlify.app

- Deployment to **production** server is done with each push to the `main` branch (only via PR or locally `npm run build`)

  domain: https://app.soy.finance

- Deployment of any other branch, for example **hot-fix-121** is done by each push

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

- All ABIs are stored in `/src/config/abi/`

## Constants

> Please do not use any hard-coded constants directly into the code

- All configurations are stored in `/src/config/constants/`
- All token lists are stored in `/src/config/constants/tokenLists`
- Each chain has a single configuration file f.e. `/src/config/constants/chains/mainnet.ts`, please read [NEWCHAIN.md](./NEWCHAIN.md) if you want to add new chain support.

## Environment variables

> TBD

## Analytics

- Google Analytics

## Dependencies

Here is a list of the dependencies in this package.json file, along with a brief explanation of each:

- **@callisto-enterprise/chain-constants**: This package provides basic chain config for Callisto Enterprise.
- **@reduxjs/toolkit**: This package provides a toolkit for simplifying the creation of Redux applications. Redux is a popular state management library for JavaScript.
- **@types/multicodec**: This package provides TypeScript definitions for the multicodec library, which provides a way to encode and decode data using various multiformats.
- **@types/node**: This package provides TypeScript definitions for Node.js, which allows TypeScript to understand the types and APIs provided by Node.js.
- **@types/qs**: This package provides TypeScript definitions for the qs library, which provides a way to parse and stringify query strings in JavaScript.
- **@types/react**: This package provides TypeScript definitions for React, which allows TypeScript to understand the types and APIs provided by the React library.
- **@types/react-dom**: This package provides TypeScript definitions for React DOM, which allows TypeScript to understand the types and APIs provided by the React DOM library.
- **@types/react-router-dom**: This package provides TypeScript definitions for React Router DOM, which allows TypeScript to understand the types and APIs provided by the React Router DOM library.
- **@types/react-window**: This package provides TypeScript definitions for React Window, which allows TypeScript to understand the types and APIs provided by the React Window library.
- **@types/styled-components**: This package provides TypeScript definitions for styled-components, which allows TypeScript to understand the types and APIs provided by the styled-components library.
- **@uauth/js**: This package provides an interface for authenticating users with the uAuth platform.
- **@uauth/web3-react**: This package provides an integration between the uAuth platform and the web3-react library.
- **@uniswap/token-lists**: This package provides lists of tokens for the Uniswap platform.
- **@web3-react/core**: This package provides an interface for connecting to Ethereum-based networks in a React application.
- **@web3-react/injected-connector**: This package provides an injected connector for interfacing with Ethereum-based networks in a React application.
- **@web3-react/walletconnect-connector**: This package provides a WalletConnect connector for interfacing with Ethereum-based networks in a React application.
- **assert**: This package provides a way to perform simple unit tests in JavaScript.
- **bignumber.js**: This package provides a way to perform arbitrary-precision decimal and non-decimal arithmetic in JavaScript.
- **browserify-zlib**: This package provides a way to compress and decompress data in JavaScript using the zlib library.
- **buffer**: This package provides a way to manipulate binary data in JavaScript.
- **canvas-confetti**: This package provides a way to generate confetti on an HTML canvas element.
- **cids**: This package provides an implementation of the Content Identifier (CID) data model for JavaScript.
- **date-fns**: This package provides a collection of functions for working with dates and times in JavaScript.
- **easymde**: This package provides a simple Markdown editor for JavaScript.
- **eth-block-timestamp**: This package provides a way to get the timestamp of an Ethereum block.
- **ethers**: This package provides an interface for interacting with the Ethereum blockchain in JavaScript.
- **graphql**: This package provides an implementation of the GraphQL query language in JavaScript.
- **graphql-request**: This package provides a simple way to make GraphQL requests in JavaScript.
- **js-cookie**: This package provides a simple way to work with cookies in JavaScript.
- **lightweight-charts**: This package provides a collection of lightweight and customizable charts for JavaScript.
- **lodash**: This package provides a collection of utility functions for working with arrays, objects, and strings in JavaScript.
- **multicodec**: This package provides a way to encode and decode data using various multiformats in JavaScript.
- **multihashes**: This package provides a way to work with multihash values in JavaScript.
- **numeral**: This package provides a way to format numbers in JavaScript.
- **qs**: This package provides a way to parse and stringify query strings in JavaScript.
- **react**: This package provides the React library, which is a popular library for building user interfaces in JavaScript.
- **react-countup**: This package provides a way to create count-up animations in React applications.
- **react-datepicker**: This package provides a customizable date picker component for React applications.
- **react-dom**: This package provides the React DOM library, which is a companion library to React for working with the DOM in browser-based applications.
- **react-ga**: This package provides an integration with Google Analytics for React applications.
- **react-helmet-async**: This package provides a way to manage the document head in a React application.
- **react-markdown**: This package provides a component for rendering Markdown in a React application.
- **react-redux**: This package provides an integration between the React and Redux libraries. Redux is a popular state management library for JavaScript.
- **react-router-dom**: This package provides a way to implement client-side routing in a React application.
- **react-transition-group**: This package provides components for implementing basic CSS transitions and animations in a React application.
- **react-window**: This package provides components for efficiently rendering large lists and tabular data in a React application.
- **recharts**: This package provides a collection of composable React components for building charts.
- **redux-localstorage-simple**: This package provides a simple way to persist the state of a Redux store to local storage.
- **remark-gfm**: This package provides a plugin for the remark Markdown parser that adds support for GitHub-flavored Markdown (GFM) syntax.
- **split-grid**: This package provides a grid layout component for React applications.
- **stream-browserify**: This package provides an implementation of the Node.js stream API for the browser.
- **styled-components**: This package provides a way to use component-based styling in a React application.
- **swiper**: This package provides a customizable carousel component for React applications.
- **typescript**: This package provides the TypeScript programming language, which is a typed superset of JavaScript that compiles to plain JavaScript.
- **web3**: This package provides an interface for interacting with the Ethereum blockchain in JavaScript.
- **web3-core-helpers**: This package provides helper functions for working with the web3 library.
