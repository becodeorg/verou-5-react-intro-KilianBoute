import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import Postit from "./Postit";

export default function PostitBoard({ todos, deleteTodo, setTodos }) {
  const movePostit = useCallback(
    (id, left, top) => {
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        setTodos(
          update(todos, {
            [todoIndex]: {
              $merge: { left, top },
            },
          })
        );
      }
    },
    [todos, setTodos]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "POSTIT",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        movePostit(item.id, left, top);
      },
    }),
    [movePostit]
  );

  return (
    <div
      className="postitBoard"
      ref={drop}
      style={{
        border: "3px solid black",
        padding: "1rem",
        marginBlock: "1rem",
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      {todos.map((todo) => (
        <Postit key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
