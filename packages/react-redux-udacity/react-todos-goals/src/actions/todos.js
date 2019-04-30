import API from "goals-todos-api";

// Action constants
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Action creators
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function handleAddTodo(name, cb) {
  return dispatch => {
    return API.saveTodo(name)
      .then(goal => {
        dispatch(addTodo(goal));
        cb();
      })
      .catch(() => alert("There was an error. Try again"));
  };
}

export function handleToggle(id) {
  return dispatch => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(err => {
      dispatch(toggleTodo(id));
    });
  };
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo.id));
      alert("An error occurred");
    });
  };
}
