import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../form-page/form";
import { UserAuthActionTypes } from "../../../../store/types/types";

const Login: FC = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const registrationRedirect = () => {
        history.push("/registration")
    }


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              dispatch({
                  type: UserAuthActionTypes.SET_USER,
                  payload: {
                      email: user.email,
                      id: user.uid,
                      token: user.refreshToken,
                  }});
              history.push("/");
              console.log(handleLogin);
          })
          .catch(console.error)
    }

    return (
        <Form title={"Go to registration"} handleClick={handleLogin} redirect={registrationRedirect} question={"Don't have an account?"}/>
    );
};

export default Login;
