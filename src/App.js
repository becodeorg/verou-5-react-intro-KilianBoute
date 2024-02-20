// App.js
import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PostIt from "./PostIt";
import DroppableArea from "./DroppableArea";

function App() {
  const postits = new Array(5).fill(null);
  const listPostits = postits.map((postit, index) => {
    return <PostIt key={index} />;
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <DroppableArea>
        <div className="App">
          <h1>TO DO</h1>
          {listPostits}
        </div>
      </DroppableArea>
    </DndProvider>
  );
}

export default App;
