import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Menu, Icon, Label } from "semantic-ui-react";

class FriendsList extends React.Component {
  render() {
    return (
      <Menu fluid secondary vertical stackable>
        <Menu.Item as={NavLink} to={"/"}>
          <Label color="teal">1</Label>
          Sonny
        </Menu.Item>
        <Menu.Item as={NavLink} to={"/chat/2"} name="Fredo" />
        <Menu.Item as={NavLink} to={"/chat/3"} name="Michael" />
      </Menu>
    );
  }
}

export default FriendsList;
