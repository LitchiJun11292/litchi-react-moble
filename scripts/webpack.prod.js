const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // 拷贝静态资源
const { generateName } = require("./utils");
const configCommon = require("../config/config");
const { isHistory } = require("./defaultConfig");

module.exports = {
  mode: "production",
  output: {
    /**
     * 输出解析文件的目录，指定资源文件引用的目录
     */
    publicPath: isHistory ? "/" : "./",
  },
  watchOptions: {
    //过滤node_modules，不监听其中文件
    ignored: /node_modules/,
    //文件变化后300毫秒再去执行
    aggregateTimeout: 300,
    //每毫秒查询一次文件是否变化
    poll: 1000,
  },
  module: {
    rules: [
      /** 打包css、less */
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              /** 开启 css modules */
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
                /** 过滤 node_modules 中的css文件 */
                auto: (resourcePath) => !/node_modules/i.test(resourcePath),
              },
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    /** 默认打包之前清除 dist 文件下的文件，命令行 rm -rf dist 也可达到此效果 */
    new CleanWebpackPlugin(),
    /** 为每个包含 CSS 的 JS 文件创建一个 CSS 文件 */
    new MiniCssExtractPlugin({
      filename: generateName("[name].[hash:8].css"),
      chunkFilename: generateName("[id].[chunkhash:8].css"),
    }),
    /** 该插件将根据模块的相对路径生成哈希值，生成一个四字符的字符串作为模块 id */
    new webpack.ids.HashedModuleIdsPlugin(),
    /** 将 plublic文件下的文件 拷贝到 dist文件下 (除了index.html) */
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../", "public"),
          to: path.resolve(__dirname, "../", "dist"),
          globOptions: {
            ignore: [path.resolve(__dirname, "../", "public/index.html")],
          },
        },
      ],
    }),
  ],
  optimization: {
    /**
     * 有多个入口文件时，可以进行公用包的提取
     * 参考文档：https://blog.csdn.net/weixin_42755677/article/details/108232479
     */
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
    /** https://webpack.docschina.org/configuration/optimization/#optimizationminimize */
    minimize: true,
    minimizer: [
      /** 优化和缩小 CSS */
      new CssMinimizerPlugin(),
      /** * 压缩 JavaScript */
      new TerserPlugin(),
    ],
  },
};
