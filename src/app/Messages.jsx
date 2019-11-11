import React from "react";
import { List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chat = [];
    let messages = [];

    // find the chat from the current friend
    chat = this.props.chats.find(chat => {
      return chat.id === this.props.chatId;
    });

    // ensure that the chat has messages
    if (chat && chat.messages) {
      messages = chat.messages;
    }

    return (
      <List divided relaxed verticalAlign="middle">
        {/* build the set of messages for the chat selected*/}
        {messages.map((message, index) => {
          let user = {};

          user = this.props.users.find(user => {
            return user.id === message.user_id;
          });

          return (
            <List.Item key={index}>
              <Image
                floated={message.message_type === "sent" ? "left" : "right"}
                avatar
                src={user.avatar_url}
              />
              <List.Content
                floated={message.message_type === "sent" ? "left" : "right"}
              >
                <List.Header as="a">{user.name}</List.Header>
                <List.Description>{message.text}</List.Description>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chats,
  users: state.users
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Messages)
);
