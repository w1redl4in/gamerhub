import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { useState } from "react";

const CustomMenu = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
      style={{ borderRadius: "5px" }}
    >
      <Menu.Item key="mail">
        <MailOutlined />
        Dashboard
      </Menu.Item>
      <Menu.Item key="app">
        <AppstoreOutlined />
        Shop
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default CustomMenu;
