import * as React from "react";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {IArticle} from "../../actions/actions-type/types";
import {TaskProps} from "../../store";


export const Article: React.FC<TaskProps> = ({article, removeArticle}) => {
    const dispatch: Dispatch<any> = useDispatch();


    const deleteArticle = React.useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    );

    return (
        <div className="Article">
            <div>
                <h1>{article.title}</h1>
                {/*<p>{article.body}</p>*/}
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    );
};
