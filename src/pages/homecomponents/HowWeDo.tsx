import { Circle } from "@mui/icons-material"
import { solutionInfo } from "../../utils/solutions"
import { motion } from "framer-motion";
import { Link } from "react-router";

function HowWeDo() {
  return (
    <div className=" py-[100px] sm:w-[85%] w-[90%] mx-auto"> 
  <div className="text-[#333]  pl-2 ">
        <section className="flex items-center justify-between">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-white  pl-2 ">
          {" "}
          How we {" "}
          <span className=" text-[#68FCC6] underline">Do  </span>
        </p>
        <div className="   items-center border-[1px] border-[#68FCC6] rounded-full w-fit  sm:flex hidden">
               <p className=" text-[14px] text-white font-[400] py-[8px] pl-[20px]  ">
               OUR AIM
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-[#68FCC6] rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <Circle/>
                </span>
       </div>
        </section>
        <p className="text-gray-300 text-[18px] font-[300] ">
        We combine data-driven insights, strategic expertise, and innovative tools to <br /> deliver consistent investment growth.
        </p>
      </div>


      <main className="pt-20 pb-10 grid lg:grid-cols-3 xm:grid-cols-2 grid-cols-1 items-stretch justify-center gap-[20px] p-[10px]">
        {solutionInfo.map((b) => (
          <motion.div
            className="flex flex-col justify-between gap-10 pt-20 shadow-md p-[20px] rounded-[10px] bg-white/10  group"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            viewport={{ once: true }}>
           
           <div className="flex flex-col gap-2 ">
           <h2 className="text-[22px] w-full text-nowrap  text-white group-hover:text-[#68FCC6] font-[600] ">
              {b.title}
            </h2>
            <p className="  text-gray-300 ">
              {b.writeup}
            </p>
           </div>

            <div className=" border-t-[1px] border-[#68FCC6] pt-[20px]">
             <button className=" text-white hover:text-[#68FCC6] text-[14px] border-b hover:border-[#68FCC6] cursor-pointer transition-all duration-300">Learn More</button>
            </div>
          </motion.div>
        ))}

      </main>
      <Link to='/calculator'  className="py-[8px] px-[32px]  bg-black text-white   md:flex hidden items-center justify-center rounded-full shadow-[0_0_6px_0_#68FCC6] w-fit mx-auto">Learn More</Link>

    </div>
  )
}

export default HowWeDo