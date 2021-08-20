import React from "react";

function TodoList({ todo, removeTodo, handleCheckbox }) {
  //   console.log(todo);

  const handleCheckBoxChange = () => {
    if (todo.done) {
      return null;
    }
    handleCheckbox(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          style={{ margin: "0 10px" }}
          checked={todo.done}
          onChange={() => handleCheckBoxChange()}
        />
        <span style={todo.done ? { textDecoration: "line-through" } : null}>
          {todo.title}
        </span>
      </label>
      <span
        style={{
          position: "fixed",
          right: 20,
          padding: "0 10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        X
      </span>
      <hr />
    </div>
  );
}

export default TodoList;
