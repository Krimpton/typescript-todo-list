import { TaskBlockState, taskBlockTypes, UserBlockAction } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { IconsTypesEnum } from "../constants/constans";

export const initialState: TaskBlockState = {
    block: [
        {
            id: uuidv4(),
            icon: IconsTypesEnum.LIST,
            title: "All tasks",
            categoryId: 1,
            taskLength: 50,
        },
        {
            id: uuidv4(),
            icon: IconsTypesEnum.PAID,
            title: "Rust",
            categoryId: 2,
            taskLength: 21,
        },
        {
            id: uuidv4(),
            icon: IconsTypesEnum.SAVINGS,
            title: "Supermarket",
            categoryId: 3,
            taskLength: 21,
        },
    ],
};

export const tasksBlockReducer = (state = initialState, action: UserBlockAction): TaskBlockState => {
    switch (action.type) {
        case taskBlockTypes.ADD_TASK_BLOCK:
            return { ...state, block: [...state.block, action.payload] };
        default:
            return state;
    }
};
