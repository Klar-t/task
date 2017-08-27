const path = require('path');
const webpack=require('webpack');
const LoaderOptionsPlugin=require('webpack-loader-options-merge');
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:"./src/index.js",
	output:{
		filename:"js/index.js",
		path:path.resolve(__dirname,'./dist')
	},
	plugins:[
	 	new webpack.ProvidePlugin({
                $: 'jquery'
            }),
	    new ExtractTextPlugin({
                filename:"css/index.css",
                disable: false,
                allChunks: true
            }),
	    new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
	      filename: './html/index.html', // 生成的html存放路径，相对于path
	      template: './index.html', // html模板路径
	      inject: 'body', // js插入的位置，true/'head'/'body'/false
	      hash: false, // 为静态资源生成hash值
	      minify: { // 压缩HTML文件
	        removeComments: true, // 移除HTML中的注释
	        collapseWhitespace: false // 删除空白符与换行符
	      }
	    }),


	  ],
	module: {
	    rules: [
	      	{
		    	test: /\.css$/,
		    	exclude: path.resolve(__dirname, './node_modules'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
		    	// exclude: path.resolve(__dirname, 'node_modules'),  //排除node_modules文件下js，注意需是绝对路径
		        use: ExtractTextPlugin.extract({
		                 fallback: "style-loader",
		                 use: [
		                     {
		                        loader: "css-loader"
		                     }

		                     ]
		                 })

		    },
		    {
		    	test: /\.html$/,
        		use: [ 'html-loader?attrs=img:src']
		    },
		    {
		      test: /\.(jpg|png|gif|svg)$/,
		      use: {
		      	loader: 'file-loader?name=[hash].[ext]&publicPath=../&outputPath=images/'
		      }
		    },
		    {
		        // 文件加载器，处理文件静态资源
		        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		        loader: 'file-loader?name=[name].[ext]&publicPath=../&outputPath=css/fonts/'
		      }

	    ]
	}
	
}