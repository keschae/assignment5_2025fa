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
