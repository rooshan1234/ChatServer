import "semantic-ui-less/semantic.less";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashRouter as Router, Route } from "react-router-dom";

import App from "./app/main/App";
import messages from "./app/reducers/chat-reducers";
import { initialState as initialChatState } from "./InitialChatState";

const store = createStore(messages, initialChatState);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
