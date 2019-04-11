import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  state = {
    name: "Carlos"
  };
  render() {
    return <HelloWorld name={this.state.name} />;
  }
}

export default App;
