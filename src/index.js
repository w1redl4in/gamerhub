import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import ptBR from "antd/es/locale/pt_BR";
import moment from "moment";
import "moment/locale/zh-cn";
import "./assets/styles/index.scss";
import App from "./App";

moment.locale("zh-cn");

ReactDOM.render(
  <ConfigProvider locale={ptBR}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
