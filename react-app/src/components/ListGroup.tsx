import React from "react";
import { useState } from "react";
const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  let activeClass = "list-group-item ";

  function handleClick(index: Number) {
    setSelectedIndex(index);
  }
  if (selectedIndex > 0) {
    activeClass += " active";
  }
  return (
    <>
      <h1>Heading</h1>
      {items.length === 0 ? (
        <>No item found</>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={`list-group-item${
                index === selectedIndex ? " active" : ""
              }`}
              key={item}
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {items.length === 0 && <p>No item found</p>}
    </>
  );
};

export default ListGroup;
