import AdjustIcon from "@mui/icons-material/Adjust";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Categories() {
  return (
     <div className=" py-[100px] relative z-10 flex flex-col gap-32">
     

      {/* Begining  */}
      <div id="begining" className=" mx-auto  relative  flex lg:flex-row flex-col  justify-center lg:gap-[10px] gap-20 scroll-mt-36">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500] pt-[60px] z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-white  md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              The{" "}
              <span className=" text-[#68FCC6] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Begining
              </span>
            </motion.h1>
            <p className="text-white  text-[20px] font-[500] md:max-w-[600px] text-center">
              At GrowFi, our journey began with a single goal, to simplify investing for everyone. We believe powerful financial tools shouldn’t be complex or exclusive. By combining intelligent analytics with an intuitive design, we help traders and investors make smarter decisions with confidence.
            </p>
          </div>
        </section>

        <section className="lg:w-[50%] w-[90%] flex flex-wrap items-stretch gap-6 px-5 mx-auto py-10 ">
          <motion.div
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  border-[#68FCC6] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[230px] border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end pr-5 w-full relative">
              <img
                src="https://bhima.ae/wp-content/uploads/2024/02/Banner.png"
                alt="our mission img"
                className="w-[95%] h-[200px] object-cover rounded-[18px] absolute -top-1/1 left-1/2 -translate-x-1/2 "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-20 h-20 text-[#68FCC6] self-end mt-6"
                fill="currentColor">
                <path d="M464 32c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16zm-288 0c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              {/* Name */}
              <h2 className="text-xl font-semibold text-[#68FCC6] text-center">
                Mission
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-white  text-center">
                Founder’s Insight
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 to-[#68FCC6]  rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-white ">
We started GrowFi to make investing smarter, simpler, and accessible to everyone, turning data into clear financial decisions that empower growth.
            </p>
          </motion.div>
        </section>
      </div>
  {/* Mission  */}
      <div id="mission" className="   mx-auto  relative  flex lg:flex-row-reverse flex-col justify-center lg:gap-[10px] gap-20 scroll-mt-36">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500] pt-[60px] z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-white  md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              Our{" "}
              <span className=" text-[#68FCC6] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Mission
              </span>
            </motion.h1>
            <p className="text-white  text-[20px] font-[500] md:max-w-[600px] text-center">
              Our mission is to empower individuals and businesses to build sustainable wealth through data-driven investing. We provide transparent insights, automated strategies, and real-time analytics that help users trade smarter, minimize risk, and grow steadily in every market condition.
            </p>
          </div>
        </section>

        <section className="lg:w-[50%] w-[90%] flex flex-wrap items-stretch gap-6 px-5 mx-auto py-10 ">
          <motion.div
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  border-[#68FCC6] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[230px] border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end pr-5 w-full relative">
              <img
                src="https://cdn.givingcompass.org/wp-content/uploads/2019/06/14115800/Tips-for-Mission-Aligned-Investment-Opportunities.jpg"
                alt="our mission img"
                className="w-[95%] h-[200px] object-cover rounded-[18px] absolute -top-1/1 left-1/2 -translate-x-1/2 object-top"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-20 h-20 text-[#68FCC6] self-end mt-6"
                fill="currentColor">
                <path d="M464 32c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16zm-288 0c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              {/* Name */}
              <h2 className="text-xl font-semibold text-[#68FCC6] text-center">
                Mission
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-  text-center">
                Strategy Director
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 to-[#68FCC6]  rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-white ">
             Our mission is to give every investor the tools to trade confidently, backed by real data, automation, and clarity, not emotion or guesswork.
            </p>
          </motion.div>
        </section>
      </div>
      {/* Vision  */}
      <div id="vision" className=" mx-auto  relative  flex lg:flex-row flex-col  justify-center lg:gap-[10px] gap-20 scroll-mt-36">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500] pt-[60px] z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-white  md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              Our{" "}
              <span className=" text-[#68FCC6] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Vision
              </span>
            </motion.h1>
            <p className="text-white  text-[20px] font-[500] md:max-w-[600px] text-center">
              We envision a world where financial growth is accessible to all, not just the few. GrowFi aims to bridge the gap between technology and investing, creating a future where every user can achieve financial independence through intelligent, simplified, and informed trading.
            </p>
          </div>
        </section>

        <section className="lg:w-[50%] w-[90%] flex flex-wrap items-stretch gap-6 px-5 mx-auto py-10 ">
          <motion.div
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  border-[#68FCC6] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[230px] border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end pr-5 w-full relative">
              <img
                src="https://data.daryo.uz/media/2023/11/654dc4d42cd24.jpeg"
                alt="our mission img"
                className="w-[95%] h-[200px] object-cover rounded-[18px] absolute -top-1/1 left-1/2 -translate-x-1/2 object-center"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-20 h-20 text-[#68FCC6] self-end mt-6"
                fill="currentColor">
                <path d="M464 32c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16zm-288 0c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              {/* Name */}
              <h2 className="text-xl font-semibold text-[#68FCC6] text-center">
                Vision
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-  text-center">
                Head of Innovation
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 to-[#68FCC6]  rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-white ">
We see a future where intelligent investing is effortless, where data, technology, and trust drive lasting financial success for all.
            </p>
          </motion.div>
        </section>
      </div>

      
    </div>
  )
}

export default Categories