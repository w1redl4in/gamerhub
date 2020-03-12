import React from "react";
import HelloWorld from "../components/HelloWorld";
import { Card, Row, Col, Form, Input, Button } from "antd";
import LoginWallpaper from "../assets/login-wallpaper.jpg";
import logo from "../assets/cubos.svg";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <Row
        style={{ height: "100vh" }}
        type="flex"
        justify="center"
        align="middle"
        className="teste"
      >
        <Card bordered={false}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "80px", marginBottom: "15px" }}
          />
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
      </Row>
    </div>
  );
};

export default Home;
