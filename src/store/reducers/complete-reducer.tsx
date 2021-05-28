import {Reducer} from "redux";
import {complete, incomplete} from "../actions/actions-type/storeType";
import {deleteTodoAction, markCompleteAction, markIncompleteAction} from "../actions/actions-type/actionsType";

const initialState : incomplete = [];

const completeReducer: Reducer<
    complete, deleteTodoAction | markCompleteAction | markIncompleteAction
    > = (state = initialState, action) => {
    switch (action.type) {
        case "MARK_INCOMPLETE":
            return [...state, action.todo]
        case "DELETE_TODO":
        case "MARK_COMPLETE":
            return [...state.filter((todo) => todo !== action.todo)];
        default :
            return [...state];
    }
}

export default completeReducer;