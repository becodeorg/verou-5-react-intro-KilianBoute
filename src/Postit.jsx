import React from "react";
import { useDrag } from "react-dnd";

export default function Postit({ todo, deleteTodo }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "POSTIT",
    item: { id: todo.id, left: todo.left, top: todo.top }, // Define the item being dragged
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="post-it"
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        position: "absolute",
        left: todo.left,
        top: todo.top,
      }}
    >
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}
