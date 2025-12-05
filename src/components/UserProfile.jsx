import React from 'react';
import PostList from "./PostList";
import WeatherWidget from "./WeatherWidget";

const UserProfile = ({ user }) => {
  const { name, email, phone, website, address } = user;

  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
      <p><strong>Address:</strong> {address.street}, {address.city}</p>
      
      <hr />
      
      {/* Passing a SIMPLE PROP (string) to WeatherWidget */}
      <WeatherWidget city={address.city} />

      <hr />

      {/* Passing a COMPLEX PROP (the entire user object) to PostList */}
      <PostList userId={user.id} />
    </div>
  );
};

export default UserProfile;