import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { usersReducer } from "./usersReducer";
import { loginReducer } from "./registerReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer,
  login: loginReducer,
});
