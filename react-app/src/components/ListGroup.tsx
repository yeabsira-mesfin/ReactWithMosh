import React from "react";

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  let selectedIndex = -1;
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Heading</h1>
      {items.length === 0 ? (
        <>No item found</>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item" key={item} onClick={handleClick}>
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
