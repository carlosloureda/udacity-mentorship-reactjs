import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

class SearchBooks extends Component {
  state = {
    query: "",
    searchedBooks: []
  };
  static propTypes = {
    onAddToShelf: PropTypes.func.isRequired
  };

  searchBooks = query => {
    if (!query) {
      this.setState(state => ({ searchedBooks: [] }));
      return;
    }
    BooksAPI.search(query, null)
      .then(data => {
        this.setState(state => ({
          searchedBooks: !data || data.error ? [] : data
        }));
      })
      .catch(err => {
        console.error("error: ", err);
      });
  };

  onAddToShelf = (event, book) => {
    this.props.onAddToShelf(event, book);
    Swal.fire({
      position: "top-end",
      type: "success",
      title: "Hurray! Book added!",
      text: `The book:  ${book.title} has been added to your ${
        book.shelf
      } shelf`,
      showConfirmButton: false,
      timer: 1000
    });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.length > 0 &&
              this.state.searchedBooks.map(book => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      onChangeShelf={event => this.onAddToShelf(event, book)}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBooks);
