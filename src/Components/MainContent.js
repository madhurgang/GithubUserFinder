import React from 'react'
import GitUserCard from './Card';
import { Item, Container } from 'semantic-ui-react';
export default class MainContent extends React.Component {

  render() {
    if (!this.props.searchResult)
      return <div>Loading ...</div>
    return (
      <Container text>
        <Item.Group>
          {this.props.searchResult.map((item, i) => <GitUserCard key={i} item={item} />)}
        </Item.Group>
      </Container>
    );
  }

}
