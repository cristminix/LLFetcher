const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
	plugins: [
		new VueLoaderPlugin(),
		
	  ],
	  resolve: {
		alias: {
		  // this isn't technically needed, since the default `vue` entry for bundlers
		  // is a simple `export * from '@vue/runtime-dom`. However having this
		  // extra re-export somehow causes webpack to always invalidate the module
		  // on the first HMR update and causes the page to reload.
		  vue: "@vue/runtime-dom"
		}
	  },
    mode: 'production',
	// moduleResolution : 'node',
	entry : {
		popup:"./src/popup/popup.js",
		content:"./src/content_scripts/content.ts",
		inject:"./src/content_scripts/inject.ts",
		function:"./src/content_scripts/function.ts",
		create_data_codes:"./src/content_scripts_inject/create_data_codes.js",
		// getM3rec:"./src/content_scripts_inject/getM3rec.js",
        background: "./src/service_workers/background.ts",

	},
	output : {
		filename : "[name].js",
		path : path.resolve(__dirname, "chrome_extension")
	},
	// optimization:{
	// 	splitChunks:{
	// 		chunks:'all'
	// 	}
	// },
	devServer:{
		static: {directory:path.join(__dirname,'dist')},
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
			// {
			// 	test : /\.ts$/,
			// 	use : 'ts-loader',
            //     // include : [path.resolve(__dirname,'src')]
				
			// },
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