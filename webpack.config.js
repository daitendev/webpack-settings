const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsWebPackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebPackPlugin = require('optimize-css-assets-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        template: './src/index.html',
        filename: './index.html'
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: '[name].[hash].css'
      }
    )
  ],
  optimization: {
    minimizer: [
      new UglifyJsWebPackPlugin(
        {
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        }
      ),
      new OptimizeCssAssetsWebPackPlugin()
    ]
  },
  devtool: 'eval-source-map'
}