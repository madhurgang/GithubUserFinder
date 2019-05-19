import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import Dashboard from './Dashboard';
import Header from './Components/Header'
import axios from 'axios'

class App extends React.Component {
  state = {
    term: '',
    searchResult: ''
  }

  handleSearchChange = (e) => {
    e.preventDefault()
    this.setState({ term: e.target.value })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.github.com/search/users?q=${this.state.term}`)
      .then(
        (res) => {
          this.setState({
            searchResult: res.data.items,
            totalCount: res.data.total_count,
            totalPages: Math.ceil(res.data.total_count / 30) > 34 ? 34 : Math.ceil(res.data.total_count / 30)
          })
        }
      )
      .catch(
        (error) => console.log('Errors:', error)
      )
  }

  render() {
    return (
      <div>
        <Header
          term={this.state.term}
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit} />
        {this.state.searchResult.length > 0 ?
          <Container>
            <Dashboard
              searchResult={this.state.searchResult}
              totalCount={this.state.totalCount}
              totalPages={this.state.totalPages} />/>
          </Container> : null}
      </div>
    );
  }
}


export default App;