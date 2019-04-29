import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";

import { store } from "./store";
class App extends Component {
  render() {
    console.log("HOlas");
    const state = store.getState();
    return [
      <HelloWorld key={1} name={state.name} />,
      <ButtonGroup key={2} names={["Everyone", "Carlos", "from Redux"]} />
    ];
  }
}

export default App;
