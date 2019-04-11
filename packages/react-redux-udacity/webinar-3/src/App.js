import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";
const store = createStore(reducer); // an incomplete solution

class App extends Component {
  state = {
    name: "Carlos"
  };
  render() {
    return <HelloWorld name={this.state.name} />;
  }
}

export default App;
