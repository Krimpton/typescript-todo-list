import React from "react";
import "./input-component.scss";
import { InputDetailsProps } from "../../layouts/tasks-details/tasks-details";
import { Formik, Field, Form } from "formik";

const InputComponent: React.FC<InputDetailsProps> = ({ inputTitle, expiredAt }) => {
    return (
        <div className="input-wrapper">
            <Formik
                initialValues={{
                    firstName: "",
                    expiredAt: "",
                }}
                onSubmit={() => {}}
            >
                <Form>
                    <label className={"default-title"} htmlFor="firstName">
                        {inputTitle}
                    </label>
                    <div>
                        <Field className={"default-input"} id="firstName" name="firstName" />
                    </div>

                    <label className={"default-title"} htmlFor="expiredAt">
                        {expiredAt}
                    </label>
                    <div>
                        <Field className={"default-input"} id="expiredAt" name="expiredAt" />
                    </div>

                    <div>
                        <Field
                            className={"description-input"}
                            id="description"
                            name="description"
                        />
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default InputComponent;