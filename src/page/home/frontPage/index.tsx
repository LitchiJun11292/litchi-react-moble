import React from "react";
import { Card, List } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const FrontPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card title="接入能力">
      <List>
        <List.Item onClick={() => navigate("/imgs")}>图片</List.Item>
        <List.Item onClick={() => navigate("/icons")}>图标</List.Item>
        <List.Item onClick={() => navigate("/redux")}>redux</List.Item>
        <List.Item onClick={() => navigate("/request")}>request</List.Item>
      </List>
    </Card>
  );
};

export default FrontPage;
