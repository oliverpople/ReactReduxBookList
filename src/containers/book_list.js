import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionsCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="List-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anythiung returned from this funciton will end up as props
// on ths BookList
function mapDispatchToProps(dispatch) {
  // whenever select is called the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote Booklist from a Component to a container
// it needs to know about this new dispatch method, selectBook.
// Make it avaialabe as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
