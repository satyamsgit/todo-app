import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodoList([{ id: `${todo}-${Date.now()}`, todo }, ...todoList]);
    }
    if (editId) {
      const editTodo = todoList.find((item) => item.id === editId);
      const updatedList = todoList.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, todo })
          : { id: item.id, todo: item.todo }
      );
      setTodoList(updatedList);
      setEditId(0);
    }
    setTodo("");
  };
  const handleDeleteItem = (id) => {
    const updatedTodoList = todoList.filter((t) => t.id !== id);
    setTodoList(updatedTodoList);
  };
  const handleEditItem = (id) => {
    const editTodo = todoList.find((item) => item.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>My To-do List</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "Add"}</button>
        </form>
        <ul className="todolist">
          {todoList.map((item) => (
            <li>
              <span className="todotext" key={item.id}>
                {item.todo}
              </span>
              <button onClick={() => handleEditItem(item.id)}>Edit</button>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
