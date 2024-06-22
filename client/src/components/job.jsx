import React from 'react';
import useForm from '../components/useForm.jsx';

const JobApplicationForm = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(submitForm);

  function submitForm() {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={values.fullName} onChange={handleChange} />
                    {errors.fullName && <p>{errors.fullName}</p>}
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div className="mb-3">
                    <label>Applying for Position:</label>
                    <select name="position" value={values.position} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    </select>
                    {errors.position && <p>{errors.position}</p>}
                </div>
                {(values.position === 'Developer' || values.position === 'Designer') && (
                    <div className="mb-3">
                    <label>Relevant Experience (Number of years):</label>
                    <input type="number" name="relevantExperience" value={values.relevantExperience} onChange={handleChange} />
                    {errors.relevantExperience && <p>{errors.relevantExperience}</p>}
                    </div>
                )}
                {values.position === 'Designer' && (
                    <div className="mb-3">
                    <label>Portfolio URL:</label>
                    <input type="text" name="portfolioURL" value={values.portfolioURL} onChange={handleChange} />
                    {errors.portfolioURL && <p>{errors.portfolioURL}</p>}
                    </div>
                )}
                {values.position === 'Manager' && (
                    <div className="mb-3">
                    <label>Management Experience:</label>
                    <input type="text" name="managementExperience" value={values.managementExperience} onChange={handleChange} />
                    {errors.managementExperience && <p>{errors.managementExperience}</p>}
                    </div>
                )}
                <div className="mb-3">
                    <label>Additional Skills:</label>
                    <div>
                    <label>
                        <input type="checkbox" name="additionalSkills" value="JavaScript" checked={values.additionalSkills.includes('JavaScript')} onChange={handleChange} />
                        JavaScript
                    </label>
                    <label>
                        <input type="checkbox" name="additionalSkills" value="CSS" checked={values.additionalSkills.includes('CSS')} onChange={handleChange} />
                        CSS
                    </label>
                    <label>
                        <input type="checkbox" name="additionalSkills" value="Python" checked={values.additionalSkills.includes('Python')} onChange={handleChange} />
                        Python
                    </label>
                    {/* Add more checkboxes as needed */}
                    </div>
                    {errors.additionalSkills && <p>{errors.additionalSkills}</p>}
                </div>
                <div className="mb-3">
                    <label>Preferred Interview Time:</label>
                    <input type="datetime-local" name="interviewTime" value={values.interviewTime} onChange={handleChange} />
                    {errors.interviewTime && <p>{errors.interviewTime}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    
  );
};

export default JobApplicationForm;
