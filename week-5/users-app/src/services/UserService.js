import axios from 'axios';

export const getAllUsers = (username = '') => {
  if (username) {
    return axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
  } else {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }
};

