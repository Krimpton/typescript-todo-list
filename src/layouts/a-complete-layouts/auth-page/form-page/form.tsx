import React, { FC, useEffect, useState } from "react";
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

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState("Password не может быть пустым");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
    }, [emailError, passwordError])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break;
      case 'password':
        setPasswordDirty(true)
        break;
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некоректный email')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Password должен быть > 3 и < 8 символов')
    if (!e.target.value) {
      setPasswordError('Password не может быть пустым')
    }
    } else {
      setPasswordError('')
    }
  }

  return (
    <div className="page-wrapper d-flex justify-content-center">
      <div className="login-wrapper">
        <div className={"auth-form d-flex justify-content-center align-items-center flex-md-column"}>
          <label className={"auth-title"} htmlFor="authInput">
             Login:
          </label>
          <div>
            <input onBlur={e => blurHandler(e)} className={"auth-input"} name="email" type="email" value={email} onChange={e => emailHandler(e)}
                   placeholder="email"/>
            {(emailDirty && emailError) && <div className="email-validation">{emailError}</div>}
          </div>
          <label className={"auth-pass"} htmlFor="authPass">
             Password:
          </label>
          <div>
            <input onBlur={e => blurHandler(e)} className={"auth-pass-input"} name="password" type="password" value={password} onChange={e => passwordHandler(e)}
                   placeholder="password"/>
            {(passwordDirty && passwordError) && <div className="password-validation">{passwordError}</div>}
          </div>
        </div>
        <Button
          text={"Submit"}
          singleButton={"material-icons-margin-0"}
          classNames={"login-button"}
          action={() => handleClick(email, password)}
          disabled={!formValid}
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