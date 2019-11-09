import React from "react";
import {Button, Dropdown, Card, Image, Icon, Flag} from "semantic-ui-react";

class App extends React.Component {
    render() {
        return (
            <Card>
            <Button>Click Me.</Button>
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        );
    }
}

export default App;