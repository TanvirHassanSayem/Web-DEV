import "./Header.css";
export default function Header() {
  return (
    <div className="  flex flex-col  justify-center items-center  ">
       <h2> Navbar </h2>
       <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contacts">Contacts US </a>
       </nav>

      
    </div>
  )
}
