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
            },
            {
                test: /css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader',]
            },
        ],
    }, 
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'client'),
          publicPath: '/',
        },
        compress: true,
        hot: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 8080,
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            secure: false,
            changeOrigin: false,
          }
        }
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
};
