import React from 'react'
import GitUserCard from './Card';
import { Item, Container} from 'semantic-ui-react';
export default class MainContent extends React.Component {

  render() {
    return (
      <Container text>
        <Item.Group>
          <GitUserCard />
          <hr />
          <GitUserCard />

        </Item.Group>
      </Container>
    );
  }

}
