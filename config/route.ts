import Home from "../src/page/home";

export default [
  {
    path: "/",
    element: Home,
    isAsync: false,
    children: [
      {
        index: true,
        title: "首页",
        element: () => import("@/page/home/frontPage"),
      },
      {
        path: "/myAgent",
        title: "我的代办",
        element: () => import("@/page/home/myAgent"),
      },
      {
        path: "myMessage",
        title: "我的消息",
        element: () => import("@/page/home/myMessage"),
      },
      {
        path: "personCenter",
        title: "个人中心",
        element: () => import("@/page/home/personCenter"),
      },
    ],
  },
  {
    title: "图片",
    path: "imgs",
    element: () => import("@/page/imgs"),
  },
  {
    title: "图片",
    path: "icons",
    element: () => import("@/page/icons"),
  },
  {
    title: "redux",
    path: "redux",
    element: () => import("@/page/redux"),
  },
  {
    title: "request",
    path: "request",
    element: () => import("@/page/request"),
  },
];
