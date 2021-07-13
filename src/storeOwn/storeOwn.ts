import {reducerOwn} from "./reducerOwn/reducerOwn";
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
export type ButtonProps = {
    text?: string;
    classNames?: string;
    mIcons?: string;
    action?: (data: any) => void;
    singleButton?: any;
}

export const storeOwn = createStore(reducerOwn, composeWithDevTools(
    applyMiddleware(),
));