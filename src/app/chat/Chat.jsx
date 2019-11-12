import React from "react";
import { withRouter, Route } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import Messages from "./messages/Messages";
import SendMessageForm from "./forms/SendMessageForm.jsx";

class Chat extends React.Component {
  render() {
    return (
      <Route
        path={"/chat/:chatId"}
        render={props => {
          return (
            <React.Fragment>
              <Segment>
                <Messages chatId={props.match.params.chatId}></Messages>
              </Segment>
              <Segment attached="bottom">
                <Container fluid>
                  <SendMessageForm
                    chatId={props.match.params.chatId}
                  ></SendMessageForm>
                </Container>
              </Segment>
            </React.Fragment>
          );
        }}
      ></Route>
    );
  }
}

export default withRouter(Chat);
