import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/UserService';

const Users = ({
  appName,
}) => {
  console.log('user list page is rendered');

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      if (res.status === 200) {
        setUsers(res.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ marginTop: '160px' }}>
      <h2>{appName}</h2>
      {/* <p>Table counter: {counter}</p> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// React Memo

// export default Users;
export default React.memo(Users);
// If props does not change, don't render again
