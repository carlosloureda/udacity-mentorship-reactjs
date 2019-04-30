import API from "goals-todos-api";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

export function handleAddGoal(name, cb) {
  return dispatch => {
    return API.saveGoal(name)
      .then(goal => {
        dispatch(addGoal(goal));
        cb();
      })
      .catch(() => alert("There was an error. Try again"));
  };
}
export function handleDeleteGoal(goal) {
  return dispatch => {
    return dispatch(removeGoal(goal.id));
  };
}