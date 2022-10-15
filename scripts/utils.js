// import { fileURLToPath } from "url";
// import { dirname } from "path"
const fs = require("fs");
const { version } = require("./defaultConfig");

/**
 * 准备环境变量
 */
exports.readyEnv = (url) => {
  try {
    /** 读取文件内容 */
    let data = fs.readFileSync(url, { encoding: "utf8" });
    /** 匹配对应的 key：value */
    let cPdata = [...data.matchAll(/(^|[^\=\n]*)=([^\n]*|$)/g)];
    let obj = {};
    cPdata.forEach((item) => {
      obj[item[1].trim()] = item[2].trim();
    });
    return obj;
  } catch (error) {}
};

/**
 *
 * @param {*} url 文件地址
 * @returns  文件目录名
 */
// export const pathUrl = (url) => {
//   const __filename = fileURLToPath(url);
//   const __dirname = dirname(__filename);
//   return __dirname;
// };

/**
 * 运行 npm run build:version，指定版本号打包，否则 hash
 * @param {*} str: string
 * @returns string
 */
exports.generateName = (str) => {
  if (process.env.IS_VERSION) {
    return version + "/" + str.replace(/(\[hash:8]\.)|(\[chunkhash:8]\.)/, "");
  }
  return str;
};
