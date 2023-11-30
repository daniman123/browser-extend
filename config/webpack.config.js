const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		popup: "./src/popup/popup.jsx",
		content: "./src/content/contentScript/content.js",
	},
	output: {
		path: path.resolve(__dirname, "..", "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "..", "src"),
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/popup/popup.html",
			filename: "popup.html",
		}),
		new CopyPlugin({
			patterns: [{ from: "public" }],
		}),
	],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
};
