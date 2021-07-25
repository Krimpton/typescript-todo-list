import { TaskState, taskTypes, UserAction } from "../types/types";
import { StatusTypesEnum } from "../constants/constans";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

export const time = moment().format("MMMM Do YYYY, h:mm:ss a");

export const initialState: TaskState = {
    todos: [
        {
            id: uuidv4(),
            title: "Play Rust",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
        },
        {
            id: uuidv4(),
            title: "Drink Coffee",
            status: StatusTypesEnum.COMPLETED,
            expiredAt: time,
        },
        {
            id: uuidv4(),
            title: "Call Mark",
            status: StatusTypesEnum.EXPIRED,
            expiredAt: time,
        },
        {
            id: uuidv4(),
            title: "Drink Water",
            status: StatusTypesEnum.PENDING,
            expiredAt: time,
        },
        {
            id: uuidv4(),
            title: "Walk",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
        },
        {
            id: uuidv4(),
            title: "Watch YouTube",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
        },
        {
            id: uuidv4(),
            title: "Charge phone",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
        },

    ],
};

export const reducer = (state = initialState, action: UserAction): TaskState => {
    switch (action.type) {
        case taskTypes.ADD_TASK:
            return { ...state, todos: [...state.todos, action.payload] };
        // case taskTypes.DELETE_TASK:
        //     return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
        // return {...state, task: state.task.filter(taskText => taskText !== action.payload)};
        // case taskTypes.EDIT_TASK:
        //     return {...state, todos: state.todos.filter()};
        default:
            return state;
    }
};