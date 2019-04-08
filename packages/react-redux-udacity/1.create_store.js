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

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}
function removeTodoAction(todo) {
  return {
    type: REMOVE_TODO,
    todo
  };
}
function toggleTodoAction(todo) {
  return {
    type: TOGGLE_TODO,
    todo
  };
}
function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    todo
  };
}
function removeGoalAction(goal) {
  return {
    type: REMOVE_GOAL,
    todo
  };
}
// App Code
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
}
function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  };
}

const store = createStore(todos);
const unsubscribe = store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});

store.dispatch(
  addTodoAction({
    id: 1,
    name: "Ir a la revision INS",
    complete: false
  })
);

store.dispatch(
  addTodoAction({
    id: 1,
    name: "Walk the dog",
    complete: false
  })
);

store.dispatch(
  addTodoAction({
    id: 2,
    name: "Wash the car",
    complete: false
  })
);
