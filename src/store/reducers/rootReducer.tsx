import { combineReducers } from "redux";
import { tasksBlockReducer } from "./dashboard-reducer";
import { tasksListReducer } from "./tasks-list-reducer";
import { userAuthReducer } from "./userAuthReducer";

export const rootReducer = combineReducers({
  taskBlock: tasksBlockReducer,
  taskList: tasksListReducer,
  userAuth: userAuthReducer
});

export type RootState = ReturnType<typeof rootReducer>;