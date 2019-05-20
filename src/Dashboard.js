import React from 'react'
import MainContent from './Components/MainContent';
import MyPagination from './Components/Pagination'
import { Container } from 'semantic-ui-react';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <MainContent
          searchResult={this.props.searchResult}
          totalCount={this.props.totalCount}
          totalPages={this.props.totalPages}
        />
        <Container text>
          <br />
          <MyPagination
            handlePaginationChange={this.props.handlePaginationChange}
            totalPages={this.props.totalPages}
            currentPage={this.props.currentPage}
          />
        </Container>
      </div>
    );
  }
}
