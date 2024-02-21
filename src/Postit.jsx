import React from "react";

export default function Postit({ todo, deleteTodo }) {
  return (
    <div className="post-it">
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}
