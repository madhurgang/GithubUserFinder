import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Components/Header'
import axios from 'axios'

class App extends React.Component {
  state = {
    term: '',
    searchResult: '',
    totalCount: 0,
    totalPages: 0,
    pageSize: 30,
    currentPage: 1
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
          handleSearchSort={this.handleSearchSort}
        />
        {this.state.searchResult.length > 0 ?
          <Dashboard
            searchResult={this.state.searchResult}
            totalCount={this.state.totalCount}
            totalPages={this.state.totalPages}
            currentPage={this.state.currentPage}
            handlePaginationChange={this.handlePaginationChange}
          /> : null}

      </div>
    );
  }

  handleSearchSort = (e, data) => {
    const list = [...this.state.searchResult]
    //change based on selection
    if (data.value === 'sortAZ') {
      list.sort((a, b) => {
        var nameA = a.login.toUpperCase(); // ignore upper and lowercase
        var nameB = b.login.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) { return -1 }
        if (nameA > nameB) { return 1; }
        return 0;
      })
    } else if (data.value === 'sortZA') {
      list.sort((a, b) => {
        var nameA = a.login.toUpperCase(); // ignore upper and lowercase
        var nameB = b.login.toUpperCase(); // ignore upper and lowercase
        if (nameB < nameA) { return -1; }
        if (nameB > nameA) { return 1; }
        return 0;
      });
    } else if (data.value === 'rankAsc') {
      list.sort((a, b) => {
        var scoreA = parseInt(a.score);
        var scoreB = parseInt(b.score);
        if (scoreA < scoreB) { return -1; }
        if (scoreA > scoreB) { return 1 }
        return 0;
      });
    } else if (data.value === 'rankDesc') {
      list.sort((a, b) => {
        var scoreA = parseInt(a.score);
        var scoreB = parseInt(b.score);
        if (scoreB < scoreA) { return -1; }
        if (scoreB > scoreA) { return 1; }
        return 0;
      });
    }
    this.setState({
      searchResult: list
    })
  }

  handlePaginationChange = (e, data) => {
    axios.get(`https://api.github.com/search/users?q=${this.state.term}&page=${data.activePage}&per_page=${this.state.pageSize}`)
      .then(
        (res) => {
          console.log('response', res)
          this.setState({
            searchResult: [...res.data.items],
            currentPage: data.activePage
          })
        }
      )
      .catch(
        (error) => console.log('error in loading page data:', error)
      )
  }
}


export default App;