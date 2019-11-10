import React from "react";
import {
  Menu,
  Input,
  Grid,
  Card,
  Segment,
  Header,
  GridRow,
  Container,
  List,
  Form
} from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Menu>

        <Grid centered columns={2}>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Card.Header> Quick Chat </Card.Header>
              </Card.Content>
              <Card.Content fluid>
                <Grid centered container columns={2}>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Menu fluid pointing secondary vertical stackable>
                        <Menu.Item name="Friend #1" />
                        <Menu.Item name="Friend #2" />
                        <Menu.Item name="Friend #3" />
                      </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Segment>
                        <List verticalAlign="middle">
                          <List.Item>
                            <List.Content floated="left">
                              Test Mesg #1
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="right">
                              Test Msg #2
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="left">
                              Test Msg #3
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="right">
                              Test Msg #4
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="left">
                              Test Mesg #1
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="right">
                              Test Msg #2
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="left">
                              Test Msg #3
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="right">
                              Test Msg #4
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="left">
                              Test Mesg #1
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="right">
                              Test Msg #2
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="left">
                              Test Msg #3
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content floated="right">
                              Test Msg #4
                            </List.Content>
                          </List.Item>
                        </List>
                      </Segment>
                      <Segment attached="bottom">
                        <Container fluid>
                          <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                              <Form.Input width={16} placeholder="Message..." />
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

export default App;
