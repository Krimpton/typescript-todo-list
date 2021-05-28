import {combineReducers} from "redux";
import completeReducer from "./complete-reducer";
import incompleteReducer from "./incomplete-reducer";


export const rootReducer = combineReducers({
    complete: completeReducer,
    incomplete: incompleteReducer,
});