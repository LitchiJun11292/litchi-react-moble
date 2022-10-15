/**
 * processConfig 配置上添加 stylePxToRem 方法 （px转rem 的公用方法）
 */
 export const stylePxToRem = (number) => {
    if (number > 0) {
      return number / processConfig.rootValue + "rem";
    }
  };
  