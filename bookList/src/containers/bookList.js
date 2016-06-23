/**
 * creating a container:
 *  - is a react Component that has direct connection to the state managed by redux
 *  - forms the bridge between react and redux, in our mockup its part of that app
 *  	that joins these two libraries
 *  - we inject data/state into a container
 *  - also called smart component
 *  - our most parent component should be our container
 */

import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}></li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
