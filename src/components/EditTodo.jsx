import React, { useState } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [input, setInput] = useState(task.task);
  const HandleTodo = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    setInput("");
  };
  return (
    <form className="EditTodo" onSubmit={HandleTodo}>
      <input
        className="todo-input"
        type="text"
        placeholder="Update the task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};

export default EditTodo;
