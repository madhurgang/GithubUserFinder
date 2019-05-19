import React, { Component } from 'react'
import { Grid, Pagination } from 'semantic-ui-react'

export default class MyPagination extends Component {
  state = {
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: false,
    showPreviousAndNextNav: false,
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    if (!this.props.totalPages || !this.props.currentPage)
      return <div>Loading ...</div>
    else {
      const { boundaryRange, siblingRange, showEllipsis, showFirstAndLastNav, showPreviousAndNextNav } = this.state
      return (
        <Grid columns={1}>
          <Grid.Column>
            <Pagination
              activePage={this.props.currentPage}
              boundaryRange={boundaryRange}
              onPageChange={(e, data) => this.props.handlePaginationChange(e, data)}
              size='mini'
              siblingRange={siblingRange}
              totalPages={this.props.totalPages}
              // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
              ellipsisItem={showEllipsis ? undefined : null}
              firstItem={showFirstAndLastNav ? undefined : null}
              lastItem={showFirstAndLastNav ? undefined : null}
              prevItem={showPreviousAndNextNav ? undefined : null}
              nextItem={showPreviousAndNextNav ? undefined : null}
            />
          </Grid.Column>
        </Grid>
      )
    }
  }
}