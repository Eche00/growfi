import { ArrowForward } from "@mui/icons-material"
import { Link } from "react-router"
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className=" w-full bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] overflow-hidden min-h-[100vh] flex items-center justify-center">

<section className="md:pt-[90px]">
    <div
            
            className="  max-w-[90%] mx-auto flex sm:flex-row md:flex-row flex-col justify-center sm:mb-[100px] mb-[125px] items-center gap-8 pt-[100px]">
            {/* hero left section  */}
            <motion.div
              className=" flex-1 gap-[200px]"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}  
              viewport={{once:true}}>
              <div className=" flex  flex-col gap-[24px]">
              <div className=" flex items-center border-[1px] border-green-700 rounded-full w-fit p-2">
                <p  className=" text-[14px]  font-[400] py-[10px] px-[20px] bg-green-700 text-white rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
                SIGNALS
                </p>
               </div>
                <h1 className=" text-[#1A1A1A] font-[700] sm:text-[58px] text-[40px]   smm:w-full w-[80%] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px] mx-auto sm:mx-0">
                Signals Backed by Experience & Results You Can 
                  <span className=" text-green-700"> Trust</span>
                </h1>
                <p className=" text-[#1A1A1A] font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[300px] mx-auto">
                From basics to breakthroughs, trade Forex with expert signals backed by proven strategies, designed to guide you every step of the way.
                </p>
              </div>

                <div className=" flex flex-wrap items-center justify-center gap-[24px]  py-10 w-fit">
                <a
                 href='/mentorship'
                  className="flex items-center justify-center gap-[10px] rounded-full bg-green-700 text-white sm:py-[14px] py-[12px] w-fit px-5 text-[14px] sm:text-[16px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300 ">
                 JOIN OUR CHANNEL <ArrowForward/>
                </a>
               
                <Link
                  to="/courses"
                  className=" sm:py-[10px] py-[12px]  w-[150px] sm:w-[200px] text-[16px] text-green-700 sm:text-[18px] border-[1px] border-green-700  rounded-full flex items-center justify-center font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                  Courses
                </Link>
               
              </div>
               
            </motion.div>
            {/* hero right section  */}
            <motion.div className=" flex-1 flex items-end  relative sm:pt-[50px] z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}  
            viewport={{once:true}}>
               <img src="/signalshero.webp" alt="hero-img" className="w-full rounded-[18px]" />
            </motion.div>
          </div>
    </section>
   </div>
  )
}

export default Hero