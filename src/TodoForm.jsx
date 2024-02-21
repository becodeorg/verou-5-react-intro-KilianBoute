import React, { useState } from "react";

export default function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
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
  );
}
