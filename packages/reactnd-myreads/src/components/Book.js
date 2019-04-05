import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Book extends Component {
  static propTypes = {
    /* The book object */
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, onChangeShelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book &&
                book.imageLinks &&
                `url("${book.imageLinks.smallThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event => onChangeShelf(event, book)}
              defaultValue={book.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book && book.title}</div>
        {book.authors &&
          book.authors.length &&
          book.authors.map(author => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    );
  }
}
