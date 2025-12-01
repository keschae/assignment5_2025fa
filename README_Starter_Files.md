### **Part 3: Starter Code**

Copy and paste the following code into the corresponding files in your StackBlitz project.

**`src/App.js`**
```javascript
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
```

**`src/components/UserList.js`**
```javascript
import React from 'react';

// TODO: Destructure `users` and `onUserSelect` from props
const UserList = (props) => {
  return (
    <ul>
      {/* TODO: Use the .map() function to iterate over the `users` array */}
      {/* For each user, render an <li> element */}
      {/* The <li> should have an onClick handler that calls `onUserSelect` with the user */}
      {/* Don't forget the `key` prop! */}
    </ul>
  );
};

export default UserList;
```

**`src/components/UserProfile.js`**
```javascript
import React from 'react';
import PostList from './PostList';
import WeatherWidget from './WeatherWidget';

// TODO: Destructure the `user` object from props
const UserProfile = (props) => {
  // You can also destructure nested properties for convenience
  // const { name, email, address } = user;

  return (
    <div className="profile-card">
      {/* TODO: Display user details like name, email, etc. */}
      <h2>User Name</h2>
      
      <hr />
      
      {/* TODO: Render the WeatherWidget component */}
      {/* Pass the user's city as a prop. Hint: `user.address.city` */}
      
      <hr />

      {/* TODO: Render the PostList component */}
      {/* Pass the user's id as a prop. Hint: `user.id` */}
    </div>
  );
};

export default UserProfile;
```

**`src/components/PostList.js`**
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Destructure `userId` from props
const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Use useEffect to fetch posts whenever the `userId` prop changes
  // The dependency array should include `userId`

  return (
    <div>
      <h3>Recent Posts</h3>
      {loading && <p>Loading posts...</p>}
      <ul>
        {/* TODO: Use the .map() function to render the list of posts */}
      </ul>
    </div>
  );
};

export default PostList;
```

**`src/components/WeatherWidget.js`**
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Destructure `city` from props
const WeatherWidget = (props) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Use useEffect to fetch weather data whenever the `city` prop changes
  // The dependency array should include `city`
  // Use `process.env.REACT_APP_OPENWEATHER_API_KEY` for your API key

  // TODO: Add conditional rendering for loading, error, and success states

  return (
    <div className="weather-widget">
      {/* This is where you will render the weather data */}
      <p>Weather widget will go here.</p>
    </div>
  );
};

export default WeatherWidget;
```

**`src/App.css`**
*(You can copy the full CSS from the previous response into this file)*
