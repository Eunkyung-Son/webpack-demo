const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new BundleAnalyzerPlugin()],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        // loader의 결과를 다음 loader로 전달
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

console.log(process.argv);
