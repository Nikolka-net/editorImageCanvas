const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dist = '/MAMP/htdocs/editorImageCanvas/js';

module.exports = {
	mode: 'development', // режим сборки проекта
	// mode: 'production',
	// entry: [
	// 	'regenerator-runtime/runtime',
	// 	'./js/script.js'
	// ],
	entry: { // точка входа
		app: './js/script.js'
	},
	output: { // точка выхода
		path: path.resolve(__dirname, dist),
		filename: 'main.js'
	},
	devServer: { // если проект не собрался, выходит ошибка
		overlay: true,
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: '/node_modules/', // исключение, чтобы ускорить компиляцию
			},

		],

	},
	devtool: 'inline-source-map'

};
