const fs = require('fs');
const path = require('path');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const publicPath = paths.servedPath;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const nodeModules = {};
fs.readdirSync(paths.appNodeModules)
	.filter(x => {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(mod => {
		nodeModules[mod] = `commonjs ${mod}`;
	});

module.exports = {
	bail: true,
	devtool: shouldUseSourceMap ? 'source-map' : false,
	entry: [resolveApp('server/index.js')],
	context: __dirname,
	node: {
		__filename: true,
		__dirname: true
	},
	target: 'node',
	output: {
		filename: 'server.bundle.js',
		path: paths.appBuild,
		publicPath
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				use: 'json-loader'
			}
		]
	},
	externals: nodeModules,
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				comparisons: false,
			},
			output: {
				comments: false,
				ascii_only: true
			},
			sourceMap: shouldUseSourceMap
		}),
	]
};
