import { Link, NavLink } from 'react-router'


interface DropdownProp{
  setDropDown: (value:boolean)=>void
}

function GeneralNav({setDropDown}: DropdownProp) {
  return (
    <div onClick={()=>setDropDown(false)}>
      <section 
      
       className="fixed bg-white top-[90px] left-0 w-full h-[100vh]  z-50 flex flex-col gap-[32px] md:hidden">
          <div className="flex flex-col  text-white text-[16px] font-[500]" 
          
          >
          <NavLink to='/' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-gray-600 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700'}>Home</NavLink>
          <NavLink to='/mentorship' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700': ' text-gray-600 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700'}>Mentorship</NavLink>
          <NavLink to='/signals' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700': ' text-gray-600 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700'}>Signals</NavLink>
          <NavLink to='/courses' className={({isActive})=> isActive ? 'text-green-700 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700': ' text-gray-600 font-bold text-sm cursor-pointer p-[10px]  border-b border-green-700'}>Courses </NavLink>
           </div>
            
          <div className="flex sm:flex-row flex-col sm:items-center gap-[20px]">
             
           <Link to='/calculator'  className=" px-[32px] py-[10px] text-[16px] mx-[20px] rounded-[8px] bg-green-700 text-white cursor-pointer hover:scale-[105%] transition-all duration-300 text-center flex-1">Risk Calculate</Link>

          </div>

         
        </section>
    </div>
  )
}

export default GeneralNav