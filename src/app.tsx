import React from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import routes from "../config/route";
import asyncRouter from "@/utils/asyncRouter";
import RoutingTitle from "@/components/RoutingTitle";

interface CallDeepInter {
  element: any;
  children?: CallDeepInter[];
  path?: string;
  index?: boolean;
  title?: string;
  isAsync?: boolean;
}

/** 递归树状路由: 组件处理 & title收集 */
const callDeep: (arr: CallDeepInter[], path?: string) => RouteObject[] =
  function (arr, path) {
    return arr?.map(({ title, element, isAsync, children, ...rest }) => {
      const Page = isAsync !== false ? asyncRouter(element) : element;

      /** 计算完整路由 */
      const cpPath = ((path || "") + "/" + (rest.path || "")).replaceAll(
        /[\\/]{2,}/gi,
        "/"
      );
      return {
        element: (
          <RoutingTitle path={cpPath} title={title}>
            <Page />
          </RoutingTitle>
        ),
        ...rest,
        /** 递归子集路由 */
        ...(Array.isArray(children) &&
          !!children?.length && { children: callDeep(children, cpPath) }),
      };
    });
  };

export default function App() {
  const element = useRoutes(callDeep(routes));

  return element;
}
