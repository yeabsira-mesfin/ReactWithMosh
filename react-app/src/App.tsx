import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {

  // let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  // const handleSelecetItem = (item:string) =>{
  //   console.log(item)
  // }
  const [color,setColor] = useState('warning')
  const colors = ['primary', 'secondary', 'success', 'warning'];
  const n = colors.length;
  function handleColor() {
    
    setColor(colors[1])
  }
  return (
  //  <ListGroup items= {items} heading = "Cities" onSelectItem = {handleSelecetItem}/>
  <>
  {/* <Alert>
    Hello <span>Yeaba</span>
  </Alert> */}
  
   <Button color={color} onClick={handleColor}>Success </Button>
  </>
  );
}

export default App;
