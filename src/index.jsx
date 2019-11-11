import "semantic-ui-less/semantic.less";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./app/App.jsx";
import messages from "./app/reducers/chat-reducers.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatContainer from "./app/ChatContainer.jsx";

const initialState = {
  chats: [
    {
      id: "1",
      messages: [
        { sender_user_id: 1, receiver_user_id: 2, text: "abc" },
        { sender_user_id: 1, receiver_user_id: 2, text: "abc" }
      ]
    }
  ]
};

const store = createStore(messages, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
