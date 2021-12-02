import { IconsTypesEnum, StatusTypesEnum } from "../constants/constans";

export const initialCategory = 4;

// **********************************************************************************
// TASK LIST REDUCER
// **********************************************************************************

export enum taskTypes {
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    EDIT_TASK = "EDIT_TASK",
    FILTER_STATUS_FILTER = "FILTER_STATUS_FILTER",
    RETURN_FILTERED_TODOS = "RETURN_FILTERED_TODOS",
    RETURN_FILTERED_TASKS = "RETURN_FILTERED_TASKS",
    SELECT_TASK = "SELECT_TASK",
    COMPLETED_STATUS = "COMPLETED_STATUS",
}

export type TaskState = {
    todos: any | [];
}

export type TaskItemType = {
    id: number;
    title?: string;
    status?: StatusTypesEnum;
    expiredAt?: string;
    categoryId?: number | undefined;
    taskNumber: number;
    description: string;
};

export interface UserAction {
    type: any;
    payload: any;
}

// **********************************************************************************
// TASK BLOCK REDUCER
// **********************************************************************************

export enum taskBlockTypes {
    ADD_TASK_BLOCK = "ADD_TASK_BLOCK",
}

export type TaskBlockState = {
    block: TaskBlockStateList[] | [];
};

export type TaskBlockStateList = {
    id: string;
    icon: IconsTypesEnum;
    title: string;
    categoryId: number;
    taskLength: number;
};

export type UserBlockAction = { 
    type: string;
    payload?: any;
};


// **********************************************************************************
// USER AUTH REDUCER
// **********************************************************************************

export enum UserAuthActionTypes {
    SET_USER = "SET_USER",
    REMOVE_USER = "REMOVE_USER",
}

// export type UserAuthState = {
//     user: UserAuthStateList[] | [];
// }

export type UserAuthState = {
    user: {
        email: null,
        token: null,
        id: null,
    };
}

// export type UserAuthStateList = {
//     email: null,
//     token: null,
//     id: null,
// }

export type UserAuthAction = {
    type: any;
    payload?: any;
}