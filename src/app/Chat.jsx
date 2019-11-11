import React from "react";
import { withRouter } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import Messages from "./Messages";
import SendMessageForm from "./SendMessageForm.jsx";

class Chat extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Segment>
          <Messages chatId={this.props.chatId}></Messages>
        </Segment>
        <Segment attached="bottom">
          <Container fluid>
            <SendMessageForm chatId={this.props.chatId}></SendMessageForm>
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

export default withRouter(Chat);
