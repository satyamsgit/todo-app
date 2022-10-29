import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";
import ListItems from "./components/ListItems";
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
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form
          onSubmit={handleSubmit}
          onChange={handleOnChange}
          editId={editId}
          todo={todo}
        />
        <ListItems
          todoList={todoList}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
};

export default App;
