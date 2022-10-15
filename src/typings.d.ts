import "@amap/amap-jsapi-types";
// declare module "*.css";
// declare module "*.less";
// declare module "*.scss";
// declare module "*.sass";
// declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
// declare module "*.gif";

declare const processConfig: {
  historyType: "hash" | "history";
  rootValue: number;
  [prop: string]: any;
};
