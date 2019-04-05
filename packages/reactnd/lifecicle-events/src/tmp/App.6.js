import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor called");
    this.state = {
      refreshView: false,
      userId: "1",
      user: {}
    };
  }

  render() {
    console.log("2. Render method");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            onClick={() =>
              this.setState(state => ({
                refreshView: !state.refreshView
              }))
            }
          >
            Reload view
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                userId: "2"
              }))
            }
          >
            Change current User
          </button>
          <div>
            <p>Name: {this.state.user.name}</p>
            <p>Position: {this.state.user.position}</p>
          </div>

          <button onClick={() => this.unmount()}>unmount component</button>
        </header>
      </div>
    );
  }
  fetchUser = id => {
    return id === "1"
      ? { name: "Carlos", position: "padawan" }
      : { name: "Tyler", position: "master" };
  };

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  componentDidMount() {
    console.log("3. Component Did Mount");
    // Get user info
    const user = this.fetchUser(this.state.userId);
    this.setState({
      user
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.userId !== this.state.userId) {
      console.log("refetching user id");
      const user = this.fetchUser(this.state.userId);
      this.setState({
        user
      });
    }
    // check if user info has changed
    console.log(
      "4. componentDidUpdate: prevProps: ",
      prevProps,
      " prevState: ",
      prevState,
      " snapshot: ",
      snapshot
    );
  }

  componentWillUnmount() {
    console.log("8. componentWillUnmount");
  }
}

export default App;
