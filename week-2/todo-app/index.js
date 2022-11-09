
/* const promise1 = Promise.resolve(123);
const promise2 = Promise.reject('Error aldik'); */

const renderTodos = (data = []) => {
  console.log(data);
  const todoContainer = document.querySelector('.todo-list');
  let content = '';
  data.forEach(todo => {
    const liElement = document.createElement('li');
    liElement.innerHTML = todo.title;
    liElement.classList.add('list-item');
    todoContainer.appendChild(liElement);
    // content += `<li>${todo.title}</li>`;
  })
  // todoContainer.innerHTML = content;

}


const fetchData = async () => {
  // const res = fetch('https://jsonplaceholder.typicode.com/todos');
  /* axios.get('https://jsonplaceholder.typicode.com/todos2').then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  }); */
  /*   console.log('promise 1', promise1);
    promise1.then(promiseResponse => {
      console.log(promiseResponse);
    })
  
    promise2.then(promiseResponse => {
      console.log(promiseResponse)
    }).then(err => {
      console.log(err);
    })
   */
  /* const res = await axios.get('https://jsonplaceholder.typicode.com/todos'); */
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log(res);
  renderTodos(res.data);
 /*  const jsodata = await res.json();
  console.log(res);
  console.log(jsodata); */


}

fetchData();