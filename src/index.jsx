import "semantic-ui-less/semantic.less";
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./app/main/App.jsx";
import messages from "./app/reducers/chat-reducers.js";

const initialState = {
  // will remain constant
  recipient_user_id: "1",
  // all on-going chats
  chats: [
    {
      id: "1",
      messages: [
        {
          text:
            "Froggos have a little joke, that the world is so hard a man must have two fathers to look after him, and that's why they have God Froggers",
          user_id: "2",
          message_type: "sent"
        },
        {
          text: "I'll make him an ofer he can't refuse.",
          user_id: "1",
          message_type: "recieved"
        },
        {
          text:
            "The froggo with the long tongue can steal more fies than the man with the gun",
          user_id: "1",
          message_type: "recieved"
        }
      ]
    },
    {
      id: "2",
      messages: [
        {
          text: "Froggos love playing basketball!",
          user_id: "3",
          message_type: "sent"
        },
        { text: "Liar Liar!", user_id: "1", message_type: "recieved" }
      ]
    },
    {
      id: "3",
      messages: [
        {
          text: "Vito can't touch this!",
          user_id: "4",
          message_type: "sent"
        },
        { text: "Hammer time!", user_id: "1", message_type: "recieved" }
      ]
    }
  ],
  // users in the system
  users: [
    {
      id: "1",
      name: "Vito Croakleone",
      avatar_url:
        "https://react.semantic-ui.com/images/avatar/small/matthew.png"
    },
    {
      id: "2",
      name: "Sonny",
      avatar_url: "https://react.semantic-ui.com/images/avatar/small/tom.jpg"
    },
    {
      id: "3",
      name: "Fredo",
      avatar_url: "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
    },
    {
      id: "4",
      name: "Michael",
      avatar_url:
        "https://react.semantic-ui.com/images/avatar/small/christian.jpg"
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
