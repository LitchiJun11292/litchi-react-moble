import React, { useState, useEffect } from "react";
import { TabBar } from "antd-mobile";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { stylePxToRem } from "@/utils/utils";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeKey, setActiveKey] = useState("/");

  /** 监听路由路径变化 */
  useEffect(() => {
    const currentRoute = location.pathname?.match(/[\\/][^\\/]*/g)?.[0];
    currentRoute && setActiveKey(currentRoute);
  }, [location.pathname]);

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/myAgent",
      title: "我的待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/myMessage",
      title: "我的消息",
      icon: <MessageOutline />,
    },
    {
      key: "/personCenter",
      title: "个人中心",
      icon: <UserOutline />,
    },
  ];
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <TabBar
        activeKey={activeKey}
        onChange={(val: string) => {
          setActiveKey(val);
          navigate(val);
        }}
        style={{ borderTop: `${stylePxToRem(1)} solid #ebeaea` }}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Home;
