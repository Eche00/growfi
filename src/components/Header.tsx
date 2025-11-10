import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { Close } from "@mui/icons-material"
import GeneralNav from "./GeneralNav";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { motion } from "framer-motion";

function Header() {
  const [dropDown,setDropDown] = useState(false)

  return (
    <div className="  fixed top-0 left-0 w-full z-50 bg-black/80" >
      <section className="flex items-center justify-between max-w-[90%] md:max-w-[85%] mx-auto  py-5 relative border-b-[0.1px] border-gray-300">
        {/* logo  */}
         <div className="flex flex-1 items-baseline justify-start gap-1 w-full text-center">
         <Link to="/" className=" text-[34px] font-[700] text-[#68FCC6]">
            𝕲
          </Link> <h2 className="text-white text-[12px] font-bold leading-[30px]">RowFi</h2>
         </div>
     
       {/* navigations */}
         <div className="md:flex hidden flex-1 items-center justify-center text-nowrap">
          <nav className="bg-[#56565633]/50 flex  items-center gap-[40px] px-[36px] py-[10px] rounded-[12px]">
          <NavLink to='/' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold text-sm': ' text-gray-700 font-bold text-sm'}>Home</NavLink>
          <NavLink to='/about' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold text-sm': ' text-gray-700 font-bold text-sm'}>About</NavLink>
          <NavLink to='/plans' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold text-sm': ' text-gray-700 font-bold text-sm'}>Plans</NavLink>
          <NavLink to='/faqs' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold text-sm': ' text-gray-700 font-bold text-sm'}>FAQ</NavLink>
         </nav>
         </div>


         <div className="md:flex hidden flex-1 items-center justify-end ">
          <Link to='/calculator'  className="py-[8px] px-[32px]  bg-black text-white   md:flex hidden items-center justify-center rounded-full shadow-[0_0_6px_0_#68FCC6]">Get started</Link>
         </div>
        
         <button className=" md:hidden flex  text-white" onClick={()=>setDropDown(!dropDown)}>{dropDown ? <Close fontSize="medium"/> :<DragHandleIcon fontSize="medium"/>}</button>
       </section>

       <motion.section
       initial={{ height: 0, opacity: 0 }}
  animate={{
    height: dropDown ? "auto" : 0,
    opacity: dropDown ? 1 : 0,
  }}
 
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className="overflow-hidden"

       >
        {dropDown &&    
       <GeneralNav setDropDown={setDropDown} />}
       </motion.section>
    </div>
  )
}

export default Header