// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import AdminPage from './AdminPage';
import RegisterPage2 from './RegisterTest';
import AddResultPage from './AddResult';
import RegisterPage3 from './AddUser';
import './App.css'; 



const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div div className="App">
     
       
        <Routes>
          <Route path="/admin" element={loggedInUser ? <AdminPage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/student" element={loggedInUser ? <HomePage />  : <LoginPage onLogin={handleLogin} />} />
          <Route path="/register-student" element={loggedInUser ? <RegisterPage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/add-result" element={loggedInUser ? <AddResultPage /> : <LoginPage onLogin={handleLogin} />} />
          {/* Add your registration component here */}
          <Route path="/register" element={<RegisterPage3 />} />
          <Route
            path="/home"
            element={loggedInUser ? <HomePage /> : <Navigate to="/student" />}
            
          />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
