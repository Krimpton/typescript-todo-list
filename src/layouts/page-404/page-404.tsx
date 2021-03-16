import React from "react";
import "./page-404.scss"

const PageNotFound:React.FC = () => {
    return (<div className="not-found-wrapper">
            <h1>Oops, Error 404! Page not found!</h1>
        <h6>Something went wrong or current page doesn’t exist.</h6>
        <span>Back to home page</span>
    </div>)
}

export default PageNotFound