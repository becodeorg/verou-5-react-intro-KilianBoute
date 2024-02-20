// App.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          text: newItem,
        },
      ];
    });
    setNewItem("");
  };

  return (
    <div>
      <h2>To do list</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Enter Text:</label>

        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          name="item"
        />

        <input type="submit" value="Submit" />
      </form>

      <div className="todoList">
        {todos.map((todo) => {
          return (
            <div className="post-it" key={todo.id}>
              {todo.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
