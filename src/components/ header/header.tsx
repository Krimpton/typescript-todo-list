import ruster from "../main-content/ruster.jpg";
import React from "react";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="block__row">
                <div className="block__element block__element_1">
                    <div className="block__content">ToDo</div>
                </div>
                <div className="block__element block__element_2">
                    <div className="block__content">James Smith</div>
                </div>
                <div className="block__element block__element_3">
                    <div className="block__content">
                        <span className="material-icons">keyboard_arrow_down</span>
                    </div>
                </div>
                <div className="block__element block__element_4">
                    <div className="block__content">
                        <img className="user-img" src={ruster} alt="ruster"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;



