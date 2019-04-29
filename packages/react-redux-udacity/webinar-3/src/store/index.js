import reducer from "../reducers";
import { createStore } from "redux";

const initialState = { name: "Everyone" };
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
