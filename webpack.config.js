module.exports = {
	entry: './test.js',
	output: {
		path: '.',
    	filename: 'bundle.js'
	},
	resolve: {
        extensions: ['.js', '.css']
    },
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	}
};