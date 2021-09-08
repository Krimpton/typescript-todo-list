import React, { FC } from "react";
import "./page-buttons.scss";
import Button from "../../layouts/tasks-details/buttons/main-button/main-button";

const PageButtons: FC = () => {
    return (
        <div className="button-list d-flex justify-content-center align-items-center">
            <Button
                text={"1"}
                classNames={"pagination-button"}
                singleButton={"material-icons-margin-0"}
            />

            <Button
                text={"2"}
                classNames={"pagination-button"}
                singleButton={"material-icons-margin-0"}
            />

            <Button
                text={"..."}
                classNames={"pagination-button"}
                singleButton={"material-icons-margin-0"}
            />

            <Button
                text={"10"}
                classNames={"pagination-button"}
                singleButton={"material-icons-margin-0"}
            />
        </div>
    );
};

export default PageButtons;