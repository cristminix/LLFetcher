const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const webpack = require('webpack');

module.exports = {
	plugins: [
		new VueLoaderPlugin(),
		new WebpackShellPluginNext({
			onAfterDone: {
				scripts: ['bash play_and_reload.sh'],
				blocking: true,
				parallel: false
			}
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: true,
		}),
	],
	  resolve: {
		extensions: ['.tsx','.ts', '.js']
	  },
	mode: 'production',
	devtool: 'inline-source-map',
	entry : {
		popup:"./src/popup/popup.ts",
		// content:"./src/content_scripts/content.ts",
		// inject:"./src/content_scripts/inject.ts",
		// create_data_codes:"./src/content_scripts_inject/create_data_codes.js",
        background: "./src/service_workers/background.ts"
	},
	output : {
		filename : "[name].js",
		path : path.resolve(__dirname, "chrome_extension"),
	},
	optimization:{
		// splitChunks:{
		// 	chunks:'all'
		// }
	},
	devServer:{
		static: {directory:path.join(__dirname,'chrome_extension')},
		port:9000,
		devMiddleware: {
			writeToDisk: true
		}
	},
	module:{
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
				  appendTsSuffixTo: [/\.vue$/],
				  transpileOnly: true,
				},
				exclude : /(node_modules)/
			},
			{
				test : /\.js$/,
				exclude:/(node_modules)/,
				use:{
					loader: 'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				}	
			},
			{
				test : /\.css$/,
				use:[
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test:/\.(png|jpg\jpeg)$/,
				use:[
					{loader:'url-loader'}
				]
			}
		]
	}
}