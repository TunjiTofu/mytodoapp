import React, { useState } from "react";
// import { emitter } from "./Notification";

function AddTodo({ addTodo }) {
  const addTodoStyle = {
    position: "fixed",
    bottom: 10,
    display: "block",
    width: "100%",
  };

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), title: title, done: false };
    addTodo(newTodo);
    // emitter.emit("NOTIFICATION", "New To-do Added Successfully");
    setTitle("");
  };

  return (
    <div style={addTodoStyle}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an Item"
          style={{ width: "90%", padding: 10 }}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" style={{ width: 80, padding: 10 }} />
      </form>
    </div>
  );
}

export default AddTodo;
