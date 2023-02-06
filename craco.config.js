const webpack = require('webpack')

module.exports = {
  webpack: {
    alias: {
      stream: 'stream-browserify',
      https: 'agent-base',
    },
    configure: {
      resolve: {
        fallback: {
          process: require.resolve('process/browser'),
          zlib: require.resolve('browserify-zlib'),
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util'),
          buffer: require.resolve('buffer'),
          asset: require.resolve('assert'),
          crypto: require.resolve('crypto-browserify'),
          http: false,
          // https: false,
          url: false,
          os: false,
          // http: require.resolve("stream-http"),
          https: require.resolve('https-browserify'),
          // url: require.resolve("url/"),
          // os: require.resolve("os-browserify/browser"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        }),
      ],
    },
  },
}
