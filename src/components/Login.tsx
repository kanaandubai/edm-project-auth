// components/Login.tsx
import React, { useState } from 'react';
import '../styles/login.scss'; // Correct relative import path

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement password validation logic here
    if (password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[!@#$%^&*()_+]/)) {
      setErrorMessage('Password must have at least 8 characters with at least 1 uppercase, 1 lowercase, and 1 special character.');
    } else {
      // Perform login action here
      setErrorMessage('');
      onLoginSuccess();
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
      <div className="input-wrapper">

        <input
        className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>

        <div className="input-wrapper">
        <input
        className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
