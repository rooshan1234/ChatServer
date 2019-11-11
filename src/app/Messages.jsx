import React from "react";
import { List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messages = [];

    this.props.chats.forEach(chat => {
      if (chat.id === this.props.chatId) {
        messages = chat.messages;
      }
    });

    return (
      <List divided relaxed verticalAlign="middle">
        {messages.map((message, index) => (
          <List.Item key={index}>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
            />
            <List.Content>
              <List.Header as="a">{message.text}</List.Header>
              <List.Description></List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chats
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Messages)
);
