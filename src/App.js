import React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import Routes from "./router";

const App = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;
