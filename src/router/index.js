import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import history from "../utils/history";

const Routes = () => {
  return (
    <Switch history={history}>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
