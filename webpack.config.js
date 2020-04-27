const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    scripts: [
      './source/js/script.js',
      './source/scss/style.scss',
      './source/index.html'
    ]
  },
  resolve: {
    extensions: [".js", ".sass", ".scss", ".css"],
    modules: ['./node_modules/'],
  },
  mode: 'development',
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 7777
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: 'js/script.js'
  },
  module: {
    rules: [
      {
        test: /\.s[a|c]ss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader?-url"
          },
          {
            loader: "sass-loader"
          }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader?-url"
          },
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: false
            }
          },
          {
            loader: 'posthtml-loader',
            options: {
              plugins: [
                require('posthtml-include')({ root: 'source' })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'source/index.html',
    }),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/style.min.css');
      },
      allChunks: true
    }),
    new CssoWebpackPlugin(),
    new CopyPlugin([
      {
        from: "source/fonts/**/*.{woff,woff2}",
        to: path.join(__dirname, 'build', 'fonts'),
        flatten: true,
      },
      {
        from: "source/img/**",
        to: path.join(__dirname, 'build'),
        transformPath(targetPath) {
          return targetPath.replace(`source${path.sep}`, '');
        },
      },
      {
        from: "source/*.ico",
        to: path.join(__dirname, 'build'),
        flatten: true,
      },
      {
        from: "source/3d/**",
        to: path.join(__dirname, 'build'),
        transformPath(targetPath) {
          return targetPath.replace(`source${path.sep}`, '');
        },
      }
    ]),
  ]
};
