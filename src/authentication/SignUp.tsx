import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Close, Email, KeyboardArrowDown, PermIdentity, Person, Pin, Visibility, VisibilityOff } from "@mui/icons-material";
import { handleRegistration } from "../utils/auth/auth";
import { serverTimestamp } from "firebase/firestore";

export default function SignUp() {
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    balance: 0,
    totalDeposit: 0,
    totalProfit: 0,
    totalBonus: 0,
    withdrawals: 0,
    phone: "",
    country: "",
    refferalid: "",
    Transactions: [],
    investments: [],
    refferals: [],
    address: "",
    dob: "",
    createdAt: serverTimestamp(),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // password visibility
  const [visible, setVisible] = useState(false);
  // handling change function
  const handleChange = (e: any) => {
    e.preventDefault();
    // error reset
    setLoading(false);
    setError("");
    setEmailError(false);
    setUsernameError(false);
    setPasswordError(false);

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // error handling
    if (formData.username.length < 5) {
      setUsernameError(true);
      setLoading(false);
      return;
    } else if (!formData.email.includes("@")) {
      setEmailError(true);
      setLoading(false);
      return;
    } else if (formData.password.length < 8) {
      setPasswordError(true);
      setLoading(false);
      return;
    }
    //  handling registeration
    try {
      await handleRegistration(formData);
      navigate("/signin");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" sm:px-6 py-5 min-h-[100vh] flex lg:flex-row flex-col items-center justify-center gap-2 bg-black ">

      {/* mobile container   */}
      <main className=" relative flex flex-col  sm:shadow-2xl   sm:rounded-2xl    sm:w-[600px] w-full p-[20px] sm:border-2 border-gray-700 sm:bg-black/50">
        <section className="flex items-start justify-between">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[50px] h-[50px] object-cover border-gray-300 border-2 rounded-full "
          />
          <Link to="/" className=" text-start text-white  font-bold   text-[20px]">
            <Close />
          </Link>
        </section>

        {/* subcontainer  */}
        <div className=" w-[90%] mx-auto md:w-[70%]">
          <h1 className=" text-start text-white  font-bold my-[30px]  text-[20px]">
            Create Account
          </h1>
          {/* form container  */}
          <form className="w-full" onSubmit={handleSubmit}>
            {/* name  */}
            <div className=" flex flex-col gap-[5px] my-5 ">
              {error && <p className=" text-red-500 ">{error}</p>}
              <p className=" text-white ">Name:</p>
              <div className="flex items-center gap-2 bg-black border-1 border-gray-700  w-full px-2 py-2 rounded-[10px]  text-white">
                <span className=" text-gray-500  border-r border-gray-500 pr-2">
                  <Person />
                </span>
                <input
                  className="  outline-none text-white flex-1 placeholder:text-gray-500 "
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            {/* username  */}
            <div className=" flex flex-col gap-[5px] my-5 ">
              {error && <p className=" text-red-500 ">{error}</p>}
              <p className=" text-white ">Username:</p>
              <div className="flex items-center gap-2 bg-black border-1 border-gray-700  w-full px-2 py-2 rounded-[10px]  text-white">
                <span className=" text-gray-500  border-r border-gray-500 pr-2">
                  <PermIdentity />
                </span>
                <input
                  className="  outline-none text-white flex-1 placeholder:text-gray-500 "
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  placeholder="Enter your Username"
                />
              </div>
              {usernameError && (
                <p className=" text-red-500 ">
                  Username must be at least 5 characters
                </p>
              )}
            </div>


            <div className=" flex flex-col gap-[5px] my-5 ">
              <p className=" text-white ">Email:</p>
              <div className="flex items-center gap-2 bg-black border-1 border-gray-700  w-full px-2 py-2 rounded-[10px]  text-white">
                <span className=" text-gray-500  border-r border-gray-500 pr-2">
                  <Email />
                </span>
                <input
                  className="  outline-none text-white flex-1 placeholder:text-gray-500 "
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Enter your email"
                />
              </div>
              {emailError && (
                <p className=" text-red-500 ">email missing '@'</p>
              )}
            </div>
            <div className=" flex flex-col gap-[5px] my-5 ">
              <p className=" text-white ">Password:</p>
              <div className="flex items-center gap-2 bg-black border-1 border-gray-700  w-full px-2 py-2 rounded-[10px]  text-white">
                <span
                  className=" text-gray-500  border-r border-gray-500 pr-2 cursor-pointer"
                  onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </span>
                <input
                  className="  outline-none text-white flex-1 placeholder:text-gray-500 "
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <p
                className={
                  passwordError ? " text-red-500 " : " text-gray-300 "
                }>
                Must be at least 8 characters
              </p>

              {/* refferal id  */}
              <div className=" flex flex-col gap-[5px] my-5 ">
                {error && <p className=" text-red-500 ">{error}</p>}
                <p className=" text-white ">Refferal ID:</p>
                <div className="flex items-center gap-2 bg-black border-1 border-gray-700  w-full px-2 py-2 rounded-[10px]  text-white">
                  <span className=" text-gray-500  border-r border-gray-500 pr-2">
                    <Pin />
                  </span>
                  <input
                    className="  outline-none text-white flex-1 placeholder:text-gray-500 "
                    type="text"
                    name="refferalid"
                    onChange={handleChange}
                    value={formData.refferalid}
                    placeholder="Refferal ID (optional)"
                  />
                </div>

              </div>
            </div>
            <div className="  flex items-center gap-[10px] ">
              <span className="flex-1 bg-[#68FCC6] h-[0.2px] "></span>
              <span className=" text-gray-700">
                {" "}
                <KeyboardArrowDown />
              </span>
              <span className="flex-1 bg-[#68FCC6] h-[0.2px] "></span>
            </div>
            <div className=" w-full flex items-center justify-center flex-col">
              <button
                className="w-full my-5 bg-[#68FCC6] text-[#0B0B0F] rounded-lg py-3 font-semibold hover:bg-[#52c9a0] transition-all duration-300 shadow-lg hover:shadow-[#68FCC6]/30 cursor-pointer"
                type="submit">
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4  animate-spin text-gray-600 fill-[#1e222b]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>

            </div>
            <p className="text-sm font-bold text-center text-white ">
              Have an account ?{" "}
              <Link to="/signin" className=" underline text-[#68FCC6]">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </main>


    </div>
  );
}


