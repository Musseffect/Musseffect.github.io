const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
/*https://tproger.ru/translations/webpack-basics/*/
const MinifyPlugin = require("babel-minify-webpack-plugin");
/*const UglifyJSPlugin = require('uglifyjs-webpack-plugin');*/

module.exports = {
  entry: {app: './src/index.js'},
  devtool: 'source-map',//'source-map' for production
  devServer: {
     	contentBase: './dist',
 		hot: true,
 		historyApiFallback: true
  },
  plugins:
  [new MinifyPlugin({mangle:false,evaluate:false}, {exclude:'/node_modules/'}),
 new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('style.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
    }),
  /*new UglifyJSPlugin({
       sourceMap: true
     }),*/
  /*new BundleAnalyzerPlugin({
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
