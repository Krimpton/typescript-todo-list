import React, { FC } from "react";
import "./auth.scss";
import Button from "../../tasks-details/buttons/main-button/main-button";
import { Field, Form, Formik } from "formik";

const Auth: FC = () => {
    return (
        <div className="page-wrapper d-flex justify-content-center">
            <div className="login-wrapper">
                <Formik
                    initialValues={{
                        firstName: "",
                        expiredAt: "",
                        description: "",
                    }}
                    onSubmit={() => {}}
                >
                    <Form
                        className={
                            "auth-form d-flex justify-content-center align-items-center flex-md-column"
                        }
                    >
                        <label className={"auth-title"} htmlFor="authInput">
                            Login:
                        </label>
                        <div>
                            <Field className={"auth-input"} id="authInput" name="authInput" />
                        </div>
                        <label className={"auth-pass"} htmlFor="authPass">
                            Password:
                        </label>
                        <div>
                            <Field className={"auth-pass-input"} id="authPass" name="authPass" />
                        </div>
                    </Form>
                </Formik>

                <Button
                    text={"Login"}
                    singleButton={"material-icons-margin-0"}
                    classNames={"login-button"}
                />
            </div>
        </div>
    );
};

export default Auth;
