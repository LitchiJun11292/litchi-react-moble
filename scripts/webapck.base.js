const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const development = require("./webpack.dev.js");
const production = require("./webpack.prod.js");
const { readyEnv, generateName } = require("./utils");
const { rootValue, historyType } = require("./defaultConfig");

module.exports = (value) => {
  let envData = readyEnv(path.resolve(__dirname, `./../.env.${value.env}`));

  return merge(
    {
      mode: "development",
      entry: {
        app: "./src/index.js",
      },
      output: {
        path: path.resolve(__dirname, "../dist"),
        filename: generateName("[name].[hash:8].js"),
        chunkFilename: generateName("[id].[chunkhash:8].js"),
        publicPath: "/",
      },
      resolve: {
        alias: {
          "antd-mobile": rootValue === 75 ? "antd-mobile/2x" : "antd-mobile",
          "@": path.resolve(__dirname, "../", "src/"),
          "@static": path.resolve(__dirname, "../", "public/static"),
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      module: {
        rules: [
          /** 打包 js、mjs、jsx、ts、tsx */
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            use: {
              loader: "babel-loader",
            },
            include: [path.resolve(__dirname, "../", "src")],
          },
          /** 打包 字体、svg */
          {
            test: /\.(woff2|woff|ttf|eot)(\?.*)?$/,
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "iconfont/[name].[hash:8].[ext]",
              outputPath: generateName("static/"),
              esModule: false,
            },
            type: "javascript/auto",
          },
          /** 打包图片 */
          {
            test: /\.(png|jpe?g|gif|bmp|svg)(\?.*)?$/,
            /** url-loader 打包依赖 file-loader */
            loader: "url-loader",
            options: {
              limit: 25000,
              name: "media/[name].[hash:8].[ext]",
              outputPath: generateName("static/"),
              esModule: false,
            },
            type: "javascript/auto",
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "webpack移动端",
          template: "./public/index.html",
        }),
        new webpack.DefinePlugin({
          processConfig: {
            historyType: JSON.stringify(historyType),
            rootValue,
            ...envData,
          },
        }),
        /**
         * 此插件使用Stylelint，有助于您避免错误和强制执行风格的约束
         * 参考文档：https://blog.csdn.net/weixin_41643133/article/details/84229687
         */
        new StylelintPlugin({
          context: "src",
          configFile: path.resolve(__dirname, "../.stylelintrc.js"),
          files: "**/*.(less|css)",
          failOnError: false,
          quiet: true,
          fix: true,
        }),
      ],
    },
    value.WEBPACK_SERVE ? development : production
  );
};
