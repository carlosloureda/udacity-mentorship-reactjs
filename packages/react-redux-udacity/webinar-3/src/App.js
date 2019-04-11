import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { name: "Everyone" };
const store = createStore(reducer, initialState); // an incomplete solution

class App extends Component {
  render() {
    const state = store.getState();
    return <HelloWorld name={state.name} />;
  }
}

export default App;
