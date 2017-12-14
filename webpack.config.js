const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

  const options = {
    entry: './src/app.jsx',
    resolve: {
      extensions: ['.js', '.jsx', '*'],
      modules: [
        path.resolve('./src/components/'),
        path.resolve('./node_modules/')
      ]
    },
    output: {
      publicPath: '/',
      path: path.resolve('./dist'),
      filename: 'app.js'
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react', 'react-hmre']
              }
            }
          ],
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                minimize: false,
                url: false,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [] // don't delete or you must create config separately
              }
            },
            'stylus-loader',
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CopyWebpackPlugin([
        { from: './src/index.html' },
      ]),
    ],
    devServer: {
      hot: true,
      inline: true,
      contentBase: path.resolve('./dist'),
      host: '0.0.0.0',
      port: 3001,
      historyApiFallback: true,
      clientLogLevel: 'error',
      stats: { chunks: false },
    }
  };
  return options;
}
