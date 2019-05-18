import React from 'react'
import { Menu, Input, Select, Container } from 'semantic-ui-react';
export default class Header extends React.Component {

  state = {
    options: [
      { text: 'Name Ascending', key: 'namea', value: 'namea' },
      { text: 'Name Descending', key: 'named', value: 'named' },
      { text: 'Sort A-Z', key: 'sorta', value: 'sorta' },
      { text: 'Sort Z-A', key: 'sortz', value: 'sortz' },
    ]
  }


  render() {


    return (
      <Menu stackable borderless inverted color='blue'>
        <Container text>
          <Menu.Menu>
            <Menu.Item>
              <Select placeholder='Sort Options' options={this.state.options} />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }

}