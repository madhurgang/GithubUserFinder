import React from 'react'
import { Item, Button, Table } from 'semantic-ui-react';
import axios from 'axios'

export default class GitUserCard extends React.Component {
  state = {
    show: false,
    repos: [],
    apiCalled: false
  }

  toggleShow = () => {
    if (!this.state.apiCalled) {
      axios.get(`https://api.github.com/users/${this.props.item.login}/repos`)
        .then(
          (res) => {
            console.log('response ', res)
            this.setState({
              repos: res.data,
              show: !this.state.show,
              apiCalled: true
            })
          })
        .catch(
          (error) => console.log('error in fetch user Repos:', error)
        )
    } else {
      this.setState({
        show: !this.state.show
      })
    }
  }


  render() {
    const { item } = this.props
    return (
      <React.Fragment>
        <Item>
          <Item.Image avatar size='tiny' src={item.avatar_url} />
          <Item.Content>
            <Item.Header as='a'>{item.login}</Item.Header>
            <Item.Meta>Profile URL: <a href={item.html_url} target='_blank' rel='noopener noreferrer'>{item.html_url}</a></Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Item.Extra>
            <Button onClick={this.toggleShow} primary basic floated='right'>{this.state.show ? 'Collapse' : 'Details'}</Button>
            <br />
            <br />
            {this.state.show && (this.state.repos.length > 0) &&
              <Table basic striped collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Repository Name</Table.HeaderCell>
                    <Table.HeaderCell>Language</Table.HeaderCell>
                    <Table.HeaderCell>Followers</Table.HeaderCell>
                    <Table.HeaderCell>Open Issues</Table.HeaderCell>
                    <Table.HeaderCell>Forks</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.repos.map((repo, i) => {
                    return (
                      <Table.Row key={i}>
                        <Table.Cell>{repo.name}</Table.Cell>
                        <Table.Cell>{repo.language}</Table.Cell>
                        <Table.Cell>{repo.watchers}</Table.Cell>
                        <Table.Cell>{repo.open_issues}</Table.Cell>
                        <Table.Cell>{repo.forks}</Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table>
            }
          </Item.Extra>
        </Item>
        <hr />
      </React.Fragment>
    );
  }

}