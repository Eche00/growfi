import { Home } from '@mui/icons-material'
import { Link, NavLink } from 'react-router'


interface DropdownProp{
  setDropDown: (value:boolean)=>void
}

function GeneralNav({setDropDown}: DropdownProp) {
  return (
    <div onClick={()=>setDropDown(false)}>
      <section 
      
       className="fixed bg-gradient-to-b from-black via-[#7E7ED7]  to-black top-[90px] left-0 w-full h-[100vh]  z-50 flex flex-col gap-[32px] md:hidden">
          <div className="flex flex-col  text-white text-[18px] font-[500]" 
          
          >
          <NavLink to='/' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold  cursor-pointer p-5  border-b border-gray-500 flex items-center justify-between': ' text-gray-300 font-bold  cursor-pointer p-5  border-b border-[#68FCC6] flex items-center justify-between'}>Home <Home /></NavLink>
          <NavLink to='/about' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold  cursor-pointer p-5  border-b border-[#68FCC6]': ' text-gray-300 font-bold  cursor-pointer p-5  border-b border-[#68FCC6]'}>About</NavLink>
          <NavLink to='/plans' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold  cursor-pointer p-5  border-b border-[#68FCC6]': ' text-gray-300 font-bold  cursor-pointer p-5  border-b border-[#68FCC6]'}>Plans</NavLink>
          <NavLink to='/faqs' className={({isActive})=> isActive ? 'text-[#68FCC6] font-bold  cursor-pointer p-5  border-b border-[#68FCC6]': ' text-gray-300 font-bold  cursor-pointer p-5  border-b border-[#68FCC6]'}>FAQ </NavLink>
           </div>
            
          <div className="flex sm:flex-row flex-col sm:items-center gap-[20px]">
             
          <Link to='/signup'  className="py-[8px] px-[32px] w-fit  bg-black text-white flex  items-center justify-center rounded-full shadow-[0_0_6px_0_#68FCC6] ml-auto mr-10">Get started</Link>
          </div>

         
        </section>
    </div>
  )
}

export default GeneralNav