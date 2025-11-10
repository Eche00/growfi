import { Routes, Route, BrowserRouter } from "react-router-dom"
import Container from "./components/Container"
import Home from "./pages/Home"
import About from "./pages/About"
import Plans from "./pages/Plans"
import ScrollToTop from "./components/ScrollToTop";
import Faqs from "./pages/Faqs"
import SignUp from "./authentication/SignUp"



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
                   <Route path="/plans" element={<Plans/>}/>
                   <Route path="/faqs" element={<Faqs/>}/>
             </Route>
                   <Route path="/signup" element={<SignUp/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App