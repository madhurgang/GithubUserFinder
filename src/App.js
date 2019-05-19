import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import Dashboard from './Dashboard';
import Header from './Components/Header'
import axios from 'axios'

class App extends React.Component {
  state = {
    term: '',
    searchResult: '',
    totalCount: 0,
    totalPages: 0
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
          handleSearchSubmit={this.handleSearchSubmit}
          sortUsersByNameAZ={this.sortUsersByNameAZ}
          sortUsersByNameZA={this.sortUsersByNameZA}
          sortUsersByRankAZ={this.sortUsersByRankAZ}
          sortUsersByRankZA={this.sortUsersByRankZA} />
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

  sortUsersByNameAZ = () => {
    // sort by name
    const list = [...this.state.searchResult]
    list.sort((a, b) => {
      var nameA = a.login.toUpperCase(); // ignore upper and lowercase
      var nameB = b.login.toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({
      searchResult: list
    })
  }

  sortUsersByNameZA = () => {
    const list = [...this.state.searchResult]
    // sort by name
    list.sort((a, b) => {
      var nameA = a.login.toUpperCase(); // ignore upper and lowercase
      var nameB = b.login.toUpperCase(); // ignore upper and lowercase

      if (nameB < nameA) {
        return -1;
      }
      if (nameB > nameA) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({
      searchResult: list
    })
  }

  sortUsersByRankAZ = () => {
    const list = [...this.state.searchResult]
    // sort by score

    list.sort((a, b) => {
      var scoreA = parseInt(a.score);
      var scoreB = parseInt(b.score);

      if (scoreA < scoreB) {
        return -1;
      }
      if (scoreA > scoreB) {
        return 1;
      }
      // scores must be equal
      return 0;
    });
    console.log(list)
    this.setState({
      searchResult: list
    })
  }

  sortUsersByRankZA = () => {
    const list = [...this.state.searchResult]
    // sort by score

    list.sort((a, b) => {
      var scoreA = parseInt(a.score);
      var scoreB = parseInt(b.score);

      if (scoreB < scoreA) {
        return -1;
      }
      if (scoreB > scoreA) {
        return 1;
      }
      // scores must be equal
      return 0;
    });
    console.log(list)
    this.setState({
      searchResult: list
    })
  }
}


export default App;