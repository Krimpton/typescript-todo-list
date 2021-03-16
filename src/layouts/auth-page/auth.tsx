import React from "react";
import "./auth.scss"
import AuthButton from "./auth-button/auth-button";

const Auth: React.FC = () => {
    return (<div className="login-wrapper d-flex">
        <div className="first-login-element">
            <div>Login:</div>
            <input type="text"/>
        </div>
        <div className="second-login-element">
            <div>Password:</div>
            <input type="password"/>
        </div>

        <AuthButton/>

    </div>)
}

export default Auth