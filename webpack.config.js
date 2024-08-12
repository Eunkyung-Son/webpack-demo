const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    // index: "./src/index.js",
    // print: "./src/print.js",
    // another: "./src/another-module.js",
    index: {
      import: "./src/index.js",
      // dependOn: "shared",
    },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
  },
  devtool: "inline-source-map",
  /**
   * webpack-dev-server는 컴파일 후 출력 파일을 작성하지 않습니다.
   * 대신 번들 파일을 메모리에 보관하고 서버의 루트 경로에 마운트 된 실제 파일인 것처럼 제공합니다.
   */
  devServer: {
    static: "./dist",
  },
  output: {
    // filename: "bundle.js",
    // filename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    /** 단일 html 페이지에 하나 이상의 엔트리 포인트가 있기에 추가 */
    // runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "all",
    // },
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      // title: "Output Management",
      title: "Caching",
    }),
  ],
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        // loader의 결과를 다음 loader로 전달
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

console.log(process.argv);
