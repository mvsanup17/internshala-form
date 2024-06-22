const useValidation = (values) => {
    const validate = (values) => {
      let errors = {};
  
      if (!values.fullName) {
        errors.fullName = 'Full Name is required';
      }
  
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
  
      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required';
      } else if (isNaN(values.phoneNumber)) {
        errors.phoneNumber = 'Phone Number must be a valid number';
      }
  
      if ((values.position === 'Developer' || values.position === 'Designer') && !values.relevantExperience) {
        errors.relevantExperience = 'Relevant Experience is required';
      } else if ((values.position === 'Developer' || values.position === 'Designer') && isNaN(values.relevantExperience)) {
        errors.relevantExperience = 'Relevant Experience must be a number';
      }
  
      if (values.position === 'Designer' && !values.portfolioURL) {
        errors.portfolioURL = 'Portfolio URL is required';
      } else if (values.position === 'Designer' && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)) {
        errors.portfolioURL = 'Portfolio URL must be a valid URL';
      }
  
      if (values.position === 'Manager' && !values.managementExperience) {
        errors.managementExperience = 'Management Experience is required';
      }
  
      if (!values.additionalSkills || values.additionalSkills.length === 0) {
        errors.additionalSkills = 'At least one skill must be selected';
      }
  
      if (!values.interviewTime) {
        errors.interviewTime = 'Preferred Interview Time is required';
      } else if (isNaN(Date.parse(values.interviewTime))) {
        errors.interviewTime = 'Preferred Interview Time must be a valid date and time';
      }
  
      return errors;
    };
  
    return { validate };
  };
  
  export default useValidation;
  