import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  // State to hold the list of all users
  const [users, setUsers] = useState([]);
  // State to hold the user that is currently selected
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Fetch users from the API when the component mounts
  // Hint: Use the useEffect hook with an empty dependency array []

  // TODO: Create an event handler function `handleUserSelect`
  // This function should take a `user` object and call `setSelectedUser(user)`

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Weather Dashboard</h1>
      </header>
      <div className="dashboard-container">
        <div className="user-list-panel">
          <h2>Users</h2>
          {/* TODO: Render the UserList component here */}
          {/* Pass the `users` state and the `handleUserSelect` function as props */}
        </div>
        
        {/* TODO: Add conditional rendering here */}
        {/* The UserProfile component should only be rendered if `selectedUser` is not null */}
        {/* Pass the `selectedUser` object as a prop */}
      </div>
    </div>
  );
}

export default App;