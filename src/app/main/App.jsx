import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { Switch, Route, NavLink } from "react-router-dom";
import ChatContainer from "../layouts/FriendsAndChatLayout";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item active as={NavLink} to={"/"} name="chat" />
          <Menu.Item name="friends" as={NavLink} to={"/friends"} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
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
          ></Route>
          <Route path={"/"} component={ChatContainer}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
