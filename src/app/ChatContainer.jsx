import React from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch,
  withRouter,
  Link
} from "react-router-dom";
import { Grid, Card, Segment, Container, Form } from "semantic-ui-react";
import { addMessage } from "./actions/chat-actions.js";
import FriendsList from "./FriendsList";
import Messages from "./Messages";

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
                      <Segment>
                        <Route
                          path={"/chat/:chatId"}
                          render={props => {
                            return (
                              <Messages
                                chatId={props.match.params.chatId}
                              ></Messages>
                            );
                          }}
                        ></Route>
                      </Segment>
                      <Segment attached="bottom">
                        <Container fluid>
                          <Form
                            onSubmit={e => {
                              e.preventDefault();
                              this.props.addMessageToChat();
                            }}
                          >
                            <Form.Group>
                              <Form.TextArea
                                width={16}
                                placeholder="Message..."
                              />
                              <Form.Button content="Send" />
                            </Form.Group>
                          </Form>
                        </Container>
                      </Segment>
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

const mapDispatchToProps = dispatch => ({
  addMessageToChat: () => dispatch(addMessage("1", 1, 1, "abc"))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ChatContainer)
);
