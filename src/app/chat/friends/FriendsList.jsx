import React from "react";
import { BrowserRouter as Router, NavLink, withRouter } from "react-router-dom";
import { Menu, Icon, Label } from "semantic-ui-react";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: this.props.chatId || "1" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.chatId && prevState.activeItem !== this.props.chatId) {
      this.setState({ activeItem: this.props.chatId });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid secondary vertical stackable>
        <Menu.Item
          as={NavLink}
          to={"/chat/1"}
          active={activeItem === "1"}
          name="1"
          onClick={this.handleItemClick}
        >
          <Label color="teal">1</Label>
          Sonny
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to={"/chat/2"}
          active={activeItem === "2"}
          name="2"
          onClick={this.handleItemClick}
        >
          Fredo
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to={"/chat/3"}
          name="3"
          active={activeItem === "3"}
          onClick={this.handleItemClick}
        >
          Michael
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(FriendsList);
