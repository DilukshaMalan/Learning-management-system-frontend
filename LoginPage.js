import React, { useState } from 'react';
import './LoginPage.css';
import Navbar from './components/Navbar';

const LoginPage = ({ onLogin }) => {
  const defaultUsername = ''; // Set your default username here
  const [username, setUsername] = useState(defaultUsername);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:8080/malan/students?username=${username}`);
      if (response.ok) {
        const userData = await response.json();
        console.log('Fetched user data:', userData);
        
        console.log('Fetched user data:', password);
        if (userData.length > 0) { // Ensure userData is not empty
          const firstUser = userData[0]; // Access the first object in the array
          const fetchedUsername = firstUser.password; // Access the 'name' property of the first object
          localStorage.setItem('studentName', firstUser.stdName);
          if (fetchedUsername.toString() === password) {
 
            console.log('Fetched user data:',  firstUser.stdName );
            onLogin(username);
          } else {
            console.log('Fetched user data:', firstUser.score );
            setError('Invalid username or password');
          }
        } else {
          setError('User not found');
        }
      } else {
        setError('Failed to fetch user data');
      }
    } catch (error) {
      setError('Failed to authenticate. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2>Login Page</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          
          {error && <p className="error-message">{error}</p>}
          <div className="button-container">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
