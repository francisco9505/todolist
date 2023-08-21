import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const todoList = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        { value: event.target.value, id: new Date().getTime() },
      ]);
      console.log({ value: event.target.value, id: new Date().getTime() });
      event.target.value = "";
    }
  };

  const deleteTask = (task) => {
    setTodos(todos.filter((i) => i.id !== task.id));
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
      }}
    >
      <h1 style={{fontSize:'100px',fontWeight:'100',color:'pink',opacity:'0.6'}}>todos</h1>
      <input type="text" onKeyDown={todoList} />
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            {task.value} <button onClick={() => deleteTask(task)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
