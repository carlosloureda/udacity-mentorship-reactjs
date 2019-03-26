import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  render() {
    const { books, shelfName, onShelfChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.title}>
                <Book book={book} onShelfChange={onShelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
