const path = require('path');

module.exports = {
  // Entry point: where Webpack starts bundling
  entry: './src/sdk.js',  // Main file of your SDK

  // Output settings: where and how to output the bundle
  output: {
    filename: 'sdk.bundle.js',  // The name of the output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory for the bundle
    library: 'MySDK',  // The name of the global variable in the browser
    libraryTarget: 'umd',  // Universal Module Definition (UMD)
    globalObject: 'this',  // Ensures compatibility with both browsers and Node.js environments
  },

  // Mode: production to optimize the output (minify, etc.)
  mode: 'production', 

  // Module rules: how Webpack processes files
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply the following rules to JavaScript files
        exclude: /node_modules/,  // Ignore node_modules
        use: {
          loader: 'babel-loader',  // Use Babel to transpile ES6+ into ES5
          options: {
            presets: ['@babel/preset-env'],  // Convert modern JS (ES6+) to older JS (ES5)
          },
        },
      },
    ],
  },
};
