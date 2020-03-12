import React, { useEffect, createRef, useRef } from "react";
import HelloWorld from "../components/HelloWorld";
import { Card, Row, Col, Form, Input, Button, Divider } from "antd";
import LoginWallpaper from "../assets/login-wallpaper.jpg";
import logo from "../assets/cubos.svg";
import SVG from "../assets/17059-galacticons-animated.json";
import Lottie from "lottie-web";
import ReactLottie from "react-lottie";
import "./styles.css";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SVG,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Row type="flex" justify="center" align="middle" className="teste">
        <Col span={6}>
          <Card bordered={false}>
            <ReactLottie options={defaultOptions} height={200} width={200} />
            <Divider style={{ height: "0" }} />
            <Form>
              <Form.Item>
                <Input placeholder="Login" />
              </Form.Item>
              <Form.Item>
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button>Play!</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
