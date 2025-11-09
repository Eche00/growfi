import { Routes, Route, BrowserRouter } from "react-router-dom"
import Container from "./components/Container"
import Home from "./pages/Home"
import About from "./pages/About"
import Signals from "./pages/Signals"
import Courses from "./pages/Courses"
import ScrollToTop from "./components/ScrollToTop";
import Calculator from "./pages/Calculator"



function App() {
    
  return (
    <div className="   relative w-full overflow-x-hidden" >
      <BrowserRouter>
      <ScrollToTop/>

        <Routes>
              {/* General Routes */}
             <Route element={<Container/>}>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/about" element={<About/>}/>
                   <Route path="/signals" element={<Signals/>}/>
                   <Route path="/courses" element={<Courses/>}/>
                   <Route path="/calculator" element={<Calculator/>}/>
             </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App