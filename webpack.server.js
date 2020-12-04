const path = require('path');
const nodeExternals = require('webpack-node-externals');
const cwd = process.cwd();

module.exports = {
  name: 'server',
  mode: 'development',
  entry: [path.join(cwd,'server','index.js')],
  target: 'node',
  output: {
    path: path.join(cwd,'dist'),
    filename: 'server.js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}