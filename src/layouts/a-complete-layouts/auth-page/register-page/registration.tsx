import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Form from "../form-page/form";
import { useHistory } from "react-router-dom";
import { UserAuthActionTypes } from "../../../../store/types/types";

const Registration: FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const loginRedirect = () => {
    history.push("/login");
  };

  const [errors, setErrors] = useState();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({
          type: UserAuthActionTypes.SET_USER,
          payload: {
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          }
        });
        history.push("/");
        console.log(handleRegister);
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };

  return (
    <Form title={"Go to login"} handleClick={handleRegister} redirect={loginRedirect} question={"Already signed up?"}
          error={errors} />
  );
};

export default Registration;