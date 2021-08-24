import {TaskBlockState, taskBlockTypes, UserBlockAction} from "../types/types";
import {v4 as uuidv4} from "uuid";

export const initialState: TaskBlockState = {
    block: [
        {
            id: uuidv4(),
            icon: "list",
            title: "wow",
            taskLength: 20,
        },
        {
            id: uuidv4(),
            icon: "list",
            title: "wow",
            taskLength: 20,
        },
        {
            id: uuidv4(),
            icon: "list",
            title: "wow",
            taskLength: 20,
        },
    ],
};

export const tasksBlockReducer = (state = initialState, action: UserBlockAction): TaskBlockState => {
    switch (action.type) {
        case taskBlockTypes.ADD_TASK_BLOCK:
            return {...state, block: [...state.block, action.payload]};
        default:
            return state;
    }
};