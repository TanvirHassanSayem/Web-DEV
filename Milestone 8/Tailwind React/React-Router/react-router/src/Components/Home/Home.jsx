import { Outlet } from "react-router-dom";


export default function Home() {
  return (
    <div className=" h-screen  flex flex-col  justify-center items-center ">
      <h2>This is the Home Component. </h2>
      <br />
      <Outlet />
    </div>
  )
}
