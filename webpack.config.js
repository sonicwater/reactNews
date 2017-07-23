var path = require("path");

module.exports = {
  	entry:  path.join(__dirname, '/src/js/main.js'),
	output: {
	    path: path.join(__dirname, '/build'),//打包后的文件存放的地方
	    filename: "bundle.js"//打包后输出文件的文件名
	},
  	module: {
        loaders: [
            { 
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};
