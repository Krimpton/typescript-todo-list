import { TaskState, taskTypes, UserAction } from "../types/types";
import { StatusTypesEnum } from "../constants/constans";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const time = moment().format("MMMM Do YYYY, h:mm:ss a");

export const initialState: TaskState = {
    todos: [
        {
            id: uuidv4(),
            title: "Play Rust",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
            categoryId: 1,
        },
        {
            id: uuidv4(),
            title: "Drink Coffee",
            status: StatusTypesEnum.COMPLETED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Call Mark",
            status: StatusTypesEnum.EXPIRED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Play Rust",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
            categoryId: 1,
        },
        {
            id: uuidv4(),
            title: "Drink Coffee",
            status: StatusTypesEnum.COMPLETED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Call Mark",
            status: StatusTypesEnum.EXPIRED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Play Rust",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
            categoryId: 1,
        },
        {
            id: uuidv4(),
            title: "Drink Coffee",
            status: StatusTypesEnum.COMPLETED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Call Mark",
            status: StatusTypesEnum.EXPIRED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Play Rust",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
            categoryId: 1,
        },
        {
            id: uuidv4(),
            title: "Drink Coffee",
            status: StatusTypesEnum.COMPLETED,
            expiredAt: time,
            categoryId: 2,
        },
        {
            id: uuidv4(),
            title: "Call Mark",
            status: StatusTypesEnum.EXPIRED,
            expiredAt: time,
            categoryId: 2,
        },
    ],
};

export const tasksListReducer = (state = initialState, action: UserAction): TaskState => {
    switch (action.type) {
        case taskTypes.ADD_TASK:
            return { ...state, todos: [...state.todos, action.payload] };
        case taskTypes.DELETE_TASK:
            return { ...state, todos: state.todos.filter((todos) => todos.id !== action.payload) };
        case taskTypes.EDIT_TASK:
            return { ...state, todos: state.todos.filter((todos) => todos.id !== action.payload) };
        case taskTypes.RETURN_FILTERED_TODOS:
            return { ...state, todos: state.todos.filter((category) => [category.categoryId = action.payload])};
        default:
            return state;
    }
};

// store.subscribe(() => console.log(store.getState()))
