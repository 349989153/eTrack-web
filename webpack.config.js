/**
 * Created by luyang on 2017/6/2.
 */
var path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: './src/eTrack/index.js',
    output: {
        filename: 'eTrack.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'eTrack',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        port: 9001,
        compress: true
    }
};