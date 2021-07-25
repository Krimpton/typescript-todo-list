import { StatusTypesEnum } from "../constants/constans";

export enum taskTypes {
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    EDIT_TASK = "EDIT_TASK",
}

export interface TaskState {
    todos: TaskItemType[] | [];
}

export type TaskItemType = {
    id: number;
    title: string;
    status: StatusTypesEnum;
    expiredAt: string;
};

export interface UserAction {
    type: string;
    payload?: any;
}
