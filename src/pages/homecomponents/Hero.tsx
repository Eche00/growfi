import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from "react-router"
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className=" w-full  overflow-hidden  h-full min-h-[100vh] relative bg-gradient-to-b from-black via-[#7E7ED7]  to-black">

    <section className="md:pt-[20px] z-0 relative">
    <div
            
            className="  max-w-[90%] mx-auto flex  flex-col  mb-[100px] ">
            {/* hero top section  */}
            <motion.div
           
              className=" flex items-center justify-center flex-col flex-1 gap-5  pt-[120px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}  
              viewport={{once:true}}
              
             >
               <div className=" flex items-center border-[1px] border-[#68FCC6] rounded-full w-fit p-2">
                 <Link to='/signals'  className=" sm:text-[12px] text-[9px] text-nowrap  font-[400] py-[10px] px-[20px] bg-gradient-to-b from-80% from-[#68FCC6]  to-white text-black rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer border-none">
                INVESTMENT PLANS
                </Link>
               <p className=" sm:text-[12px] text-[9px] text-nowrap font-[400] py-[10px] px-[20px] text-white ">
               SEE LATEST OFFER 
                </p>
               
               </div>
              <div className=" flex lg:flex-row flex-col items-center justify-center gap-[24px] pt-[50px]">
              
                <section className="flex flex-col items-start flex-1">
                 <h1 className="text-white font-[400] sm:text-[64px] lg:max-w-[700px] text-[32px] smm:leading-[130%] smm:tracker-[1.28px] leading-[120%] tracker-[0.8px] sm:w-full w-[90%] mx-auto sm:mx-0">
  Grow your wealth <span className="text-[#68FCC6]">&</span> take full control of your 
  <span className="text-[#68FCC6]"> financial future.</span>
</h1>

               
                </section>
                 <section className="flex-1 flex flex-col">
                   <p className=" text-gray-300 font-[300] sm:text-[20px] text-[16px]  sm:w-full w-[90%] mx-auto ">
                Grow your wealth with expert insights, proven strategies, and intelligent tools to guide every investment decision. Gain the clarity and confidence to turn your goals into lasting success.
                </p>
                  <div className=" flex items-center justify-center sm:gap-[24px] gap-2  py-10 w-fit">
                  
                <Link
                 to='/mentorship'
                  className="flex items-center justify-center gap-[10px] rounded-full bg-gradient-to-b from-80% from-[#68FCC6]  to-white text-black sm:py-[10px] py-[12px]  sm:w-[200px] w-[150px] text-[16px] sm:text-[18px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                 Get started
                </Link>
               
                <Link
                  to="/courses"
                  className=" sm:py-[10px] py-[12px] sm:w-[200px] w-[150px] text-[16px] text-white sm:text-[18px]   rounded-full flex items-center justify-center font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                  How it works  <ArrowOutwardIcon/>
                </Link>
               
              </div>
                 </section>
              </div>
             
            </motion.div>


            {/* hero bottom section  */}
            <div className=" flex-1  flex sm:flex-row flex-col gap-4 relative z-10">
             {/* Total Market Size  && Total Available  */}

              <div className="flex-1 w-full flex flex-col justify-between gap-4 bg-gradient-to-br   text-white">

   
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex-1 ">
      <p className="text-sm text-gray-300">Total market size</p>
      <h2 className="text-3xl font-semibold mt-2">$42.74B</h2>
      <p className="text-xs text-gray-400 mt-3">Updated on Jan 23, 2023</p>
    </div>

   
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex flex-1 flex-col justify-between">
      <div>
        <p className="text-sm text-gray-300">Total available</p>
        <h2 className="text-3xl font-semibold mt-2">$26.35B</h2>
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt=""/>
        <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white -ml-2" alt=""/>
        <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white -ml-2" alt=""/>
      </div>
      <p className="text-xs text-gray-400 mt-3">Updated on Jan 23, 2023</p>
    </div>

    

  </div>
    {/* Chart Section  */}

<div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-5 md:col-span-1">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-semibold">$3,852.75</h2>
          <p className="text-green-400 text-sm">+25.42%</p>
        </div>
        <button className="text-gray-300 hover:text-white text-xl">⋯</button>
      </div>

      {/* Chart Line (SVG mock)  */}
      <div className="h-32 relative">
        <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,80 Q60,60 120,70 T300,40" fill="none" stroke="#8064f4" stroke-width="3" />
        </svg>
        <div className="absolute bottom-0 flex justify-between w-full text-xs text-gray-400">
          <span>1D</span>
          <span className="text-white font-semibold">1W</span>
          <span>1M</span>
          <span>6M</span>
          <span>1Y</span>
          <span>max</span>
        </div>
      </div>
    </div>
             <motion.img initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale:1,opacity: 1 }}
              transition={{ duration: 1}} viewport={{once:true}} src="/heroimg.webp" alt="hero-img" className="flex-1 md:w-full w-full md:h-full object-cover rounded-[18px] hidden lg:flex" />
            </div>
          </div>
    </section>

  
   </div>
  )
}

export default Hero