import React from "react";
import { List, Image, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "./Messages.less";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToEndOfMessages = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  };

  componentDidMount() {
    this.scrollToEndOfMessages();
  }

  componentDidUpdate() {
    this.scrollToEndOfMessages();
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

          if (message.message_type === "recieved") {
            return (
              <List.Item key={index}>
                <Image floated={"right"} avatar src={user.avatar_url} />
                <List.Content floated={"right"}>
                  <List.Header
                    className={styles.recievedMessageSenderName}
                    as="a"
                  >
                    {user.name}
                  </List.Header>
                  <div className={styles.recievedMessageSenderDate}>
                    {message.date_message_sent}
                  </div>
                  <List.Description
                    className={styles.recievedMessageDescription}
                  >
                    {message.text}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          } else {
            return (
              <List.Item key={index}>
                <Image floated={"left"} avatar src={user.avatar_url} />
                <List.Content floated={"left"}>
                  <List.Header className={styles.sentMessageSenderName} as="a">
                    {user.name}
                  </List.Header>
                  <div className={styles.sentMessageSenderDate}>
                    {message.date_message_sent}
                  </div>
                  <List.Description className={styles.sentMessageDescription}>
                    {message.text}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          }
        })}
        {/* helper div tag to help with scrolling to the bottom of the messages*/}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
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
