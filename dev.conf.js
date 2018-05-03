const path = require('path');
const dateFormat = require('dateFormat');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
		app: path.resolve(__dirname, 'src/js/main')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: dateFormat(new Date(), 'yyyymmddHHMMss') + 'bundle-[hash:8].js'
	},
	module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            }, {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js|jsx$/,
                include: [path.resolve(__dirname, 'src/js')],
                use: [{
                    loader: 'babel-loader',
                }]
            },
        ]
    },
	plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'head'
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])
    ]
}