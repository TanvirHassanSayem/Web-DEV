import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

         function handleClick(){
        alert('Button clicked')
      }

      const button2Click = () => {  
        alert('Button 2 clicked')
      } 
      function AddFive(num){
           alert(num+5)
      }
  return (
    <>
       
      <h3>React Core Concept 2</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={button2Click}>Click 2</button>
      <button onClick={AddFive(5)}>Add Five</button>
    </>
  )
}

export default App
