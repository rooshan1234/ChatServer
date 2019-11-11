import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { Grid, Card, Segment, Container, Form } from "semantic-ui-react";

import FriendsList from "./FriendsList";
import Chat from "./Chat.jsx";

class ChatContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Card.Header> Quick Chat </Card.Header>
              </Card.Content>
              <Card.Content>
                <Grid centered container columns={2}>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <FriendsList></FriendsList>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Route
                        path={"/chat/:chatId"}
                        render={props => {
                          return (
                            <Chat chatId={props.match.params.chatId}></Chat>
                          );
                        }}
                      ></Route>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Redirect from="/" exact to="/chat/1" />
      </React.Fragment>
    );
  }
}

export default withRouter(ChatContainer);
