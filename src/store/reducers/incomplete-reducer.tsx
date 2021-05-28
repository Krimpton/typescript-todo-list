import { Reducer } from "redux";

import {
    deleteTodoAction,
    markCompleteAction,
    markIncompleteAction,
} from "../actions/actions-type/actionsType";

import { incomplete } from "../actions/actions-type/storeType";

const initialState: incomplete = [];

const incompleteReducer: Reducer<
    incomplete,
    deleteTodoAction | markCompleteAction | markIncompleteAction
    > = (state = initialState, action) => {    switch (action.type) {
        case "MARK_COMPLETE":
            return [...state, action.todo];
        case "MARK_INCOMPLETE":
        case "DELETE_TODO":
            return [...state.filter((todo) => todo !== action.todo)];
        default:
            return [...state];
    }
}

export default incompleteReducer;