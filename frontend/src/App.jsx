import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserForm from './components/form'; // Import your User Form component
import { useState } from 'react';
import AdminDashboard from './components/admin'; // Import your Admin Dashboard component
import AdminLogin from './components/adminlogin';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserForm />} /> {/* Route for User Form */}
          <Route path="/admin/login" element={<AdminLogin onLoginSuccess={handleLoginSuccess} />} />  {/* Admin login route */}
          <Route path="/admin" element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/admin/login" />} /> {/* Admin Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
