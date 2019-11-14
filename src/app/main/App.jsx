import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Switch, Route, NavLink } from "react-router-dom";
import FriendsAndChatContainer from "../containers/FriendsAndChatContainer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item active as={NavLink} to={"/"} name="chat" />
          <Menu.Item name="friends" as={NavLink} to={"/friends"} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="setting" size="large" />
            </Menu.Item>
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route
            path={"/friends"}
            render={props => {
              return <h3>Friends Tab!</h3>;
            }}
          />
          <Route path={"/"} component={FriendsAndChatContainer} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
