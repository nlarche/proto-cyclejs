var webpack = require("webpack")

var ENV = process.env.NODE_ENV

module.exports = {
  entry: (ENV == "production" ?
    ["./src/main"] :
    [
      "webpack-dev-server/client?http://localhost:3001",
      "webpack/hot/dev-server",
      "./src/main"
    ]
  ),
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  plugins: (ENV === "production" ?
    [
      new webpack.optimize.UglifyJsPlugin({minimize: true}),
    ] :
    [new webpack.HotModuleReplacementPlugin()]
  ),
  devServer: {
    contentBase: "./",
    hot: true,
  }
};
