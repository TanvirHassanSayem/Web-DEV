import  "./Singer.css"
export default function Singers({name, age=23}) {
  return (
    <div className="singer">
      <h2>Singer: {name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}