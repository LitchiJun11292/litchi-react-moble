const path = require("path");
const { historyType, ii } = require("./defaultConfig");

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "../", "public"),
    },
    compress: true,
    port: 5000,
    hot: true,
    open: true,
    /**
     * true-开启Browser模式， false-Hash
     */
    historyApiFallback: {
      history: {
        rewrites: [
          {
            from: /./,
            to: (context) => {
              if (context.parsedUrl.path.startsWith("/api")) {
                return context.parsedUrl.path;
              }
              return "/index.html";
            },
          },
        ],
      },
      hash: false,
    }[historyType],
    /** 提供服务器内部在所有其他中间件之执行 自定义中间件的能力 */
    onBeforeSetupMiddleware: function (devServer) {
      //todo...
    },
  },
  module: {
    rules: [
      /** 打包css、less */
      {
        test: /\.(le|c)ss$/,
        use: [
          "style-loader",
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
};
