import axios from 'axios';

export const getAllUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

