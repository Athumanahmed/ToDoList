import React, { useState } from "react";

const TodoForm = ({ addTodo}) => {
  const [input, setInput] = useState("");
  const HandleTodo = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form className="TodoForm" onSubmit={HandleTodo}>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add a task
      </button>
    </form>
  );
};

export default TodoForm;
