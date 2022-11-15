// CALLBACKS, PROMISES, async await

/* console.log('1');


setTimeout(() => {
  console.log('2');
}, 3000);

console.log('3');
 */

/* // CALLBACK WAY:
let users = [];

const getUsers = (callback) => {
  console.log('get user function');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    console.log('data arrived');
    users = data;
    callback(); // printusers();
  })
}

const printUsers = () => {
  console.log('print user');
  console.log(users);
}

const init = () => {
  // getUsers();
  // printUsers();
  getUsers(printUsers)
};

init();

 */
// Promise method
/* let users = [];

const getUsers = () => {
  console.log('get user function');
  // promise chaining
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    console.log('data arrived');
    users = data;
  })
}

const printUsers = () => {
  console.log('print user');
  console.log(users);
}

const init = async () => {
  await getUsers();
  await printUsers();
};

init();


 */
