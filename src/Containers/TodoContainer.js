import React, { useState } from "react";
import AddTodo from "../Components/AddTodo";
// import Notification from "../Components/Notification";
import TodoList from "../Components/TodoList";

const TodoListArray = [
  {
    id: 0,
    title: "Learn React",
    done: true,
  },
  {
    id: 1,
    title: "Create to-do app",
    done: false,
  },
];

function TodoContainer() {
  const [todos, setTodos] = useState(TodoListArray);

  const handleAddTodo = (newTodo) => {
    const newTodoItem = [...todos, newTodo];
    setTodos(newTodoItem);
  };

  const hadleRemoveTodo = (id) => {
    const newTodoListArray = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoListArray);
  };

  const handleCheckbox = (id) => {
    const newTodoListArray = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    setTodos(newTodoListArray);
  };

  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">To-Do Application</h4>
      {/* <Notification /> */}
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            removeTodo={hadleRemoveTodo}
            handleCheckbox={handleCheckbox}
          />
        ))
      ) : (
        <p align="center">No Item Left in Your To-Do List</p>
      )}
      <AddTodo addTodo={handleAddTodo} />
    </div>
  );
}

export default TodoContainer;
