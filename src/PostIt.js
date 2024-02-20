import React from "react";
import { useDrag, useDrop } from "react-dnd";

const PostIt = () => {
  const [{ isDragging }, drag] = useDrag({
    type: "POST_IT",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: "move",
      }}
      className="post-it"
    >
      {/* Your post-it content here */}
      Post-it
    </div>
  );
};

export default PostIt;
