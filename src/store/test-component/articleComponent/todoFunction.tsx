import * as React from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";

import {Dispatch} from "redux";
import {addArticle, removeArticle} from "../../actions/actionCreators";
import {Article} from "./article";
import {AddArticle} from "./addArticle";
import {ArticleState, IArticle} from "../../actions/actions-type/types";
import "./initialStyle.scss";

const TodoFunction: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    );

    const dispatch: Dispatch<any> = useDispatch();

    const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    );


    return (
        <main>
            <AddArticle saveArticle={saveArticle}/>
            {articles.map((article: IArticle) => (
                <Article
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </main>
    );
};

export default TodoFunction;