
/* setTimeout(() => {
  console.log('1'); // async
}, 3000);

console.log('2'); */

document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.querySelector('.user-table-body');

  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('keyup', (event) => {
    // searchInput.addEventListener('input', (evt) => {
    // searchInput.addEventListener('change', (evt) => {
    // console.log('key down', searchInput.value);
    const inputValue = event.target.value;
    const filteredData = usersData.filter(user => user.username.toLowerCase().includes(inputValue.toLowerCase()));
    renderUsers(filteredData);
  });

  // print users to screen
  const renderUsers = (data = []) => {
    let tableContent = '';
    data.forEach(user => {
      // console.log(user);
      /* const trElement = document.createElement('tr');
      const nameEl = document.createElement('td');
      const usernameEl = document.createElement('td');
      usernameEl.innerHTML = user.username;
      nameEl.innerHTML = user.name;
      trElement.appendChild(usernameEl)
      trElement.appendChild(nameEl)
      bodyElement.appendChild(trElement); */
      {/* <td>${JSON.stringify(user.company)}</td> */ }
      tableContent += `<tr>
    <td>${user.username}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    <td>${user.website}</td>
    <td>${user.company.name}</td>
    <td><button onclick="removeUser('${user.id}')">Delete</button></td>
    </tr>`;
    })
    bodyElement.innerHTML = tableContent;
  }


  let usersData = [];

  // fetch users from API server 
  const getUsers = async () => {
    // promise chaining
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        usersData = data;
        renderUsers(data);
      });

    // async await
    /* const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsondata = await res.json();
    console.log(jsondata); */
  }


  // deleting user
  const removeUser = (id) => {
    const newData = usersData.filter(user => user.id !== parseInt(id));
    usersData = newData;
    renderUsers(newData);
  }

  const searchData = () => {
    const newData = [];
    renderUsers(newData);
  }

  getUsers();

})



// renderUsers();


