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
import Profile from "./dashboard/Profile"
import Packages from "./dashboard/Packages"
import Deposit from "./dashboard/Deposit"
import Withdraw from "./dashboard/Withdraw"
import Transactions from "./dashboard/Transactions"
import Referrals from "./dashboard/Referrals"
import { Toaster } from "react-hot-toast"



function App() {

  return (
    <div className="   relative w-full overflow-x-hidden" >
      <BrowserRouter>
        <ScrollToTop />

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#1A1D1F", // dark background
              color: "#FFFFFF",        // white text
              fontWeight: "500",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            success: {
              iconTheme: {
                primary: "#22C55E", // green icon
                secondary: "#1A1D1F",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444", // red icon
                secondary: "#1A1D1F",
              },
            },
            loading: {
              iconTheme: {
                primary: "#034FE3", // blue icon
                secondary: "#1A1D1F",
              },
            },
          }}
        />

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
            <Route path="packages" element={<Packages />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="profile" element={<Profile />} />
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