import React from "react";
import FriendsList from "./FriendsList";
import Chat from "./Chat";
import { Grid, Card, Segment, Container, Form } from "semantic-ui-react";

export default class ChatContainer extends React.Component {
  render() {
    return (
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
                      <Chat></Chat>
                    </Segment>
                    <Segment attached="bottom">
                      <Container fluid>
                        <Form onSubmit={this.handleSubmit}>
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
    );
  }
}
