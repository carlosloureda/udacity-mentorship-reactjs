import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";

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

  // Factory function to help onChangeShelf
  changeBookFromShelFactory = (shelf, book) => {
    console.log("the book to be added is: ", book);
    return currentState => {
      let shelfMovedFrom = currentState.shelfs[book.shelf].filter(
        bookInShelf => bookInShelf.id !== book.id
      );
      let shelfMovedTo =
        shelf !== "none" ? currentState.shelfs[shelf].concat([book]) : null;

      // if (revert) {
      //   shelfMovedTo = currentState.shelfs[book.shelf].filter(
      //     bookInShelf => bookInShelf.id !== book.id
      //   );
      //   shelfMovedFrom = currentState.shelfs[shelf].concat([book]);
      // }
      return {
        ...currentState,
        shelfs: {
          ...currentState.shelfs,
          [shelf]:
            shelf !== shelfMovedTo ? shelfMovedTo : currentState.shelfs[shelf],
          [book.shelf]: shelfMovedFrom
        }
      };
    };
  };
  // to avoid double editing ...
  shelfChangeRequestPending = false;
  onChangeShelf = (event, book) => {
    const shelfMovedTo = event.target.value;
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
          this.setState(currentState =>
            // this.changeBookFromShelFactory(shelfMovedTo, book, true)
            ({ ...currentState, shelfs: oldState.shelfs })
          );
        });
    }
  };

  onAddToShelf = async (event, book) => {
    const shelf = event.target.value;
    book.shelf = shelf;
    this.setState(currentState => ({
      shelfs: {
        ...currentState.shelfs,
        [shelf]: currentState.shelfs[shelf].concat([book])
      }
    }));
    await BooksAPI.update(book, shelf);

    // .then(() => ()
    // .catch(err => {
    //   this.setState(currentState =>
    //     // this.changeBookFromShelFactory(shelfMovedTo, book, true)
    //     ({ ...currentState, shelfs: oldState.shelfs })
    //   );
    // });
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
                    onChangeShelf={this.onChangeShelf}
                  />
                  <BookShelf
                    books={shelfs.wantToRead}
                    shelfName="Want to Read"
                    onChangeShelf={this.onChangeShelf}
                  />
                  <BookShelf
                    books={shelfs.read}
                    shelfName="Read"
                    onChangeShelf={this.onChangeShelf}
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
            <SearchBooks onAddToShelf={this.onAddToShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
