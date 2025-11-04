import {
  Instagram,
  Telegram,
} from "@mui/icons-material"; // Material UI icons
import { Link, NavLink } from "react-router-dom"; // For navigation links

// Footer component
function Footer() {
 

  return (
    <footer className="bg-gradient-to-b from-black via-[#7E7ED7]  to-black py-20">
      <div className=" sm:pt-[110px] pt-[50px]">
        {/* Top Section: Logo, Contact Info, CTA */}
        <div className="smm:max-w-[80%] sm:max-w-[88%] max-w-full mx-auto flex sm:flex-row flex-col sm:items-center px-[20px] sm:px-0 justify-between pb-[55px] border-b border-gray-200">
          {/* Left Column: Logo + Contact Info */}
          <div className="flex flex-col gap-[32px] items-start pb-[48px] sm:pb-0">
         <div className="flex flex-1 items-baseline justify-start gap-1 w-full text-center">
         <Link to="/" className=" text-[54px] font-bold text-[#68FCC6]">
            𝕲
          </Link> <h2 className="text-white text-[24px] font-bold leading-[30px]">RowFi</h2>
         </div>
            <div className="flex gap-[32px]">
              {/* Email Section */}
              <section className="flex flex-col gap-[8px]">
                <p className="sm:text-[14px] text-[12px] font-[400] text-[#68FCC6]">
                  Email
                </p>
                <p className="font-[400] text-[16px] text-gray-300">
                  support@xacademy.com
                </p>
              </section>
              {/* Phone Section */}
              <section className="flex flex-col gap-[8px]">
                <p className="sm:text-[14px] text-[12px] font-[400] text-[#68FCC6]">
                  Phone Number
                </p>
                <p className="font-[400] text-[16px] text-gray-300">
                +1 234 567 890
                </p>
              </section>
            </div>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="flex flex-col gap-8">
            <h3 className="font-[600] text-[24px] text-gray-300">
              Join us at the GRowFi

            </h3>
            <div className="flex-1 flex sm:flex-row flex-col items-start justify-between gap-[30px]">
            <ul className="flex flex-col ">
              <p className="text-[#68FCC6] text-[16px] font-bold  mb-[16px]">Routes</p>
              <NavLink to='/' className={({isActive})=> isActive ? 'text-[#68FCC6]':"text-gray-200 text-[16px] leading-[24px] font-[400] hover:underline" }>Home</NavLink>
              <NavLink to='/mentorship' className={({isActive})=> isActive ? 'text-[#68FCC6]':"text-gray-200 text-[16px] leading-[24px] font-[400] hover:underline" }>Mentorship</NavLink>
              <NavLink to='/signals' className={({isActive})=> isActive ? 'text-[#68FCC6]':"text-gray-200 text-[16px] leading-[24px] font-[400] hover:underline" }>Signals</NavLink>
              <NavLink to='/courses' className={({isActive})=> isActive ? 'text-[#68FCC6]':"text-gray-200 text-[16px] leading-[24px] font-[400] hover:underline" }>Courses</NavLink>
            </ul>
            <ul className="flex flex-col ">
              <p className="text-[#68FCC6] text-[16px] font-bold  mb-[16px]">Resources</p>
              <a href="#"  className="text-gray-200 text-[16px] leading-[24px] font-[400] ">Documentation</a>
              <a href="#" className="text-gray-200 text-[16px] leading-[24px] font-[400] ">Roadmap</a>
              <a href="#" className="text-gray-200 text-[16px] leading-[24px] font-[400] ">Tokenomics</a>
            </ul>

          </div>
          </div>
        </div>

        {/* Middle Section: Social Media Links */}
        <div className="smm:max-w-[80%] sm:max-w-[88%] max-w-full mx-auto pt-[55px] flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-[24px]">
          <p className="text-[16px] text-white font-[400] leading-[24px] "> © 2025  by Eche_codes</p>
        
          <section className="flex items-center gap-[12px]">
            {/* Social Icons */}
            <a
              className="p-[8px] rounded-full text-gray-300 bg-[#0405051A]"
              href="https://www.instagram.com/zion_tech_hub/profilecard/?igsh=dHRzc3dkMDJmZHdk">
              <Instagram />
            </a>
            <a
              className="p-[8px] rounded-full text-gray-300 bg-[#0405051A]"
              href="https://web.facebook.com/profile.php?id=61552268671280">
              <Telegram />
            </a>
         
         
          </section>

        </div>

       
      </div>
    </footer>
  );
}

export default Footer;
