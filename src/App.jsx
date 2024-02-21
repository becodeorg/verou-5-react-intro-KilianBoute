// App.js
import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import PostitBoard from "./PostitBoard";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    if (localValue === "") return;
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          text: text,
        },
      ];
    });
  }

  return (
    <>
      <div>
        <h2>To do list</h2>

        <TodoForm onSubmit={addTodo} />
      </div>
      <div>
        <PostitBoard todos={todos} />
      </div>
    </>
  );
}

export default App;
