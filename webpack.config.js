const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
	plugins: [
		new VueLoaderPlugin(),
		
	  ],
	  resolve: {
		extensions: [',tsx','.ts', '.js']
	  },
    mode: 'development',
	entry : {
		popup:"./src/popup/popup.ts",
		// content:"./src/content_scripts/content.ts",
		// inject:"./src/content_scripts/inject.ts",
		// create_data_codes:"./src/content_scripts_inject/create_data_codes.js",
        // background: "./src/service_workers/background.ts",

	},
	output : {
		filename : "[name].js",
		path : path.resolve(__dirname, "chrome_extension"),
		// publicPath : 'auto'
	},
	// optimization:{
	// 	splitChunks:{
	// 		chunks:'all'
	// 	}
	// },
	devServer:{
		static: {directory:path.join(__dirname,'chrome_extension')},
		port:9000
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
				exclude : /node_modules/
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