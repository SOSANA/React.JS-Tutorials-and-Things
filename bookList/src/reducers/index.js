import { combineReducers } from 'redux';
import BooksReducer from './booksReducer';
import ActiveBook from './ActiveBookReducer';

const rootReducer = combineReducers({
  // key/value where key is the name of the state and the value is the name of the reducer
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
