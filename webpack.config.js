const path = require('path');

module.exports = {
<<<<<<< HEAD
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
=======
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
>>>>>>> 392ba35daddea0268143f72b48bcea86e6860e21
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader',]
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/client'),
      publicPath: '/',
    },
    compress: true,
    hot: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      // '/': 'http://localhost:3000'
      // secure: false,
      // changeOrigin: false,

    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
