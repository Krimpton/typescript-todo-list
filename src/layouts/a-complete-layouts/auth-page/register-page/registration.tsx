import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from "../form-page/form";
import { useHistory } from "react-router-dom";
import { UserAuthActionTypes } from "../../../../store/types/types";

const Registration: FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const loginRedirect = () => {
    history.push("/login")
  }

  const handleRegister = (email: string, password: string) => {
  const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch({
          type: UserAuthActionTypes.SET_USER,
          payload: {
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }});
        history.push("/");
        console.log(handleRegister);
      })
      .catch(console.error)
  }

  return (
    <Form title={"Go to login"} handleClick={handleRegister} redirect={loginRedirect} question={"Already signed up?"}/>
  );
};

export default Registration;