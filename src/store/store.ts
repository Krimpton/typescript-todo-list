import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/combine-reducers";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import {useHistory} from "react-router-dom";

export type ButtonProps = {
    text?: string;
    classNames?: string;
    mIcons?: string;
    action?: (data: any) => void;
    singleButton?: any;
}



export const HandleAction = () => {

}


export type complete = string[];
export type incomplete = string[];

export interface storeType {
    complete: complete;
    incomplete: incomplete;
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))