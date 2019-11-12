import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Segment, Container } from "semantic-ui-react";

import Messages from "./messages/Messages";
import SendMessageForm from "./forms/SendMessageForm.jsx";

class Chat extends React.Component {
  render() {
    return (
      <Switch>
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

        {/*Handles a base case where if the user first loads to the page, it will show the first chat */}
        <Route
          path={"/"}
          render={props => {
            return (
              <React.Fragment>
                <Segment>
                  <Messages chatId="1"></Messages>
                </Segment>
                <Segment attached="bottom">
                  <Container fluid>
                    <SendMessageForm chatId="1"></SendMessageForm>
                  </Container>
                </Segment>
              </React.Fragment>
            );
          }}
        ></Route>
      </Switch>
    );
  }
}

export default withRouter(Chat);
