import React from 'react'
import { Menu, Input, Select, Container, Form } from 'semantic-ui-react';

export default class Header extends React.Component {

  state = {
    options: [
      { text: 'Name (A-Z)', key: 'sortAZ', value: 'sortAZ' },
      { text: 'Name (Z-A)', key: 'sortZA', value: 'sortZA' },
      { text: 'Rank Asc', key: 'rankAsc', value: 'rankAsc' },
      { text: 'Rank Desc', key: 'rankDesc', value: 'rankDesc' },
    ]
  }

  render() {
    return (
      <Menu stackable borderless inverted color='blue'>
        <Container text>
          <Menu.Menu>
            <Menu.Item>
              <Select placeholder='Sort Options' options={this.state.options}
                onChange={(e, data) => this.props.handleSearchSort(e, data)} />
            </Menu.Item>
          </Menu.Menu>
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