const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                },
                compress: true,
                hot: true,
                historyApiFallback: true,
                host: 'localhost',
                port: 8080,
                proxy: {
                    '/ingredients': 'http://localhost:3000',
                    '/recipes': 'http://localhost:3000',
                    '/requestToken': 'http://localhost:3000',
                    '/requestInfo': 'http://localhost:3000',
                }
            },
            resolve: {
                extensions: ['.js', '.jsx'],
            },
        ]
    }
};
