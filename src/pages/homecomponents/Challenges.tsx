import { Circle } from "@mui/icons-material"
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { challengesInfo } from "../../utils/challenges";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Challenges() {
  const [show,setShow]= useState<boolean>(false);
  return (
   <div className=" py-[100px] sm:w-[85%] w-[90%] mx-auto overflow-hidden"> 
  <div className="text-[#333]  pl-2 ">
        <section className="flex items-center justify-between">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-white  pl-2 ">
          {" "}
          Trading {" "}
          <span className=" text-[#68FCC6] underline">Challenges  </span>
        </p>
        <div className="   items-center border-[1px] border-[#68FCC6] rounded-full w-fit  sm:flex hidden">
               <p className=" text-[14px] text-white font-[400] py-[8px] pl-[20px]  ">
               CHALLENGES
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-[#68FCC6] rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <Circle/>
                </span>
       </div>
        </section>
        <p className="text-gray-300 text-[18px] font-[300] ">
        We understand the challenges investors face, from volatile markets to complex data.  <br /> GrowFi combines intelligence, strategy, and innovation to help you overcome them with confidence.
        </p>
      </div>


    <AnimatePresence mode="wait"> 
{show ? <motion.main initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }} className="pt-20 pb-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch justify-center gap-[20px] p-[10px]">
         {challengesInfo.map((b) => (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-10 pt-20 shadow-md p-[20px] rounded-[10px] bg-white/10  group"
            >
           
           <div className="flex flex-col gap-2 ">
           <h2 className="text-[22px] w-full   text-white group-hover:text-[#68FCC6] font-[600] ">
              {b.title}
            </h2>
            <p className="  text-gray-300 ">
              {b.writeup}
            </p>
           </div>

            <div className=" border-t-[1px] border-[#68FCC6] pt-[20px]">
            </div>
          </motion.div>
        ))}
        </motion.main>

       : 
       <motion.main 
           initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }} className="pt-20 pb-10 flex flex-col  w-full items-stretch justify-center gap-[20px]">
        <Swiper
         className="custom-swiper w-full  "
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >{challengesInfo.map((b) => (
          <SwiperSlide
            className="flex flex-col justify-between gap-10 pt-20 shadow-md p-[20px] rounded-[10px] bg-white/10  group"
            key={b.title}>
           
           <div className="flex flex-col gap-2 sm:h-[200px] pb-[20px]">
           <h2 className="text-[22px] w-full   text-white group-hover:text-[#68FCC6] font-[600] ">
              {b.title}
            </h2>
            <p className="  text-gray-300 ">
              {b.writeup}
            </p>
           </div>

            <div className=" border-t-[1px] border-[#68FCC6] pt-[20px]">
             <button onClick={()=>setShow(!show)}  className=" text-white hover:text-[#68FCC6] text-[14px] border-b hover:border-[#68FCC6] cursor-pointer transition-all duration-300">View More</button>
            </div>
          </SwiperSlide>
        ))}
</Swiper>

      </motion.main>
      
      }
      </AnimatePresence>
      <button onClick={()=>setShow(!show)}  className="py-[8px] px-[32px]  bg-black text-white   md:flex hidden items-center justify-center rounded-full shadow-[0_0_6px_0_#68FCC6] w-fit mx-auto cursor-pointer">View {show ? "Less" : "More"}</button>

    </div>
  )
}

export default Challenges