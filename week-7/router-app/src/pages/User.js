import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getUser } from '../services/UserServices';

const User = () => {
  const [user, setUser] = useState({});

  // const params = useParams();
  const { userId } = useParams();
  // const location = useLocation();
  // console.log(location.pathname.split('/')[2]);

  // console.log(params);

  const fetchUser = async () => {
    try {
      const res = await getUser(userId);
      const data = await res.json();
      setUser(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);
  console.log('----')
  console.log(Object.keys(user));

  return (
    <div>
      {/* <p>User name: {user.username}</p>
      <p>name: {user.name}</p> */}
      {/* {user.map(item => (
        <p>Test</p>
      ))} */}
      {Object.keys(user).map(key => (
        <p key={key}>{key}: {JSON.stringify(user[key])}</p>
      ))}
    </div>
  );
};

export default User;
