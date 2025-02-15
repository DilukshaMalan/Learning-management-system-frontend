// AdminPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';


const AdminPage = () => {
  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/add-course">Course</Link>
          </li>
          <li>
            <Link to="/add-exam">Exam</Link>
          </li>
          <li>
            <Link to="/register-student"> Student</Link>
          </li>
          <li>
            <Link to="/add-result">Result</Link>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <h2>Admin Home</h2>
        <label>
          Search Student by Name:
          <input type="text" placeholder="Enter student name" />
          <button>Search</button>
        </label>
        <br />
        <label>
          Search Course by Name:
          <input type="text" placeholder="Enter course name" />
          <button>Search</button>
        </label>
      </div>
    </div>
  );
};

export default AdminPage;
