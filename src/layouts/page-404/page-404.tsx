import React, { FC } from "react";
import "./page-404.scss";
import Button from "../tasks-details/buttons/main-button/main-button";
import { useHistory } from "react-router-dom";

const PageNotFound: FC = () => {
  const history = useHistory();

  const handleClick404 = () => {
    history.push("/dashboard");
  };

  return (
    <div className="not-found-wrapper">
      <h1>Oops, Error 404! Page not found!</h1>
      <h6>Something went wrong or current page doesn’t exist.</h6>

      <Button
        text={"Back to home page"}
        singleButton={"material-icons-margin-0"}
        classNames={"button-404"}
        action={handleClick404}
      />
    </div>
  );
};

export default PageNotFound;