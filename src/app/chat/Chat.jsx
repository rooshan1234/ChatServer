import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import Messages from "./messages/Messages";
import SendMessageForm from "./forms/SendMessageForm.jsx";
import styles from "./Chat.less";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Segment className={styles.messages}>
          <Messages chatId={this.props.chatId} />
        </Segment>
        <Segment attached="bottom">
          <Container fluid>
            <SendMessageForm chatId={this.props.chatId} />
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

export default withRouter(Chat);
