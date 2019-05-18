import React from 'react'
import { Item, Button, Table } from 'semantic-ui-react';

export default class GitUserCard extends React.Component {
  state = {
    show: false
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    }, () => this.callApi())
  }

  callApi = () => {
    // call api here
  }

  render() {
    return (
      <Item divided>
        <Item.Image size='tiny' src='http://placehold.it/100' />
        <Item.Content>
          <Item.Header as='a'>Varun Srivastave</Item.Header>
          <Item.Meta>Profile URL: <a href="#">http://abc.com</a></Item.Meta>
          <Item.Extra>
            <Button onClick={this.toggleShow} primary basic floated='right'>Details</Button>
            <br />
            <br />
            {this.state.show &&
              <Table basic>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Attribute</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Repository Name</Table.Cell>
                    <Table.Cell>MadurG</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Language</Table.Cell>
                    <Table.Cell>C++</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Open Issues</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Followers</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Forks</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            }

          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }

}