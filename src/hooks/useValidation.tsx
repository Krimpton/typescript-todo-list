import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [formValid, setFormValid] = useState(false);

  const [isEmpty, setIsEmpty] = useState(false);
  const [empty, setEmpty] = useState("");

  const [isMinLength, setIsMinLength] = useState(false);
  const [minLength, setMinLength] = useState("");

  const [isMaxLength, setIsMaxLength] = useState(false);
  const [maxLength, setMaxLength] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation] ? setIsMinLength(true) : setIsMinLength(false);
          setMinLength("minLength");
          break;
        case "maxLength":
          value.length > validations[validation] ? setIsMaxLength(true) : setIsMaxLength(false);
          setMaxLength("maxLength");
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          setEmpty("isEmpty");
          break;
        case "email":
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase()) ? setIsEmailError(false) : setIsEmailError(true);
          setEmailError("Некоректный email");
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || isMaxLength || isMinLength) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [isEmpty, isMaxLength, isMinLength]);

  return {
    formValid,

    isEmpty,
    empty,

    isMinLength,
    minLength,

    isMaxLength,
    maxLength,

    isEmailError,
    emailError
  };

};


export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};
