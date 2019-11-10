import React from "react";
import { Menu, Input } from "semantic-ui-react";
import ChatContainer from "./ChatContainer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item active name="messages" />
          <Menu.Item name="friends" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Menu>
        <ChatContainer></ChatContainer>
      </React.Fragment>
    );
  }
}

export default App;
