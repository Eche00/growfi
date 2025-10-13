import { Circle, ListAlt, People, Person, RateReview } from "@mui/icons-material"
import { Link } from "react-router"
import { motion } from "framer-motion";

function About() {
  return (
    <div className="sm:w-[85%] w-[90%] mx-auto py-[100px] "> 
       <div className=" flex  items-center border-[1px] border-green-700 rounded-full w-fit mb-[50px]">
               <p className=" text-[14px]  font-[400] py-[8px] px-[20px]  ">
               ABOUT
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-green-700 rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <Circle/>
                </span>
       </div>

       <main className="flex md:flex-row flex-col-reverse items-stretch md:gap-20 gap-10">
        {/* about us  */}
        <motion.section initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}
           className="flex flex-1 flex-col justify-between ">
        <div className=" flex flex-col text-start gap-[24px]">
               
                <h1 className=" text-[#1A1A1A] font-[700] sm:text-[34px] text-[22px]   smm:w-full w-[80%] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px]">
                We are here to help you master the markets <span className=" text-green-700">and </span>take control of your financial journey giving you the skills, tools,   
                  <span className=" text-green-700">  and confidence to trade smarter</span>
                </h1>
                <p className=" text-[#1A1A1A] font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[300px]">
                 Our academy provides the tools, guidance, and strategies you need to confidently navigate the global markets and take charge of your journey toward independence.
                </p>
              </div>
              <div className=" flex items-center justify-center gap-[24px]  py-10 w-fit">
                <Link
                to="/mentorship"
               
                  className="flex items-center justify-center gap-[10px] rounded-full bg-green-700 text-white sm:py-[10px] py-[12px]  sm:w-[200px] w-[170px] text-[16px] sm:text-[18px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                 Mentorship 
                </Link>
                </div>
        </motion.section>



        {/* services  */}
   <div className="flex-1 mx-auto px-4 grid grid-cols-2  gap-6">
    
    {/*  Card 1  */}
    <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}  viewport={{once:true}}
           className="bg-white rounded-2xl shadow-sm p-6 text-center md:h-[200px] flex flex-col items-center justify-center">
    <span className="text-green-700 pb-2"><Person fontSize="large"/></span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        200<span className="text-green-700 ">+</span>
      </h2>
      <p className="mt-2 text-gray-500 text-sm">Students Trained</p>
    </motion.div>
    
    {/*  Card 2  */}
    <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.35 }}  viewport={{once:true}}
           className="bg-white rounded-2xl shadow-sm p-6 text-center md:h-[200px] flex flex-col items-center justify-center">
    <span className="text-green-700 pb-2"><RateReview fontSize="large"/></span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        95<span className="text-green-700 ">%</span>
      </h2>
      <p className="mt-2 text-gray-500 text-sm">Student Success Rate</p>
    </motion.div>
    
    
    <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}  viewport={{once:true}}
           className="bg-white rounded-2xl shadow-sm p-6 text-center md:h-[200px] flex flex-col items-center justify-center">
    <span className="text-green-700 pb-2"><ListAlt fontSize="large"/></span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        500<span className="text-green-700 ">+</span>
      </h2>
      <p className="mt-2 text-gray-500 text-sm">Trading Resources Shagreen</p>
    </motion.div>
    
    {/*  Card 4  */}
    <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.35 }}  viewport={{once:true}}
           className="bg-white rounded-2xl shadow-sm p-6 text-center md:h-[200px] flex flex-col items-center justify-center">
    <span className="text-green-700 pb-2"><People fontSize="large"/></span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        1000<span className="text-green-700 ">+</span>
      </h2>
      <p className="mt-2 text-gray-500 text-sm">Community Members</p>
    </motion.div>

   </div>

       </main>
    </div>
  )
}

export default About