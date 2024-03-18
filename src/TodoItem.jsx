import React, { useState } from "react";

const TodoItem = ({ todo, index, removeTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleEdit = () => {
    setEditMode(true);
  };

  const saveEdit = () => {
    editTodo(index, editValue);
    setEditMode(false);
  };

  return (
    <div className="p-2 test mb-2 rounded shadow-md">
      <div className="flex justify-between items-center">
        {editMode ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded mr-2"
          />
        ) : (
          <div>{todo}</div>
        )}
        <div>
          {editMode ? (
            <button className="text-green-500 mr-2" onClick={saveEdit}>
              Save
            </button>
          ) : (
            <button className="text-blue-500 mr-2" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="text-red-500" onClick={() => removeTodo(index)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
