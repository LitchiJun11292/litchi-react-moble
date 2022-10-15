import "@/utils/rem";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/models";
import App from "./app";
import "./global.less";

/** 区分 history路由 or hash路由 */
const Router = {
  hash: HashRouter,
  history: BrowserRouter,
}[processConfig.historyType];

console.log(processConfig, "processConfig");

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
