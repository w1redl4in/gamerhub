import React from "react";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import history from "../../utils/history";

const CustomMenu = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = e => {
    setCurrent(e.key);
    history.push(`${e.key}`);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
      style={{ borderRadius: "5px" }}
    >
      <Menu.Item key="/dashboard">
        <MailOutlined />
        Dashboard
      </Menu.Item>
      <Menu.Item key="/">
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
