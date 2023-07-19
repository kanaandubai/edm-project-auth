// App.tsx
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import DataTable from './components/DataTable';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users] = useState('Viewer');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DataTable users={users} />
      )}
    </div>
  );
};

export default App;
