import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./reducers/rootReducer";
export type ButtonProps = {
    text?: string;
    classNames?: string;
    mIcons?: string;
    action?: (data: any) => void;
    singleButton?: any;
}

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
));
