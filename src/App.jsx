// src/App.js

import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", description: "Study React fundamentals" },
    {
      id: 2,
      title: "Build a Todo App",
      description: "Create a simple todo application",
    },
    {
      id: 3,
      title: "Style with Tailwind CSS",
      description: "Add Tailwind CSS for styling",
    },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (editedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  const addTodo = () => {
    if (newTodoTitle.trim() === "" || newTodoDescription.trim() === "") return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos([
      ...todos,
      { id: newId, title: newTodoTitle, description: newTodoDescription },
    ]);
    setNewTodoTitle("");
    setNewTodoDescription("");
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl mb-4">Todo List</h1>
      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Todo Title"
          className="border border-gray-400 px-2 py-1 rounded mr-2"
        />
        <textarea
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          placeholder="Todo Description"
          className="border border-gray-400 px-2 py-1 rounded mr-2"
          rows="3"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </div>
  );
};

export default App;
