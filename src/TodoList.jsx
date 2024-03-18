import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
