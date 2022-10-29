import React from "react";

const ListItems = ({ todoList, handleEditItem, handleDeleteItem }) => {
  return (
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
  );
};

export default ListItems;
