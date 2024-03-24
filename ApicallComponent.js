import React, { useState, useEffect } from 'react';

function UserDetails(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [props.username]);

  return (
    <div>
      {userData ? (
        <UserDetailsDisplay userData={userData} />
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserDetails;