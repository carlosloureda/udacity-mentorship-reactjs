import checker from "./checker";
import logger from "./checker";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, checker, logger);
