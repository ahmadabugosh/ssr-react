const path=require('path');
module.exports = {

	//Bundle for Node not browser
	target:'node',

	//entry of application
	entry:'./src/index.js',

	//tell webpack where to put output file
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	//tell webpack to run babel on every file
	module:{

		rules :[{
				test:/\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options:{
					presets:[
					'react',
					'stage-0',
					['env', {targets:{browsers:['last 2 versions']}}]

					]
				}

		}
		]
	}

};