import React, { useState } from "react";
import "./button-dropdown-main.scss";

import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useHistory } from "react-router-dom";

export type iProps = {
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

    const handleClick = () => {
        history.push("/tasksList");
    };
    const handleClick1 = () => {
        history.push("/dashboard");
    };
    const handleClick2 = () => {
        history.push("/tasksDetails");
    };
    const handleClick3 = () => {
        history.push("/auth");
    };
    const handleClick4 = () => {
        history.push("/page404");
    };

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className={classNames}>
            <DropdownToggle className="text-toggle d-flex justify-content-center align-items-center">
                <span className="action-title">{iName}</span>
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
                        onClick={handleClick}
                    >
                        {action0}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClick1}
                    >
                        {action1}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClick2}
                    >
                        {action2}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClick3}
                    >
                        {action3}
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item d-flex justify-content-center align-items-center"
                        onClick={handleClick4}
                    >
                        {action4}
                    </DropdownItem>
                </div>
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default ButtonDropdownMain;