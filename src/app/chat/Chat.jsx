import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";
import { connect } from "react-redux";

import Messages from "./messages/Messages";
import SendMessageForm from "./forms/SendMessageForm.jsx";
import styles from "./Chat.less";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chat = {};

    // find the chat from the current friend
    chat = this.props.chats.find(chat => {
      return chat.id === this.props.chatId;
    });

    return (
      <React.Fragment>
        <Segment className={styles.messages}>
          <Messages chat={chat} />
        </Segment>
        <Segment attached="bottom">
          <Container fluid>
            <SendMessageForm chat={chat} />
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chats
});

export default withRouter(connect(mapStateToProps, null)(Chat));
