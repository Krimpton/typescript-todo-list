import React, { FC, useState } from "react";
import "./form.scss";
import Button from "../../../tasks-details/buttons/main-button/main-button";
import { useHistory } from "react-router-dom";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
  redirect: any;
  question: string;
}

const Form: FC<FormProps> = ({title, handleClick, redirect, question}) => {
  const history = useHistory();

  const dashboardRedirect = () => {
    history.push("/dashboard");
  };

  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  return (
    <div className="page-wrapper d-flex justify-content-center">
      <div className="login-wrapper">
        <div className={"auth-form d-flex justify-content-center align-items-center flex-md-column"}>
          <label className={"auth-title"} htmlFor="authInput">
             Login:
          </label>
          <div>
            <input className={"auth-input"} type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="email"/>
          </div>
          <label className={"auth-pass"} htmlFor="authPass">
             Password:
          </label>
          <div>
            <input className={"auth-pass-input"} type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   placeholder="password"/>
          </div>
        </div>
        <Button
          text={"Send"}
          singleButton={"material-icons-margin-0"}
          classNames={"login-button"}
          action={() => handleClick(email, password)}
        />
        <div className="auth-return-button">
          <Button
            text="Return"
            classNames={"return-button"}
            action={dashboardRedirect}
          />
        </div>
        <div className={"mt-2 d-flex justify-content-center"}>{question}<p onClick={redirect} className={"sign-up ml-2"}>{title}</p></div>
      </div>
    </div>
  );
};

export default Form;