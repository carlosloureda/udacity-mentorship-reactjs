// Library Code

function createStore(reducer) {
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state:
  /*
            - Only an event (actions) can change the state of the store.
            - The function that returns the new state needs to be a pure function.
        */

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      // unsubscribe
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

// App Code
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo]);
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

const store = createStore(todos);
const unsubscribe = store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Ir a la revision INS",
    complete: false
  }
});
