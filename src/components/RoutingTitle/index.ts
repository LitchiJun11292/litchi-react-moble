import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

/**
 * 高阶组件，根据页面设置不同的 document.title
 * 当前路由 和 路由配置中的路径匹配，则将配置中 title 设置到 document.title
 */
const RoutingTitle = ({ children, path, title }: any) => {
  const { pathname } = useLocation();
  const params = useParams();

  // 监听路由变化
  useEffect(() => {
    let calcPathname = pathname;
    Object.keys(params).forEach((key) => {
      calcPathname = calcPathname.replace(
        new RegExp(`/${params[key]}`),
        `/:${key}`
      );
    });
    if (pathname === path && title) {
      document.title = title;
    }
  }, [pathname]);

  return children;
};

export default RoutingTitle;
