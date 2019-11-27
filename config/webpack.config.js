const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入插件

module.exports = {
  entry: {
    main: './src/App.js' // 需要打包的文件入口
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new CleanWebpackPlugin(), // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: '自动生成 HTML',
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 使用正则来匹配 js 文件
        exclude: /node_modules/, // 排除依赖包文件夹
        use: {
          loader: 'babel-loader', // 使用 babel-loader
          options: {
            presets: [
              ['@babel/preset-env'],
              '@babel/preset-react'
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
            ]
          }
        }
      }, {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, '../src')],
        options: {
          //  自动修复导致有时候自动保存文件时工程重复自动编译
          fix: false,
          quiet: true,
        },
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          },
        }],
      },
    ]
  }
}
