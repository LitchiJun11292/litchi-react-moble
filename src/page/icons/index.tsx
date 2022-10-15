import React from "react";
import { Card } from "antd-mobile";
import SuperIcon from "@/components/SuperIcon";

function Icons() {
  return (
    <Card title="字体">
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-lipin"></use>
      </svg>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-zhanghu"></use>
      </svg>
      <SuperIcon className="icon-lipintest" type="icon-lipin" />
      <div style={{ fontFamily: "s102-md" }}>0000</div>
    </Card>
  );
}

export default Icons;
