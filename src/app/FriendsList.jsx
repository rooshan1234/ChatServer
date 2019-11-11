import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class FriendsList extends React.Component {
  render() {
    return (
      <Menu fluid secondary vertical stackable>
        <Menu.Item as={NavLink} to={"/chat/1"} name="Friend #1" />
        <Menu.Item as={NavLink} to={"/chat/2"} name="Friend #2" />
        <Menu.Item as={NavLink} to={"/chat/3"} name="Friend #3" />
      </Menu>
    );
  }
}

export default FriendsList;
