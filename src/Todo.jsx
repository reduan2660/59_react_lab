// src/Todo.js

import React, { useState } from "react";

const Todo = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedTodo({
      ...editedTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={editedTodo.title}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 rounded mb-2"
            />
            <textarea
              name="description"
              value={editedTodo.description}
              onChange={handleChange}
              className="border border-gray-400 px-2 py-1 rounded mb-2"
              rows="3"
            />
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-1">{todo.title}</h2>
            <p>{todo.description}</p>
          </>
        )}
      </div>
      <div className="mt-2">
        {!isEditing ? (
          <>
            <button onClick={handleEdit} className="mr-2 text-blue-500">
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className="text-red-500">
              Delete
            </button>
          </>
        ) : (
          <button onClick={handleSave} className="text-green-500">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
