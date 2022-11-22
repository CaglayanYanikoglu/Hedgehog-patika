import React, { useState, useEffect } from 'react';
// uuid

const Todo = () => {
  const [data, setData] = useState([]);
  // const [tempData, setTempData] = useState([]);
  const [search, setSearch] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
        // setTempData(jsonData);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(data);

  const addTitle = () => {
    setData([...data, { title: newTitle, id: new Date(), completed: false }])
    setNewTitle('');
  }

  const handleChange = (id) => {
    console.log('id', id);
    /* const newData = [];
    //const newData = [...data]
    data.forEach(todo => {
      const obj = {...todo};
      // if (todo.)
      if (todo.id == id) {
        obj.completed = !obj.completed;
      }
      newData.push(obj);
    })
    setData(newData); */
    const newData = data.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
    setData(newData);
  }

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const newData = data.filter(todo => todo.id !== id);
    setData(newData);
  };

  const handleAddWithEnter = e => {
    if (e.key === 'Enter') {
      addTitle();
    }
  };

  // TODO: Check 59.line

  const filteredData = data.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
  console.log(filteredData);

  return (
    <div className="todos">
      <div className="add-todo">
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} onKeyPress={handleAddWithEnter} />
        <button onClick={addTitle}>
          Add title
        </button>
      </div>

      <div className="search-wrapper">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
        </svg>
        <input className="search" type="text" value={search} onChange={handleSearch} />
      </div>
      <div className="todo-list">
        {filteredData.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'active' : ''}`}>
            <div className="input-wrapper">
              <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
              {/* <input type="checkbox" checked={todo.completed} onChange={handleChange(todo.id)} /> */}
              <label>{todo.title}</label>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(todo.id)}
            >Delete</button>
          </div>
        ))}
      </div>
      {/*  {data.map((todo, index) => (
        <React.Fragment key={todo.id}>
          <p>-</p>
          <p>{todo.title}</p>
        </React.Fragment>
      ))} */}
    </div>
  );
};

export default Todo;
