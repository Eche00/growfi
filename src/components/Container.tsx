import Footer from "./Footer";
import Header from "./Header"
import { Outlet } from "react-router";

function Container() {
  return (
    <div className="relative">
    <Header/>
    
    <div>
      <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default Container