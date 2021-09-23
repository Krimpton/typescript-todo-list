import { IconsTypesEnum, StatusTypesEnum } from "../constants/constans";

// **********************************************************************************
// TASK LIST REDUCER
// **********************************************************************************

export enum taskTypes {
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    EDIT_TASK = "EDIT_TASK",
    RETURN_FILTERED_TODOS = "RETURN_FILTERED_TODOS",
}

export interface TaskState {
    todos: TaskItemType[] | [];
}

export type TaskItemType = {
    id?: number;
    title?: string;
    status?: StatusTypesEnum;
    expiredAt?: string;
    categoryId?: number
};

export interface UserAction {
    type: string;
    payload?: any;
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
    categoryBlockId: number;
    taskLength: number;
};

export type UserBlockAction = { 
    type: string;
    payload?: any;
};