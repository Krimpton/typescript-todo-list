import * as actionTypes from "../actions/actions-type/actionTypes";
import {ArticleAction, ArticleState, IArticle} from "../actions/actions-type/types";

const initialState: ArticleState = {
    articles: [
        {id: 1, title: 'Lorem ipsum dolor', body: 'LOREM_X1!', status: 'Pending'},
        // {id: 2, title: 'Lorem ipsum dolor', body: 'LOREM_X2!', status: 'Completed'},
        // {id: 2, title: 'Lorem ipsum dolor', body: 'LOREM_X2!', status: 'Expired'},
        // {id: 2, title: 'Lorem ipsum dolor', body: 'LOREM_X2!', status: 'Inactive'},
    ]
}

export const reducer = (state: ArticleState = initialState, action: ArticleAction): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body,
                status: action.article.status
            };
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            };
        case actionTypes.REMOVE_ARTICLE:
            const updateArticles: IArticle[] = state.articles.filter(
                (article) => article.id !== action.article.id
            );
            return {...state, articles: updateArticles}
        default:
            return state;
    }
}