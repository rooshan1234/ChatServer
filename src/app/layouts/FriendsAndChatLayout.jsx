import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Card, Image } from "semantic-ui-react";

import FriendsList from "../chat/friends/FriendsList";
import Chat from "../chat/Chat";

class ChatContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid centered columns={2}>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Image
                  floated="right"
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                />
                <Card.Header> Frog Bother Chat </Card.Header>
                <Card.Meta>Vito Croakleone</Card.Meta>
              </Card.Content>
              <Card.Content>
                <Grid centered container columns={2}>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      {/* Add the friends list in the grid */}
                      <FriendsList></FriendsList>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      {/* Add the chat (messages and message form) in the grid */}
                      <Chat></Chat>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(ChatContainer);
