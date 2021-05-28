import React from "react";
import "./header.scss";
// @ts-ignore
import ruster from "./ruster.jpg"
import ButtonDropdownTest from "../../button-dropdown-button/button-dropdown-test";

const Header: React.FC = () => {
    return (<div className="block__row d-flex justify-content-center align-items-center">

        <span className="header-logo">ToDo</span>


        <ButtonDropdownTest classNames={"header-dropdown"} iName={"James Smith"} iIcons={"keyboard_arrow_down"} actionName={"User actions:"} action0={"Tasks List"} action1={"Dashboard"} action2={"Tasks Details"} action3={"Auth Page"} action4={"Page 404"}/>

        <img className="photo-ruster" src={ruster} alt="ruster"/>

    </div>)
}

export default Header;