import React from "react";

export default function Postit({ todo }) {
  return <div className="post-it">{todo.text}</div>;
}
