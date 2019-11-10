import "semantic-ui-less/semantic.less";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./app/App.jsx";

const store = createStore(function() {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
