import React from "react";
import "./header.scss";
import ruster from "./ruster.jpg";

const Header: React.FC = () => {
    return (<div className="block__row d-flex">

            <div className="block__element_1">
                <h6>ToDo</h6>
            </div>

            <div className="block__element_2">
                <h6>James Smith</h6>
            </div>

            <div className="block__element_3">
                <span className="material-icons">keyboard_arrow_down</span>
            </div>

            <div className="block__element_4">
                <img src={ruster} alt="ruster"/>
            </div>

        </div>
    )
}

export default Header;