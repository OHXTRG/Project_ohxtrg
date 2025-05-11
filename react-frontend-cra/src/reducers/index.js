import { combineReducer } from "react-redux";
import authReducer from "./authReducer";

const rootReducer = combineReducer({
  auth: authReducer,
});

export default rootReducer;
