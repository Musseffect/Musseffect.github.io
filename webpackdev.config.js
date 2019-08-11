const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
/*https://tproger.ru/translations/webpack-basics/*/

module.exports = {
  entry: {app: './src/index.js'},
  devtool: 'inline-source-map',//'source-map' for production
  plugins:
  [
	new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('style.css')
  /*,
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
    })*/
  /*,
  new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })*/
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
	    rules:[
		    {
		      test: /\.(js|jsx)$/,
		      exclude: /node_modules/,
		      use:{
		        loader: "babel-loader"
		      }
		    },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
	    ]
	}
};
