# Contacts App

Needs to have a backend server also running ...

```
cd server
node server.js
# On another terminal
cd web
npm run start
```

## Rendering UI

Just set the ContactList inside the hello world default app created by `create-react-app` script

## State

3 new concepts of React:

- Props
- Funcional Components (before "stateless components")
- Controlled Components

## Lyfecycle Events

We shouldnt use a db fetch inside the render method, render method sould be free of sideeffects ...

- ComponentDidMount:
  Invoked inmediatly after the component is inserted into the DOM. Setting state in this method will trigger a re-rendering
- ComponentWillUnMount:
  Invoked inmediatly before the component is removed from the DOM
- getDerivedStateFromProps:
  Invoked after a component is instantiated as well as when it receives brand new props
- shouldComponentUpdate()
  You'll sometimes see in React apps as well. It returns true by default. This means that whenever a component's state (or its parent's state) is updated, the component re-renders

Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand.
If your React component’s render() function renders the same result given the same props and state, you can use [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) for a performance boost in some cases

Life cycle events part: https://classroom.udacity.com/nanodegrees/nd019/parts/57812373-5147-4152-a4f7-d2e164aba8a5/modules/7778e6bd-7868-47d0-8536-cfcbe4e29f19/lessons/a34ba863-12fd-4c7b-8062-a9881ebdb763/concepts/99997308-de29-4709-be62-3b7c38b780c3

https://reactjs.org/docs/react-component.html#the-component-lifecycle
