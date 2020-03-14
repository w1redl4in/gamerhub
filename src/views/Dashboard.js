import React from "react";
import { Row, Col, Card, Typography, Divider, Button } from "antd";
import CustomMenu from "../components/menu";
import CustomCarousel from "../components/carousel";
import Content from "../components/content";

export default function Dashboard() {
  return (
    <Row
      style={{ minHeight: "100vh" }}
      align="top"
      justify="center"
      type="flex"
    >
      <Col span={20}>
        <Divider style={{ height: "0" }} />
        <CustomCarousel />
        <Divider style={{ height: "0" }} />
        <CustomMenu />
        <Divider style={{ height: "0" }} />
        <Content />
      </Col>
    </Row>
  );
}
