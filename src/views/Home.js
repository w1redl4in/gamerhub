import React from "react";
import { Card, Row, Col, Form, Input, Button, Divider, Typography } from "antd";
import animationData from "../assets/rainbow.json";
import Lottie from "react-lottie";
import "./styles.css";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  return (
    <Row type="flex" justify="center" align="middle" className="teste">
      <Col span={6}>
        <Card
          bordered={false}
          title={
            <Row>
              <Lottie
                options={defaultOptions}
                isClickToPauseDisabled
                width={300}
                height={300}
              />
            </Row>
          }
        >
          <Typography.Title>Gamer Hub</Typography.Title>
          <Divider style={{ height: "0" }} />
          <Form onFinish={onFinish} form={form}>
            <Form.Item name="login">
              <Input placeholder="Login" />
            </Form.Item>
            <Form.Item name="pass">
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Play!</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
