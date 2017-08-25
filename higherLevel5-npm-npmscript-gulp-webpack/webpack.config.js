const path = require('path');
module.exports = {
	entry:"./src/index.js",
	output:{
		filename:"all.js",
		path:path.resolve(__dirname,'./dist/js')
	},
	 module: {
	    rules: [
	      {
		    	test: /\.css$/,
		    	include: path.resolve(__dirname, './src/css'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
		    	// exclude: path.resolve(__dirname, 'node_modules'),  //排除node_modules文件下js，注意需是绝对路径
		    	use: [
		      	{loader: 'style-loader'},//注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
		      	{loader: 'css-loader'}
		      ]
		    },
		    {
		      test: /\.(jpg|png|gif|svg)$/,
		      use: {
		      	loader: 'file-loader?name=asset/[hash].[ext]'
		      }
		    }
	    ]
	  }
}