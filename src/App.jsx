import { useState } from 'react'
export default function App() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    gender: '',
    acceptTerms: false,
    age: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';   
  }
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(formData.age) < 20 ) {
      newErrors.age = 'You must be at least 20 years old to register';
    }
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Form submitted successfully!');
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      country: '',
      gender: '',
      acceptTerms: false,
      age: ''
    });
    setErrors({});
    setSuccessMessage('');
  };


  return (
    <div>
      <h1>Registration Form</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}  
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
             <option value="INDIA">INDIA</option>
          </select>
          {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
        </div>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>
        <div>
          <label>
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} /> I accept the terms and conditions
          </label>
          {errors.acceptTerms && <p style={{ color: 'red' }}>{errors.acceptTerms}</p>}
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
} 

