import React from 'react';

const User = ({ user, onDelete, onUpdate }) => {
  return (
    <div className="user">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => onUpdate(user.id)}>Update</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default User;