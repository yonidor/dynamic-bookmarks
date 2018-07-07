const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
      app: './src/js/main.js',
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/src/build'
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "bundle.css"
        })
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/react']
              }
            }
          },
          {
            test: /\.png$/,
            loader: 'url-loader'
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: '../'
                }
              },
              {
                  loader: "css-loader",
                  options: {
                      modules: true,
                      localIdentName: '[name]__[local]--[hash:base64:5]'
                  }
              },
              "sass-loader"
            ]
          }
        ]
      },
      watch: true,
      devtool: 'source-map'
  };
  