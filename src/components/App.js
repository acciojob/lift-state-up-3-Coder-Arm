
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   let [content,setContent] = useState("");


  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child child-1">
        <h2>Child Component 1</h2>
        <button onClick={() => setContent("Option 1")}>Option 1</button>
      </div>
      <div className="child child-2">
        <h2>Child Component 2</h2>
        <button onClick={() => setContent("Option 2")}>Option 2</button>
      </div>
        {<p> Selected Option: {content}</p>}
    </div>
  )
}

export default App
