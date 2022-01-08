const config = require("./config/config");

module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [
        "defaults",
        "not ie < 11",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions",
      ],
    }),
    require("postcss-pxtorem")({
      // 根元素字体大小
      rootValue: 37.5,
      // 匹配CSS中的属性，* 代表启用所有属性
      propList: ["*"],
      // propList: ["font", "font-size", "line-height", "letter-spacing"],
      //转换成rem后保留的小数点位数
      unitPrecision: 5,
      // 小于0px的样式不被替换成rem
      minPixelValue: 0,
      // 忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
      // exclude: ["node_modules"],
      /**
       * 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
       * 忽略一些不需要转换的选择器，比如：['body', 'ant-']
       */
      // selectorBlackList: [],
      mediaQuery: true,
      ...config.pxtorem,
    }),
  ],
};
