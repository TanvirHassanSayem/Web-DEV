import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Vite + React</h1>
      <Person>  </Person>
      <Student> </Student>
    </>
  )
}
function Person() {
     const age=24;
     const money= 50;
     const person={
      name: 'Sayem',
      age: 25
     }
     return <h3> I am a {person.name} with age :{age } </h3>
}
export default App
function Student() {
  return (
    <div>
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>Age:</p>
   </div>
  )
}

