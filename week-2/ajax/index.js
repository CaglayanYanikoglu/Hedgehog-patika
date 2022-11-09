
/* setTimeout(() => {
  console.log('1'); // async
}, 3000);

console.log('2'); */

const bodyElement = document.querySelector('.user-table-body');


const renderUsers = (data = []) => {
  let tableContent = '';
  console.log(data);
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
    {/* <td>${JSON.stringify(user.company)}</td> */}
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

const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    usersData = data;
    renderUsers(data);
  });
}

getUsers();

const removeUser = (id) => {
  console.log('remove user id', typeof id);

  const newData = usersData.filter(user => user.id !== parseInt(id));
  usersData = newData;
  renderUsers(newData);
}



// renderUsers();

