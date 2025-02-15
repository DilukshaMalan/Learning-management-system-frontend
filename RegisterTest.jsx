import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import Navbar from './components/Navbar';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    address: '',
    emailAddress: '',
    telephoneNumber: '',
    gender: 'male',
    dateOfBirth: '',
    courseName: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to the server using Axios
    axios.post('http://localhost:8080/malan/students', formData)
      .then(response => {
        console.log('Response:', response.data);
        // Optionally, you can handle success response here
      })
      .catch(error => {
        console.error('Error:', error);
        // Optionally, you can handle error response here
      });
  };

  return (
    <div>
      <Navbar />
      <div className="register-container">
        <h2>Register Page</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Student Name:
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
          </label>
          <br />

          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <br />

          <label>
            Email Address:
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
          </label>
          <br />

          <label>
            Telephone Number:
            <input type="tel" name="telephoneNumber" value={formData.telephoneNumber} onChange={handleChange} />
          </label>
          <br />

          <label>
            Gender:
            <label>Male
              <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            </label>
            <label>Female
              <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            </label>
          </label>
          <br />

          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </label>
          <br />

          <label>
            Course Name:
            <select name="courseName" value={formData.courseName} onChange={handleChange}>
              <option value="">Select Course</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </select>
          </label>
          <br />

          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <br />

          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
