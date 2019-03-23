# Contacts App

Needs to have a backend server also running ... so this project has 2 folders, web and server (server is taken from https://github.com/udacity/reactnd-contacts-server2.git)

## Rendering UI

Just set the ContactList inside the hello world default app created by `create-react-app` script

## State

3 new concepts of React:

- Props
- Funcional Components (before "stateless components")
- Controlled Components

Create contacts app with the first props and talking about functional components and class components

Earlier in this Lesson, we learned that props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.

A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

Now we set the contacts local array in App.js as a part of the state of the component.

When defining a component's initial state, avoid initializing that state with props. This is an error-prone anti-pattern, since state will only be initialized with props when the component is first created.

this.state = {
user: props.user
}

- Now we see how to update the state.
