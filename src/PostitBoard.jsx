import React from "react";
import Postit from "./Postit";

export default function PostitBoard({ todos, deleteTodo }) {
  return (
    <div className="todoList">
      {todos.map((todo) => {
        return <Postit todo={todo} key={todo.id} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}
