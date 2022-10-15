import React, { useState } from "react";
import { Card, List, Button } from "antd-mobile";
import { get } from "@/utils/request";
import { stylePxToRem } from "@/utils/utils";

const Request: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const searchAPI = () => {
    get("/api/mockTest_1", { params: { current: 1, pageSize: 10 } })
      .then(() => {
        // todo...
      })
      .catch(() => {
        setData([{}, {}]);
      });
  };

  return (
    <Card title="发送请求">
      <Button size="small" color="primary" onClick={searchAPI}>
        请求数据
      </Button>
      {!!data?.length && (
        <List style={{ marginTop: stylePxToRem(20) }}>
          {data?.map((item, index) => {
            return <List.Item key={index}>{index}</List.Item>;
          })}
        </List>
      )}
    </Card>
  );
};

export default Request;
