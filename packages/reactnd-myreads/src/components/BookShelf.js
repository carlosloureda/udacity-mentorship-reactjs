import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, shelfName, onChangeShelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} onChangeShelf={onChangeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
