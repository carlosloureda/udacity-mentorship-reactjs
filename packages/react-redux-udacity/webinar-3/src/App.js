import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { name: "Everyone" };
const store = createStore(reducer, initialState); // an incomplete solution

class App extends Component {
  state = {
    name: "Carlos"
  };
  render() {
    return <HelloWorld name={this.state.name} />;
  }
}

export default App;
