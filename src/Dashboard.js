import React from 'react'
import MainContent from './Components/MainContent';
import MyPagination from './Components/Pagination'
import { Container } from 'semantic-ui-react';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <MainContent />
        <Container text>
          <br /><br />
          <MyPagination />
        </Container>
      </div>
    );
  }
}
