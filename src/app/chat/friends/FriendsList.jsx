import React from "react";
import { BrowserRouter as Router, NavLink, withRouter } from "react-router-dom";
import { Menu, Icon, Label } from "semantic-ui-react";

function FriendsList() {
  return (
    <Menu fluid secondary vertical stackable>
      <Menu.Item as={NavLink} to={"/chat/1"}>
        <Label color="teal">1</Label>
        Sonny
      </Menu.Item>
      <Menu.Item as={NavLink} to={"/chat/2"}>
        Fredo
      </Menu.Item>
      <Menu.Item as={NavLink} to={"/chat/3"}>
        Michael
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(FriendsList);
