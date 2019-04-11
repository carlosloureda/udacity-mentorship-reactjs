export default (state, action) => {
  console.log("action:", action);
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
