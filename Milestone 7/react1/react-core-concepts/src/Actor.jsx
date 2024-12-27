export default function Actor({name, age=23}) {
  return (
    <div>
      <h2>Actor: {name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}