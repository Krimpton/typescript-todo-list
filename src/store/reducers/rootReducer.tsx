import { combineReducers } from "redux";
import { tasksBlockReducer } from "./dashboard-reducer";
import { tasksListReducer } from "./tasks-list-reducer";

export const rootReducer = combineReducers({
    taskBlock: tasksBlockReducer,
    taskList: tasksListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;