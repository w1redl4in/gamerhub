import React from "react";
import { Typography, Row, Col, Card } from "antd";
import animationData from "../../assets/loading.json";
import Lottie from "react-lottie";

export default function Content() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Card>
          <Typography.Title type="warning">
            This page is on development.
          </Typography.Title>
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled
            width={200}
            height={200}
          />
        </Card>
      </Col>
    </Row>
  );
}
