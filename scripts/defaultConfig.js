const { merge } = require("webpack-merge");
const { get } = require("lodash");
const config = require("../config/config");
const version = require("./../package.json").version; //添加版本号

/** 合并配置 */
const configCommon = merge(
  {
    /** 路由配置 */
    history: {
      /** type:  hash | history, 默认：history */
      type: "history",
    },
    pxtorem: {
      /** 根节点为 75时，用2x UI: 750； 根节点为 37.5时，用1x UI: 375 */
      rootValue: 37.5,
    },
  },
  config
);

/** 根节点字体大小 rootValue */
const rootValue = get(configCommon, "pxtorem.rootValue", 37.5);
/** 路由模式 */
const historyType = get(configCommon, "history.type", "history");
/** 是否为 history模式 */
const isHistory = historyType === "history";

module.exports = {
  configCommon,
  rootValue,
  historyType,
  isHistory,
  version,
};
