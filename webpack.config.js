const production = process.env.NODE_ENV === 'production';
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');

let plugins = [new HotModuleReplacementPlugin(), new NamedModulesPlugin()];

let entry = ['webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/only-dev-server', './src/ClientApp.jsx'];

let mode = 'development';

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
  entry = './src/ClientApp.jsx';
  mode = 'production';
}

module.exports = {
  plugins,
  context: __dirname,
  entry,
  devtool: production ? undefined : 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  mode,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        query: { compact: false },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: { compact: false },
      },
    ],
  },
};
