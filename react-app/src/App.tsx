import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {BsFillCalendarFill} from 'react-icons/bs'
import ButtonExercise from "./components/ButtonExercise";

function App() {

  let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  const handleSelecetItem = (item:string) =>{
    console.log(item)
  }
  const [alert,setAlert] = useState(false);
  const [color,setColor] = useState('warning')
  const colors = ['primary', 'secondary', 'success', 'warning', 'dark'];
  const n = colors.length;
  function handleColor() {
    
    setColor(colors[Math.floor(Math.random() * n)])
  }
  return (
  //  
  <>
{/* {alert && <Alert onClose={() => setAlert(false)}>
My Alert
</Alert>}
   
   <Button  color={color} onClick={()=>setAlert(true)}>Success </Button> */}
   <BsFillCalendarFill/>
   <ListGroup items= {items} heading = "Cities" onSelectItem = {handleSelecetItem}/>

   <ButtonExercise/>
  </>
  );
}

export default App;
