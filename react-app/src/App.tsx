import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
// import Button from "./components/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import ButtonExercise from "./components/ButtonExercise";
import style from "styled-components";
const Button = style.button `
background-color: green;
height: 2.5rem;
border-radius: 3rem;
border:none;


&:hover {
color: white;

}
`
function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "Londo", "Paris"];
  // const handleSelecetItem = (item:string) =>{
  //   console.log(item)
  // }
  // const [alert,setAlert] = useState(false);
  // const [color,setColor] = useState('warning')
  // const colors = ['primary', 'secondary', 'success', 'warning', 'dark'];
  // const n = colors.length;
  // function handleColor() {

  //   setColor(colors[Math.floor(Math.random() * n)])
  // }

  const [drink, setDrink] = useState({ title: "Buna", price: 10 });
  function handleClick (){
 
    
    setDrink({...drink, price:13});
  }
  return (
    //
    <>
      {/* {alert && <Alert onClose={() => setAlert(false)}>
My Alert
</Alert>}
   
   <Button  color={color} onClick={()=>setAlert(true)}>Success </Button> */}
      {/* <BsFillCalendarFill/>
   <ListGroup items= {items} heading = "Cities" onSelectItem = {handleSelecetItem}/>

   <ButtonExercise/> */}
   {drink.price}
   <Button onClick ={handleClick}>Increase Price</Button>

    </>
  );
}

export default App;
