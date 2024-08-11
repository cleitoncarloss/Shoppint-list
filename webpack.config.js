const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'raw-loader' }],
  }
}
