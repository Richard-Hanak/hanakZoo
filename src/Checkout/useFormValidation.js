import { useState, useEffect } from "react";

function useFormValidation(initialState, validate, func, ifContact, setThx) {
  const [wasWrong, setWasWrong] = useState(false);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors && !!!ifContact) {
        func();
      } else if (noErrors && ifContact == "payment") {
        func();
      } else if (noErrors && ifContact == "message") {
        setThx(true);
        fetch("/send", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status === "success") {
              setConfirmSubmit(true);
            }
          });
      }
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  function handleChange(event) {
    console.log(values);
    if (wasWrong) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      const validationErrors = validate(values, undefined, ifContact);
      if (errors[event.target.name]) {
        console.log(errors);
        setErrors(validationErrors);
      }
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      const validationErrors = validate(values, event.target.name, ifContact);
      if (errors[event.target.name]) {
        console.log(errors);
        setErrors(validationErrors);
      }
    }
  }

  function handleBlur(event) {
    if (wasWrong) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      const validationErrors = validate(values, undefined, ifContact);
      setErrors(validationErrors);
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      const validationErrors = validate(values, event.target.name, ifContact);
      setErrors(validationErrors);
    }
  }

  function handleSubmit() {
    const validationErrors = validate(values, undefined, ifContact);
    setErrors(validationErrors);
    setSubmitting(true);
    setWasWrong(true);
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    confirmSubmit,
    handleBlur,
  };
}

export default useFormValidation;
