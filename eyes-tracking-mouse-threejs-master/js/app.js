import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './js/Login';
import Signup from './js/Signup';
import './app.css'; // Ensure styles are imported

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

function Home() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // Navigate to the login page
    };

    const handleSignup = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Canteen Monitoring System</h1>
            <button className="login-button" onClick={handleLogin}>Login</button>
            <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default App;
