import React, { useState, useEffect } from 'react';
// uuid

const Todo = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(data);

  const addTitle = () => {
    // setData([...data, {title: 'New Data', id: new Date()}])
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

  // TODO: Check 59.line

  return (
    <div className="todos">
      <button onClick={addTitle}>
        Add title
      </button>
      <div className="todos-list">
        {data.map(todo => (
          <div key={todo.id} className="todo-item">
            {/* <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} /> */}
            <input type="checkbox" checked={todo.completed} onChange={handleChange(todo.id)} />
            <label>{todo.title}</label>
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
