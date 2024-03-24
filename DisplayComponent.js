import React from 'react';

function UserDetailsDisplay({ userData }) {
  return (
    <div>
      <h2>{userData.login}</h2>
      <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', borderRadius: '50%' }} />
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
    </div>
  );
}

export default UserDetailsDisplay;