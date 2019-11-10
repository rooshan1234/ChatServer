import React from "react";
import {Menu, Input} from "semantic-ui-react";

class App extends React.Component {
    render() {
        return (
        <Menu>
          <Menu.Item name='home'/>
          <Menu.Item name='messages'/>
          <Menu.Item name='friends'/>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
            />
          </Menu.Menu>
        </Menu>
        );
    }
}

export default App;