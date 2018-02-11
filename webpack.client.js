const path=require('path');
const merge=require('webpack-merge');
const baseConfig=require('./webpack.base.js');
config = {
	//entry of application
	entry:'./src/client/client.js',

	//tell webpack where to put output file
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname, 'public')
	}

	

};

module.exports=merge(baseConfig,config);