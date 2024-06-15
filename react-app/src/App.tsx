import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {

  // let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  // const handleSelecetItem = (item:string) =>{
  //   console.log(item)
  // }
  
  return (
  //  <ListGroup items= {items} heading = "Cities" onSelectItem = {handleSelecetItem}/>
  <>
  <Alert>
    Hello <span>Yeaba</span>
  </Alert>
  </>
  );
}

export default App;
