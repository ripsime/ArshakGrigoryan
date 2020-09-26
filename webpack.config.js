const webpack = require("webpack");
const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	entry: ["webpack-hot-middleware/client",  "./src/index.jsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
		filename: "bundle.js",
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development"),
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		extensions: ['.jsx','.js'],
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: ["babel-loader"],
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
};
