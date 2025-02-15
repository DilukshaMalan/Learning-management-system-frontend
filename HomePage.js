// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const studentName = localStorage.getItem('studentName');

  return (
   
     <div>
        <nav className="home-nav">
         
         <ul>
           <li>
             <Link to="/course">Course</Link>
           </li>
           <li>
             <Link to="/exam">Exam</Link>
           </li>
           <li>
             <Link to="/result">Result</Link>
           </li>
         </ul>
       </nav>
       
    <div className="home-container">
         
      <h2>Welcome, {studentName}!</h2>
      <div className="modules-container">
        <div className="module-box">
          <h3>Robotics</h3>
          <p>Ongoing Course</p>
        </div>
        <div className="module-box">
          <h3>Software Engineering</h3>
          <p>Ongoing Course</p>
        </div>
        <div className="module-box">
          <h3>English</h3>
          <p>Ongoing Course</p>
        </div>
        <div className="module-box">
          <h3>Electronic Art and Design</h3>
          <p>Ongoing Course</p>
        </div>
        {/* Add more module boxes as needed */}
      </div>
    </div>
    </div>
   
  );
};

export default HomePage;
