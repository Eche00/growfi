import { Routes, Route, BrowserRouter } from "react-router-dom"
import Container from "./components/Container"
import Home from "./pages/Home"
import About from "./pages/About"
import Plans from "./pages/Plans"
import ScrollToTop from "./components/ScrollToTop";
import Faqs from "./pages/Faqs"
import SignUp from "./authentication/SignUp"
import SignIn from "./authentication/SignIn"
import ForgotPassword from "./authentication/ForgotPassword"
import Dashcontainer from "./dashboard/Dashcontainer"
import Dashboard from "./dashboard/dashpages/Dashboard"



function App() {

  return (
    <div className="   relative w-full overflow-x-hidden" >
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/faqs" element={<Faqs />} />
          </Route>
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashcontainer />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App