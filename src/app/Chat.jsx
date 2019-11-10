import React from "react";
import { List, Image } from "semantic-ui-react";

class Chat extends React.Component {
  render() {
    return (
      <List divided relaxed verticalAlign="middle">
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>How is it going!?</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>Hello are you there?</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            floated="right"
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content floated="right">
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>Yeah, I am here!</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            floated="right"
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content floated="right">
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>Hello?</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>Hey!</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            floated="right"
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content floated="right">
            <List.Header as="a">Lindsay</List.Header>
            <List.Description>I am here!!</List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default Chat;
