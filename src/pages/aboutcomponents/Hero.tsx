import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutReviews from "./AboutReviews";

function Hero() {
  return (
        <div className=" w-full  overflow-hidden  h-full min-h-[100vh] relative bg-gradient-to-b from-black via-[#7E7ED7]  to-black">

<section className="md:pt-[90px]">
    <div
            
            className="  max-w-[90%] mx-auto flex items-center flex-col justify-center sm:mb-[100px] mb-[125px] items-center gap-8 pt-[100px]"
            >
            {/* hero left section  */}
            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}  
              viewport={{once:true}}
              className=" flex-1 gap-[200px]"
             >
              <div className=" flex items-center  flex-col gap-[24px]">
              <div className=" flex items-center border-[1px] border-[#68FCC6] rounded-full w-fit p-2">
                 <p className=" sm:text-[12px] text-[9px] text-nowrap  font-[400] py-[10px] px-[20px] bg-gradient-to-b from-80% from-[#68FCC6]  to-white text-black rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer border-none">
               ABOUT US
                </p>
               <p className=" sm:text-[12px] text-[9px] text-nowrap font-[400] py-[10px] px-[20px] text-white ">
               SEE WHAT WE DO
                </p>
               
               </div>
              <h1 className="text-white font-[400] sm:text-[64px] lg:max-w-[90%] mx-auto text-center text-[32px] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px] sm:w-full w-[90%] mx-auto sm:mx-0">
Built for Growth.   <span className="text-[#68FCC6]">Backed by Insight.</span> <br />
  <span className="text-[#68FCC6]"> Driven by You.</span>
</h1>
                <p className=" text-white font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[300px] mx-auto text-center">
               Every strategy has a purpose. Here’s how we built ours.</p>
              </div>
            
              <div className="w-full flex flex-wrap items-center justify-center gap-[10px]  py-10 w-fit ">
                <a href="#begining"
                  className="flex items-center justify-center gap-[10px] rounded-full bg-[#68FCC6] text-black sm:py-[10px] py-[12px] w-[150px] sm:w-[200px] text-[16px] sm:text-[18px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300 ">
           The Begining
                </a>
               
                <a href="#mission"
                  className=" sm:py-[10px] py-[12px]  w-[150px] sm:w-[200px] text-[16px] text-white sm:text-[18px] border-[1px] border-[#68FCC6]  rounded-full flex items-center justify-center font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                  Our Mission
                </a>
                <a href="#vision"
                  className=" sm:py-[10px] py-[12px] sm:w-[200px] w-[170px] text-[16px] text-white sm:text-[18px] border-[1px] border-[#68FCC6]  rounded-full flex items-center justify-center font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                  Our Vission
                </a>
               
              </div>
            </motion.div>
            {/* hero right section  */}
           <AboutReviews/>
          </div>
    </section>
   </div>
  )
}

export default Hero