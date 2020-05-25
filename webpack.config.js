const webpack = require("webpack");
const path = require("path");

const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	context: __dirname,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './',
		hot: true,
		compress: true,
		port: 3001
	},
};

module.exports = config;