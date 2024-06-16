import React from "react";
import { useState } from "react";
import classes from './ListGroup.module.css'
import styled from "styled-components";
const List = styled.ul `
  list-style: none;
    padding: 0;
    color: lightblue;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background: ${props => props.active ? 'blue' : 'none'} 
`

interface Props {
    items: string[],
    heading:string;
    onSelectItem: (item:string) => void;
}
const ListGroup = ({items,heading,onSelectItem}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
 
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <>No item found</>
      ) : (
        <List className={[classes.listGroup,classes.container].join('')}>
          {items.map((item, index) => (
            <ListItem
            active = {index === selectedIndex}
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
