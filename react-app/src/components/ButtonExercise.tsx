import React from 'react'
import './ButtonExercise.css'
import { useState
 } from 'react';
import style from 'styled-components'
import { CiHeart } from "react-icons/ci";

const Button = style.button `
background-color: green;
height: 2.5rem;
border-radius: 3rem;
border:none;


&:hover {
color: white;

}
`
const ButtonExercise = () => {
    const [filled,setFilled] = useState(false);
  return (
    <>
    <button className='button'>Using CSS</button>
    <Button>Using Styled-Components</Button>
    <button onClick={()=>setFilled((filled)=>!filled)}>
        <CiHeart  className={filled?'like':'none'}  ></CiHeart>
    </button>
    </>
  )
}

export default ButtonExercise