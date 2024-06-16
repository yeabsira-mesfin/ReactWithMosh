import React from "react";
import { useState } from "react";
import classes from './ListGroup.module.css'
import styled from "styled-components";
const List = styled.ul `
  list-style: none;
    padding: 0;
    color: green;
`;
const ListItem = styled.li`
padding: 5px 0;
`

interface Props {
    items: string[],
    heading:string;
    onSelectItem: (item:string) => void;
}
const ListGroup = ({items,heading,onSelectItem}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
 
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <>No item found</>
      ) : (
        <List className={[classes.listGroup,classes.container].join(' ')}>
          {items.map((item, index) => (
            <ListItem
              className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={item}
              onClick={()=> {setSelectedIndex(index)
                onSelectItem(item);
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
      {items.length === 0 && <p>No item found</p>}
    </>
  );
};

export default ListGroup;
