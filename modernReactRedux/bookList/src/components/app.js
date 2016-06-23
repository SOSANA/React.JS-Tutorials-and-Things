import React, { Component } from 'react';
import BookList from '../containers/bookListContainer';
import BookDetail from '../containers/bookDetailContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
