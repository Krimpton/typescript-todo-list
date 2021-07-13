import {applyMiddleware, createStore, Store} from "redux";
import {reducer} from "./reducers/reducer";
import thunk from "redux-thunk";
import {ArticleAction, ArticleState, DispatchType, IArticle} from "./actions/actions-type/types";

export type ButtonProps = {
    text?: string;
    classNames?: string;
    mIcons?: string;
    action?: (data: any) => void;
    singleButton?: any;
}

export type TaskProps = {
    article: IArticle;
    removeArticle: (article: IArticle) => void;
};

export const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));