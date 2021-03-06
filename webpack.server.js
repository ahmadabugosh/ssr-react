const path=require('path');
const merge=require('webpack-merge');
const baseConfig=require('./webpack.base.js');
const webpackNodeExternals=require('webpack-node-externals');



const config = {

	//Bundle for Node not browser
	target:'node',

	//entry of application
	entry:'./src/index.js',

	//tell webpack where to put output file
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals:[webpackNodeExternals()]

};

module.exports=merge(baseConfig,config);