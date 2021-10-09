import { TaskItemType, TaskState, taskTypes, UserAction } from "../types/types";
import { StatusTypesEnum } from "../constants/constans";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const time = moment().format("MMMM Do YYYY, h:mm:ss a");

export const initialState: TaskState = {
    todos: [
        {
            id: uuidv4(),
            title: "1",
            status: StatusTypesEnum.INACTIVE,
            expiredAt: time,
            categoryId: 1,
            taskNumber: 1,
            description: "I need to be more... LOREM!!! WHY? BECAUSE I WAS THE BEST"
        },
        {
            id: uuidv4(),
            title: "2",
            status: StatusTypesEnum.COMPLETED,
            expiredAt: time,
            categoryId: 1,
            taskNumber: 2,
            description: "I need to be more... LOREM!!! WHY? BECAUSE I WAS THE BEST"
        },
        {
            id: uuidv4(),
            title: "3",
            status: StatusTypesEnum.EXPIRED,
            expiredAt: time,
            categoryId: 2,
            taskNumber: 3,
            description: "I need to be more... LOREM!!! WHY? BECAUSE I WAS THE BEST"
        },
        {
            id: uuidv4(),
            title: "4",
            status: StatusTypesEnum.PENDING,
            expiredAt: time,
            categoryId: 2,
            taskNumber: 4,
            description: "I need to be more... LOREM!!! WHY? BECAUSE I WAS THE BEST"
        },
        {
            id: uuidv4(),
            title: "5",
            status: StatusTypesEnum.PENDING,
            expiredAt: time,
            categoryId: 3,
            taskNumber: 5,
            description: "I need to be more... LOREM!!! WHY? BECAUSE I BECAME THE BEST"
        },
        {
            id: uuidv4(),
            title: "6",
            status: StatusTypesEnum.ALL,
            expiredAt: time,
            categoryId: 3,
            taskNumber: 6,
            description: "I need to be more... LOREM!!! WHY? BECAUSE I BECAME THE BEST"
        },
    ],
};

export const tasksListReducer = (state = initialState, action: UserAction): TaskState => {
    switch (action.type) {
        case taskTypes.ADD_TASK:
            return { ...state, todos: [...state.todos, action.payload] };
        case taskTypes.DELETE_TASK:
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload.id) };
        case taskTypes.EDIT_TASK:
            // return { ...state, todos: [...state.todos.map(), action.payload]};
        case taskTypes.RETURN_FILTERED_TODOS:
            return { ...state, todos: [...state.todos.filter((todo) => todo.categoryId === action.payload.categoryId)]};
            case taskTypes.RETURN_FILTERED_TASKS:
            return { ...state, todos: [...state.todos.filter((todo) => todo.taskNumber === action.payload.taskNumber)]};
        case taskTypes.FILTER_STATUS_FILTER:
            return {...state, todos: [...state.todos.filter((todo) => todo.status === action.payload.status)]}
        case taskTypes.SELECT_TASK:
            return {...state, todos: [...state.todos.filter((todo) => todo.id === action.payload.id)]}
        default:
            return state;
    }
};

// store.subscribe(() => console.log(store.getState()))
