import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  items = [];

  
  return (
    <>
      <h1>Heading</h1>
      {items.length === 0? <>No item found</> :<ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>}
      {items.length ===0 && <p>No item found</p>}
      
    </>
  );
}

export default App;
