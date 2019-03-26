import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Book extends Component {
  static propTypes = {
    /* The book object */
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  render() {
    const { book, onShelfChange } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event => onShelfChange(event, book)}
              defaultValue={book.shelf}
            >
              {/* <select onChange={(event) => this.props.onChangeShelf(event, book)} defaultValue={defaultShelf} value="wantToRead" */}
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
        <div className="book-title">{book.title}</div>
        {book.authors.map(author => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
      </div>
    );
  }
}
