import { motion } from "framer-motion";
 import { aboutUsInfo } from "../../utils/aboutus";
 import BallotIcon from '@mui/icons-material/Ballot';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Circle, Scale } from "@mui/icons-material";

function About() {
  return (
    <div className=" py-[100px] relative">
    
      <div className="text-[#333]  pl-2 md:w-[80%] w-[90%] mx-auto">
        <section className="flex items-center justify-between">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-white  pl-2 ">
          {" "}
          What we{" "}
          <span className=" text-[#68FCC6] underline">Do  </span>
        </p>
        <div className="   items-center border-[1px] border-[#68FCC6] rounded-full w-fit  sm:flex hidden">
               <p className=" text-[14px] text-white font-[400] py-[8px] pl-[20px]  ">
               ABOUT US
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-[#68FCC6] rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <Circle/>
                </span>
       </div>
        </section>
        <p className="text-gray-300 text-[18px] font-[300] ">
          Smart, reliable, and sustainable energy solutions made simple.
        </p>
      </div>

      {/* container  */}
      <main className="pt-20 pb-10 flex  flex-wrap items-stretch justify-center gap-[20px] p-[10px] sm:w-[80%] w-[90%] mx-auto">
        {aboutUsInfo.map((b) => (
          <motion.div
            className="flex flex-col gap-[10px] shadow-md p-[20px] rounded-[18px] flex-1  border-[#68FCC6] hover:scale-[105%] transition-all duration-300 cursor-pointer group bg-white/10"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            viewport={{ once: true }}>
            <div
              className="border border-gray-300 min-h-[150px] min-w-[150px] flex items-center justify-center rounded-[18px] shadow-md transition-all duration-300 hover:scale-105 bg-black">
              <span className="bg-[#68FCC6] w-fit h-fit text-black p-4 rounded-[18px]">
                {b.icon === "pooling" && (
                  <BallotIcon sx={{ fontSize: 30 }} />
                )}
                {b.icon === "scalability" && (
                  <Scale sx={{ fontSize: 30 }} />
                )}
                {b.icon === "insights" && (
                  <InsightsIcon sx={{ fontSize: 30 }} />
                )}
                {b.icon === "technology" && (
                  <AutoAwesomeIcon sx={{ fontSize: 30 }} />
                )}
              </span>
            </div>
            <h2 className="text-[20px] w-full text-nowrap mx-auto text-[#68FCC6] font-[600] text-center">
              {b.title}
            </h2>
            <p className=" min-w-[200px] text-gray-300 text-center">
              {b.writeup}
            </p>
          </motion.div>
        ))}

      </main>
      <section className="pb-20 flex  flex-wrap items-stretch justify-center gap-[20px]  w-[80%] mx-auto max-h-[400px] overflow-hidden rounded-[8px] relative">
      <div className=" flex  items-center border-[1px] border-[#68FCC6] rounded-full w-fit absolute top-5 left-5">
               <p className=" text-[14px] text-white font-[400] py-[8px] pl-[20px]  ">
               ABOUT US
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-[#68FCC6] rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <Circle/>
                </span>
       </div>
      <img src="/aboutimg.webp" alt="" className="w-full h-full  object-cover" />

      </section>

    </div>
  );
}

export default About;