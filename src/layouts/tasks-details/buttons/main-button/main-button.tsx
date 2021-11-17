import React from "react";
import "./main-button.scss";

export type ButtonProps = {
    text?: [] | any;
    classNames?: string;
    mIcons?: string;
    action?: (data: any) => void;
    singleButton?: any;
    disabled?: any;
};

const Button: React.FC<ButtonProps> = ({
    text,
    classNames,
    children,
    action,
    mIcons,
    singleButton,
  disabled,
}) => {
    return (
        <button className={`button d-flex justify-content-center align-items-center  ${classNames || ""} `}
            onClick={action}
                disabled={disabled}
        >
            {children}
            <span className={`material-icons ${singleButton || ""}`}>{mIcons}</span>
            <span className="button-text d-flex justify-content-center align-items-center">
                {text}
            </span>
        </button>
    );
};

export default Button;