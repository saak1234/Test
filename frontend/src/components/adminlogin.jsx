import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css'

// eslint-disable-next-line react/prop-types
const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Define the admin credentials
    const adminCredentials = {
      username: 'admin',
      password: 'admin123'
    };

    // Check if the entered credentials match the predefined admin credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
      toast.success('Login successful!');
      
      // Trigger the login success handler passed via props
      onLoginSuccess(); // This will set `isLoggedIn` to true in App.js

      // Redirect to the admin dashboard
      setTimeout(() => {
        navigate('/admin');
      }, 1000);
    } else {
      toast.error('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default AdminLogin;
