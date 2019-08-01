const path = require("path");

module.exports = {
  entry: ["./src/main/index.js", "./src/styles/index.scss"],
  output: {
    path: path.resolve(__dirname, "output"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-eval-source-map"
};
