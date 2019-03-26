import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import Swal from "sweetalert2";

import "./App.css";
class BooksApp extends React.Component {
  state = {
    shelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  // Factory function to help onShelfChange
  changeBookFromShelFactory = (shelf, book) => {
    return currenState => {
      let shelfMovedFrom = currenState.shelfs[book.shelf].filter(
        bookInShelf => bookInShelf.id !== book.id
      );
      let shelfMovedTo =
        shelf !== "none" ? currenState.shelfs[shelf].concat([book]) : null;

      // if (revert) {
      //   shelfMovedTo = currenState.shelfs[book.shelf].filter(
      //     bookInShelf => bookInShelf.id !== book.id
      //   );
      //   shelfMovedFrom = currenState.shelfs[shelf].concat([book]);
      // }
      return {
        shelfs: {
          ...currenState.shelfs,
          [shelf]:
            shelf !== shelfMovedTo ? shelfMovedTo : currenState.shelfs[shelf],
          [book.shelf]: shelfMovedFrom
        }
      };
    };
  };
  // to avoid double editing ...
  shelfChangeRequestPending = false;
  onShelfChange = (event, book) => {
    const shelfMovedTo = event.target.value;
    console.log("shelfMovedTo: ", shelfMovedTo);
    if (shelfMovedTo !== book.shelf) {
      // TODO: make a better optimistic UI than 'oldState'
      let oldState = this.state;
      if (this.shelfChangeRequestPending) {
        return;
      }

      this.setState(this.changeBookFromShelFactory(shelfMovedTo, book));
      this.shelfChangeRequestPending = true;
      BooksAPI.update(book, shelfMovedTo)
        .then(() => (this.shelfChangeRequestPending = false))
        .catch(err => {
          this.setState(
            // this.changeBookFromShelFactory(shelfMovedTo, book, true)
            { shelfs: oldState.shelfs }
          );
        });
    }
  };

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        /* We dont need a books object as they are on different shelfs */
        this.setState({
          shelfs: {
            currentlyReading: books.filter(
              book => book.shelf === "currentlyReading"
            ),
            wantToRead: books.filter(book => book.shelf === "wantToRead"),
            read: books.filter(book => book.shelf === "read")
          }
        });
      })
      .catch(err =>
        Swal.fire({
          type: "error",
          title: "Oops...",
          html:
            "<p>Something went wrong!</p><p>We couldn't connect to the server API to fetch your books</p>"
        })
      );
  };
  render() {
    const { shelfs } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf
                    books={shelfs.currentlyReading}
                    shelfName="Currently Reading"
                    onShelfChange={this.onShelfChange}
                  />
                  <BookShelf
                    books={shelfs.wantToRead}
                    shelfName="Want to Read"
                    onShelfChange={this.onShelfChange}
                  />
                  <BookShelf
                    books={shelfs.read}
                    shelfName="Read"
                    onShelfChange={this.onShelfChange}
                  />
                </div>
              </div>
              <div className="open-search">
                <button
                  onClick={() => {
                    history.push("search");
                  }}
                >
                  Add a book
                </button>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <div className="search-books">
              <div className="search-books-bar">
                <button
                  className="close-search"
                  onClick={() => {
                    history.push("/");
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
                  <input type="text" placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid" />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
