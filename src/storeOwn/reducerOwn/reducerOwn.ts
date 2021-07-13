import {TaskState, taskTypes, UserAction} from "../types/ownTypes";

export const initialState: TaskState = {
    todos: []
}

export const reducerOwn = (state = initialState, action: UserAction): TaskState => {
    switch (action.type) {
        case taskTypes.ADD_TASK:
            return {...state, todos: [...state.todos, action.payload]};
        case taskTypes.DELETE_TASK:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
        // return {...state, task: state.task.filter(taskText => taskText !== action.payload)};
        // case taskTypes.EDIT_TASK:
        //     return {...state, todos: state.todos.filter()};
        default:
            return state;
    }
}