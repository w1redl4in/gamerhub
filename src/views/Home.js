import React from "react";
import { Card, Row, Col, Input, Button, Divider, Typography, Form } from "antd";
import animationData from "../assets/rainbow.json";
import Lottie from "react-lottie";
import history from "../utils/history";
import "./styles.css";

const Home = ({ history }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const onFinish = values => {
    if (values.login === "cocaia@hotmail.com" && values.pass === "12345") {
      history.push("/dashboard");
    }
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
          <Form onFinish={onFinish}>
            <Form.Item
              name="login"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please insert a valid e-mail"
                }
              ]}
            >
              <Input placeholder="Login" />
            </Form.Item>
            <Form.Item
              name="pass"
              rules={[
                {
                  required: true,
                  message: "Please insert a valid password"
                }
              ]}
            >
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
