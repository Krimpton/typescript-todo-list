import React, {useState} from "react";
import "./button-dropdown.scss"

export type MIconsComponent = {
    mText?: string;
    classNames?: string;
    mIcon?: string;
    action?: (data: any) => void;
}

const ButtonDropdown: React.FC<MIconsComponent> = ({action, classNames, mIcon, mText, children}) => {

    const [dropdownOpen, setOpen] = useState<boolean>(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (<div className={`button-dropdown-wrapper d-flex justify-content-center align-items-center ${classNames  || ''} `} onClick={action}>
        {children}
        <p className="mName d-flex justify-content-center align-items-center">{mText}</p>
        <span className="material-icons dropdown-button d-flex justify-content-center align-items-center">{mIcon}</span>

        <div onClick={() => !dropdownOpen}>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
        </div>

    </div>)
}

export default ButtonDropdown