import { LocationCity } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
        <div className=" w-full  overflow-hidden  h-full sm:min-h-[100vh] relative bg-gradient-to-b from-black via-[#7E7ED7]  to-black">

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
               OUR PLANS
                </p>
               <p className=" sm:text-[12px] text-[9px] text-nowrap font-[400] py-[10px] px-[20px] text-white ">
                WHAT WE OFFER
                </p>
               
               </div>
              <h1 className="text-white font-[400] sm:text-[64px] lg:max-w-[90%] mx-auto text-center text-[32px] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px] sm:w-full w-[90%] mx-auto sm:mx-0">
Plans Built for Every    <br />
  <span className="text-[#68FCC6]"> Investor.</span>
</h1>
                <p className=" text-white font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[300px] mx-auto text-center">
               Whether you’re just starting out or managing advanced strategies, We offers tailored plans to match your goals, experience, and ambition.</p>
              </div>
            
            </motion.div>
            {/* hero right section  */}
           <div className="sm:w-[85%] w-[90%] sm:h-[500px] overflow-hidden mx-auto py-10 rounded-[30px] relative" > 
      <img src="https://www.tradefinancemagazine.com/wp-content/uploads/2025/07/684d85b9a2d426001dad8c11.jpg" alt="" className="w-full h-full object-cover  rounded-[30px]"  />
    </div>
          </div>
    </section>
   </div>
  )
}

export default Hero