import React from "react";
const Form = ({ todo, onSubmit, onChange, editId }) => {
  const handleOnChange = (e) => {
    onChange(e);
  };
  const handleSubmit = (e) => {
    onSubmit(e);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleOnChange} />
      <button type="submit">{editId ? "Edit" : "Add"}</button>
    </form>
  );
};

export default Form;
