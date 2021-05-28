import React, {FC} from "react";
import "./page-404.scss"
import Button from "../tasks-details/buttons/main-button/main-button";

const PageNotFound: FC = () => {
    return (<div className="not-found-wrapper">
        <h1>Oops, Error 404! Page not found!</h1>
        <h6>Something went wrong or current page doesn’t exist.</h6>

        <Button text={'Back to home page'} singleButton={'material-icons-margin-0'} classNames={"button-404"}/>
    </div>)
}

export default PageNotFound