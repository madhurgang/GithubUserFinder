import React from 'react'
import { Menu, Input, Dropdown, Icon, Container, Form } from 'semantic-ui-react';

export default class Header extends React.Component {

  render() {
    return (
      <Menu stackable borderless inverted color='blue'>
        <Container text>
          <Dropdown style={{ marginLeft: 150, width: 220 }} item simple text='Sort By Name'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.props.sortUsersByNameAZ()}>Name (A-Z)</Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.sortUsersByNameZA()}>Name (Z-A)</Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.sortUsersByRankAZ()}>Rank <Icon name='arrow up' /></Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.sortUsersByRankZA()}>Rank <Icon name='arrow down' /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                <Input
                  icon='search'
                  placeholder='Search...'
                  value={this.props.term}
                  onChange={(e) => this.props.handleSearchChange(e)}
                />
              </Form>

            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }

}