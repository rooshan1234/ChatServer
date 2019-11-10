import React from "react";
import { Menu } from "semantic-ui-react";

class FriendsList extends React.Component {
  render() {
    return (
      <Menu fluid secondary vertical stackable>
        <Menu.Item active name="Friend #1" />
        <Menu.Item name="Friend #2" />
        <Menu.Item name="Friend #3" />
      </Menu>
    );
  }
}

export default FriendsList;
