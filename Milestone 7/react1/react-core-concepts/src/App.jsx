import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Singers
 from './Singers'
import Actor from './Actor'
function App() {
  const [count, setCount] = useState(0)
  const actors=["Sakib khan","jasim","Rubel"]
  const singers=[{name: 'X', age: 23}, {name: 'Y', age: 24}, {name: 'Z', age: 25}]
  return (
    <>

       <Actor name="Tom Cruise"  />

      {
        actors.map(actor => <Actor name={actor} />)
      }
      {
        singers.map(singer => <Singers name={singer.name} age={singer.age} />)
      }

      {/* <h1>Vite + React</h1>
      <Person>  </Person> */}
      {/* <Todo tasks="Learn React"/> */}
      {/* <Todo tasks="Explore Core Concepts" isDone={true} />
      <Todo tasks="Exploring  Core React  Concepts" isDone={false} /> */}
      {/* <Student grade="4" score="34"> </Student>
      <Developer />
      <Device name="Laptop" price="17000"/> */}
    </>
  )
}

function Device(devi) {
  console.log(devi)
  return (
    <div>
      <h2>The Device is :{devi.name} and price is :{devi.price}</h2>    
    </div>
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
function Student({grade =1, score=0}) {
  console.log(grade, score)
  return (
    <div className='student'>
    <h3>This is a student</h3>
    <p>Grade:{grade}</p>
    <p>Score:{score}</p>
   </div>
  )
}
function Developer() {
  const DeveloperStyle={
    margin:"10px",
    padding:"10px",
    border:"2px solid red",
    borderRadius:"10px"
  }
  return (
    <div style={DeveloperStyle}>
    <h3>Dev Sayem</h3>
    <p>Coding:</p>
   </div>
  )
}

