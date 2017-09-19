const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.ts"
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "/dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      hash: true,
      minify: {
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  }
};
