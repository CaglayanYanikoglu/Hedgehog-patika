export const getAllUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
};

export const getUser = id => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
}