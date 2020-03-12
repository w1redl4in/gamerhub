import React from "react";
import { Row, Col, Card, Typography, Divider, Button } from "antd";
import ruby from "../assets/diamante.svg";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <Row>
        <Card
          hoverable
          bordered={false}
          title="SHOP"
          style={{ minWidth: "100%", height: "500px" }}
          headStyle={{ fontSize: "26px" }}
        >
          <Col span={6}>
            <Typography.Text>R$ 900,00</Typography.Text>
            <Divider />
            <img src={ruby} alt="ruby" style={{ width: "40px" }} />
          </Col>
          <Col span={6}>
            <Typography.Text>R$ 900,00</Typography.Text>
            <Divider />
            <img src={ruby} alt="ruby" style={{ width: "40px" }} />
          </Col>
          <Col span={6}>
            <Typography.Text>R$ 900,00</Typography.Text>
            <Divider />
            <img src={ruby} alt="ruby" style={{ width: "40px" }} />
          </Col>
          <Col span={6}>
            <Typography.Text>R$ 900,00</Typography.Text>
            <Divider />
            <img src={ruby} alt="ruby" style={{ width: "40px" }} />
          </Col>
        </Card>
      </Row>
    </div>
  );
}
