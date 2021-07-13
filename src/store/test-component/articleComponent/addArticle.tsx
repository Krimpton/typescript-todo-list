import * as React from "react";
import {IArticle} from "../../actions/actions-type/types";

type Props = {
    saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
    const [article, setArticle] = React.useState<IArticle | {}>();

    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();
        saveArticle(article);
    };

    return (
        <form onSubmit={addNewArticle} className="Add-article">
            <input
                type="text"
                id="title"
                placeholder="Task Name"
                onChange={handleArticleData}
            />
            {/*<input*/}
            {/*    type="text"*/}
            {/*    id="body"*/}
            {/*    placeholder="Description"*/}
            {/*    onChange={handleArticleData}*/}
            {/*/>*/}
            <button disabled={article === undefined}>
                Add task
            </button>
        </form>
    );
};
