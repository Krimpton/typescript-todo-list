import React, { useState } from "react";
import "./button-dropdown-main.scss";

import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useHistory } from "react-router-dom";
// @ts-ignore
import ruster from "../../assets/photos/ruster.jpg";

export type iProps = {
    value?: any;
    action?: (data: any) => void;
    classNames?: string;
    iName?: string;
    iIcons?: string;
    toggle?: any;
    actionName?: string;
    action0?: string;
    action1?: string;
    action2?: string;
    action3?: string;
    action4?: string;
};

const ButtonDropdownMain: React.FC<iProps> = ({
    value,
    action,
    classNames,
    iName,
    iIcons,
    action0,
    action1,
    action2,
    action3,
    action4,
    actionName,
}) => {
    const [dropdownOpen, setOpen] = useState<boolean>(false);

    const toggle = () => setOpen(!dropdownOpen);

    const history = useHistory();

    const handleClickDashboard = () => {
        history.push("/dashboard");
    };
    const handleClickTasksList = () => {
        history.push("/tasksList");
    };
    const handleClickTasksDetails = () => {
        history.push("/tasksDetails");
    };
    const handleClickAuth = () => {
        history.push("/auth");
    };
    const handleClickPageError = () => {
        history.push("/pageError");
    };

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className={classNames}>
            <DropdownToggle className="text-toggle d-flex justify-content-center align-items-center">
                <span className="action-title">{iName}</span>
                <span className="material-icons header-arrow">keyboard_arrow_down</span>
                <span className="material-icons dropdown-material">{iIcons}</span>
            </DropdownToggle>
            <DropdownMenu>
                <div className="dropdown-items">
                    <DropdownItem
                        className="disabled-dropdown-item d-flex justify-content-center align-items-center"
                        disabled
                    >
                        {actionName}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClickDashboard}
                    >
                        {action0}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClickTasksList}
                    >
                        {action1}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClickTasksDetails}
                    >
                        {action2}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClickAuth}
                    >
                        {action3}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClickPageError}
                    >
                        {action4}
                    </DropdownItem>
                </div>
            </DropdownMenu>
            <img className="photo-ruster" src={ruster} alt="ruster" onClick={toggle} />
        </ButtonDropdown>
    );
};

export default ButtonDropdownMain;
