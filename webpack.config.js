const webpack = require("webpack");
const { join, resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    contentScripts: resolve(__dirname, "src", "scripts", "contentScripts.js")
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "scripts/[name].bundle.js"
  },
  target: "web",
  loader: {
    rules: [
      {
        test: /\.(js|tag)$/,
        use: "babel-loader",
        enforce: "post",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: resolve(__dirname, "dist")
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, "src", "manifest.json"),
        transform: function(content, path) {
          // generates the manifest file using the package.json informations
          return Buffer.from(
            JSON.stringify({
              description: process.env.npm_package_description,
              version: process.env.npm_package_version,
              ...JSON.parse(content.toString())
            })
          );
        }
      }
    ])
  ]
};
