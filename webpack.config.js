const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV, // "development" or "production"
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        //Andrew: Not sure how to load in css files but trying this way since it seems the former version only processed scss files...
<<<<<<< HEAD
        test: /\.s[ac]ss$/i,
        // test: /\.css$/i,

=======
        // test: /\.css$/i,
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
>>>>>>> fafb524ec735e7b94907d7719a2379dd20ddf1a1
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new Dotenv(),
  ],
  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug',
      },
    },
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
