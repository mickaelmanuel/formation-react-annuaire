import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { newslettersReducer } from "./newslettersReducer";
export const reducer = combineReducers({
  users: usersReducer,
  newsletters: newslettersReducer
});
