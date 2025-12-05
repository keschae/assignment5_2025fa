import React from 'react';

const UserList = ({ users, onUserSelect }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} onClick={() => onUserSelect(user)} className="user-list-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;