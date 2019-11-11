import "semantic-ui-less/semantic.less";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./app/App.jsx";
import messages from "./app/reducers/chat-reducers.js";

const initialState = {
  // will remain constant
  recipient_user_id: "2",
  // all on-going chats
  chats: [
    {
      id: "1",
      messages: [
        { text: "abc", user_id: "1", message_type: "sent" },
        { text: "abc", user_id: "2", message_type: "recieved" }
      ]
    }
  ],
  // users in the system
  users: [
    {
      id: "1",
      name: "Victoria",
      avatar_url:
        "https://react.semantic-ui.com/images/avatar/small/lindsay.png"
    },
    {
      id: "2",
      name: "Rooshan",
      avatar_url:
        "https://react.semantic-ui.com/images/avatar/small/matthew.png"
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
