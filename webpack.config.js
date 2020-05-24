const webpack = require("webpack");
const path = require("path");

const config = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.join(__dirname, "./dist/"),
		filename: "bundle.js"
	},
	context: path.join(__dirname, "./src/"),
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
		contentBase: './src',
		hot: true,
		compress: true,
		port: 3001
	},
};

module.exports = config;