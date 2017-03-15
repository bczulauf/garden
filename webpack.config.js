const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app-client.js'),
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'src'),
            loader: ['babel-loader'],
            query: {
                cacheDirectory: 'babel-cache',
                presets: ['react', 'es2015']
            }
        }]
    },
    debug: true,
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: false,
            sourcemap: true,
            beautify: false,
            dead_code: true
        })
    ]
};