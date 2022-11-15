let allData = [];

const renderTodos = (data = []) => {
  const container = document.querySelector('.todos-list');
  container.innerHTML = '';
  data.forEach(todo => {
    const todoEl = document.createElement('p');
    todoEl.innerHTML = `${todo.id} - ${todo.title}`;
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
    })

    if (todo.completed) {
      todoEl.classList.add('completed');
    }
    container.appendChild(todoEl);
  })

};

const fetchTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
};

const handlePagination = () => {

  const paginationButtons = document.querySelectorAll('.pagination-btn');

  paginationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const buttonValue = event.target.innerHTML;
      console.log(typeof buttonValue);
      const copyData = [...allData];
      const offset = (parseInt(buttonValue) - 1) * 10;
      const paginationData = copyData.splice(offset, 10);

      renderTodos(paginationData);
    })
  })
}

const getData = async () => {
  const res = await fetchTodos();
  allData = res.data;
  const paginationContainer = document.querySelector('.pagination');
  const pageNumber = res.data.length / 10;
  for (let i = 1; i <= pageNumber; i++) {
    const pageButton = document.createElement('button');
    pageButton.classList.add('pagination-btn');
    pageButton.innerHTML = i;
    paginationContainer.appendChild(pageButton);
  }
  console.log(pageNumber);
  handlePagination();
  renderTodos(allData);
}


const init = () => {
  getData();
};

init();

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  console.log(allData);
  const filteredData = allData.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));

  renderTodos(filteredData);
})
