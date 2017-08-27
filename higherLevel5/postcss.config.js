module.exports = {
    plugins: [
    	require('precss')
        require('postcss-import')
        require('autoprefixer')
    ]
}

  /*	new webpack.LoaderOptionsPlugin({
		  		options:{
		  			  	postcss: function(webpack) {
		  				  return [
		  				    postcssImport({
		  				      addDependencyTo: webpack
		  				    }),
		  				    autoprefixer
		  				  ]
		  				}
		  		}
		  	}),*/