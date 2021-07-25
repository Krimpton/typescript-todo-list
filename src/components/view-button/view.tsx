import React from "react";
import "./view.scss";
import Button from "../../layouts/tasks-details/buttons/main-button/main-button";

const ViewButton: React.FC = () => {
    return (
        <div className="view">
            <Button
                text={"View"}
                singleButton={"material-icons-margin-0"}
                classNames={"button-view"}
            />
        </div>
    );
};

export default ViewButton;