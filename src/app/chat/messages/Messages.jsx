import React from "react";
import { List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from "./Messages.less";
import { MessageType } from "./MessageType";

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
    let messages = [];
    let user = {};

    // ensure that the chat has messages
    if (this.props.chat && this.props.chat.messages) {
      messages = this.props.chat.messages;
    }

    return (
      <List divided relaxed verticalAlign="middle">
        {/* build the set of messages for the chat selected*/}
        {messages.map((message, index) => {
          // messages sent from recipient to sender
          if (message.message_type === MessageType.RECIPIENT_TO_SENDER) {
            user = this.props.users.find(user => {
              return user.id === this.props.chat.recipient_user_id;
            });

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

            // messages sent from sender to recipient
          } else if (message.message_type === MessageType.SENDER_TO_RECIPIENT) {
            user = this.props.users.find(user => {
              return user.id === this.props.chat.sender_user_id;
            });

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
  users: state.users
});

export default withRouter(connect(mapStateToProps, null)(Messages));
