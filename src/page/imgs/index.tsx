import React from "react";
import { Card } from "antd-mobile";
import { stylePxToRem } from "@/utils/utils";
import imgs888 from "@/assets/images/888.jpeg";

const Images: React.FC = () => {
  return (
    <Card title="图片">
      <img src="/static/images/888.jpeg" style={{ width: stylePxToRem(200) }} />
      <img
        src={require("@/assets/images/333.jpg")}
        style={{ width: stylePxToRem(200) }}
      />
      <img src={imgs888} style={{ width: stylePxToRem(200) }} />
    </Card>
  );
};

export default Images;
