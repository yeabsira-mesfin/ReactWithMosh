import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './message'
function App() {
  const name = {name:'Yeabsira'}
  return (
    <div className="App">
      
     <Message name={name}/>
    </div>
  )
}

export default App
