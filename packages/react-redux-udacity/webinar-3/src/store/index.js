import reducer from "../reducers";
import { createStore } from "redux";

const initialState = { name: "Everyone" };
export const store = createStore(reducer, initialState);
