const path = require("path");

module.exports = {
    mode: 'production',
	// moduleResolution : 'node',
	entry : {
		popup:"./src/popup/popup.ts",
		content:"./src/content_scripts/content.ts",
		inject:"./src/content_scripts/inject.ts",
		function:"./src/content_scripts/function.ts",
		create_data_codes:"./src/content_scripts_inject/create_data_codes.js",
		// getM3rec:"./src/content_scripts_inject/getM3rec.js",
        background: "./src/service_workers/background.ts",

	},
	output : {
		filename : "[name].js",
		path : path.resolve(__dirname, "dist")
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
				test : /\.ts$/,
				use : 'ts-loader',
                // include : [path.resolve(__dirname,'src')]
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