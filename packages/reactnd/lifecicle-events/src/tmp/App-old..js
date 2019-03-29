import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor called");
    this.state = {
      testVar1: false
    };
  }

  /*
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    console.log("2. getDerivedStateFromError");
    return null;  
  } */

  componentDidMount() {
    console.log("4. Component Did Mount");
    /* Uncoment this line to see a 2nd re-render, and see the shouldComponentUpdate */
    this.setState(state => ({ testVar1: !state.testVar1 }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. shouldComponentUpdate, alternative: PureComponent");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "6. getSnapshotBeforeUpdate (Needs to be defined with componentDidUpdate"
    );
    return { trickyVar: "a tricky var" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "7. componentDidUpdate: prevProps: ",
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

  render() {
    console.log("3. render()");

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
                testVar1: !state.testVar1
              }))
            }
          >
            Reload view
          </button>
        </header>
      </div>
    );
  }
}

export default App;
