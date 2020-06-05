const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
/*https://tproger.ru/translations/webpack-basics/*/

module.exports = {
  entry: {app: './src/index.js'},
  devtool: 'inline-source-map',//'source-map' for production
  devServer: {
     	contentBase: './dist',
 		  hot: true,
     historyApiFallback: true
  },
  plugins:
  [
	new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('style.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('debug')
    })
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
  watch: false,
  watchOptions: {
  ignored: /node_modules/,
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
          test: /\.tsx?$/,
		      exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.frag?$|\.vert$|\.glsl$/,
          exclude: /node_modules/,
          use: 'raw-loader'
        },
        {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.otf$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:     'fonts/[name].[ext]',
              }

            },
          ],
        },
        {
          test: /\.png?$|\.jpg$|\.gif$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:     'img/[name].[ext]',
              }

            },
          ],
        }
	    ]
	}
};
