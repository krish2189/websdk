const path = require('path');

module.exports = {
  entry: './sdk.js',
  output: {
    filename: 'sdk.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MySDK',
    libraryTarget: 'umd', // Universal Module Definition
  },
  mode: 'production', // For minified production code
};
