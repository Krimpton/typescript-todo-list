import React from "react";
import "./header.scss";
import ButtonDropdownMain from "../../components/buttons-dropdown/button-dropdown-main";

const Header: React.FC = () => {
    return (
        <div className="block-row d-flex justify-content-center align-items-center">
            <span className="header-logo">ToDo</span>

            <ButtonDropdownMain
                classNames={"header-dropdown"}
                iName={"James Smith"}
                iIcons={"keyboard_arrow_down"}
                actionName={"User actions:"}
                action2={"Dashboard"}
                action0={"Login"}
                action1={"Logout"}
            />
        </div>
    );
};

export default Header;
