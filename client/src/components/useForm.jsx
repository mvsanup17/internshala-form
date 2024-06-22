import { useState } from 'react';
import useValidation from './useValidation';

const useForm = (callback) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: '',
  });
  const [errors, setErrors] = useState({});

  const { validate } = useValidation(values);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setValues((prevState) => ({
        ...prevState,
        additionalSkills: checked
          ? [...prevState.additionalSkills, value]
          : prevState.additionalSkills.filter((skill) => skill !== value),
      }));
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
