import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

import { getAllUsers } from '../../services/UserService';

const Users = ({
  appName,
}) => {
  // console.log('user list page is rendered');

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [count, setCount] = useState(0);

  console.log('users render');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getAllUsers(debouncedSearch);
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [debouncedSearch]);

  const handleSearch = value => {
    console.log('handle search', value);
    setDebouncedSearch(value);
  }

  const debouncedValue = useCallback(
    debounce(() => handleSearch(search), 500)
    , [search]);

  // const debouncedValue = debounce(() => handleSearch(search), 500);

  /* const filteredData = users.filter(user => user.name.toLowerCase().includes(debouncedSearch.toLowerCase())); */

  // console.log('!filteredData', !filteredData);
  // console.log('filteredData', filteredData);

  useEffect(() => {
    debouncedValue();
    return () => {
      debouncedValue.cancel();
    }
  }, [search])

  return (
    <>
      <div className="user-list-wrapper">
        <h2 className="user-list-header red-header">{appName}</h2>
        {/* <p>Table counter: {counter}</p> */}
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div>
            <p>Search: {search}</p>
            <p>Debounced Search: {debouncedSearch}</p>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
          </div>
        {
          loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {
                users.length === 0 ?
                  <h1>No Data</h1>
                  :
                  <table className="user-list-table">
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
              }
            </>
          )
        }

      </div>

      {/* <div className='align-example'>
        <div style={{ background: '#aaa' }}>
          <div style={{ width: '200px', background: 'lightblue' }}>
            Hello
          </div>
        </div>
        <span>Merhaba</span>
        <span>Dünya</span>
      </div> */}
    </>
  );
};

// React Memo

export default Users;
// export default React.memo(Users);
// If props does not change, don't render again
