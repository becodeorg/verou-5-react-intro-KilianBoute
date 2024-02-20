import { useDrop } from "react-dnd";

const DroppableArea = ({ children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "POST_IT",
    drop: () => ({ type: "POST_IT" }),
    // Styling for the droppable area
    style: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      background: "black",
      top: 0,
      left: 0,
      zIndex: -1,
    },
  });

  return (
    <div ref={drop} className={isOver ? "droppableAreaOver" : "droppableArea"}>
      {children}
    </div>
  );
};

export default DroppableArea;
