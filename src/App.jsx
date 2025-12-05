import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from "./components/UserLIst.jsx";
import UserProfile from "./components/UserProfile.jsx";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setError(null);
      })
      .catch(err => {
        setError('Failed to fetch users');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // The empty array [] means this effect runs only once, when the component mounts.

  // Event handler to be passed to UserList
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Weather Dashboard</h1>
      </header>
      <div className="dashboard-container">
        <div className="user-list-panel">
          <h2>Users</h2>
          {loading && <p>Loading users...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && <UserList users={users} onUserSelect={handleUserSelect} />}
        </div>
        
        {/* CONDITIONAL RENDERING: This section only shows if a user is selected */}
        {selectedUser && (
          <div className="user-profile-panel">
            <UserProfile user={selectedUser} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
