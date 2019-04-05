import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor called");
    /* 
      Used to bind methods, or init state
      Avoid introducing any side-effects or subscriptions in the constructor, componentDidMount instead ...
      Don't copy props into state!
    */
    this.state = {
      testVar1: false
    };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.

  //   console.log("2. getDerivedStateFromError");
  //   return null;

  // getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state,
  // or null to update nothing.
  // }

  /*
    For a long time, the lifecycle componentWillReceiveProps was the only way to update state in response to a change in props without an additional render. In version 16.3, 
    we introduced a replacement lifecycle, getDerivedStateFromProps to solve the same use cases in a safer way. 

    https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  */
  componentDidMount() {
    console.log("4. Component Did Mount");
    /* Uncoment this line to see a 2nd re-render, and see the shouldComponentUpdate */
    this.setState(state => ({ testVar1: !state.testVar1 }));
    /* 
      componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. 
      If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

      This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

    You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. 
    This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because 
    it often causes performance issues. In most cases, you should be able to assign the initial state in the constructor() instead. It can, however, be necessary for 
    cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
    */
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. shouldComponentUpdate, alternative: PureComponent");
    return true;
    /* 
    Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

  shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.

  This method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.

  If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped. Note that returning false does not prevent child components from re-rendering when their state changes.

  We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.

  Currently, if shouldComponentUpdate() returns false, then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. In the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.
    */
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "6. getSnapshotBeforeUpdate (Needs to be defined with componentDidUpdate"
    );
    return { trickyVar: "a tricky var" };
    /* 
      getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM 
      (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().

      This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way.

      A snapshot value (or null) should be returned.
    */
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
    /*
    componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, 
    canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

    You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.
    */
  }

  render() {
    console.log("3. render()");
    /* 
      The render() method is the only required method in a class component.
      When called, it should examine this.props and this.state and return one of the following types:
        * React Elements
        * Arrays and Fragments
        * Portals
        * String and numbers
        * Booleans or null
      
        The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
        If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

        It is called when new props come, on setState or on forceUpdate()
    */

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
