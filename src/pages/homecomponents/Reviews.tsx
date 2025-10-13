import { Circle } from "@mui/icons-material"

function Reviews() {
  return (
    <div className="sm:w-[85%] w-[90%] mx-auto py-[100px] min-h-[100vh] flex flex-col "> 
    <section className="flex items-center justify-between mb-[50px] h-fit">
    <div className=" flex  items-center border-[1px] border-green-700 rounded-full w-fit ">
            <p className=" text-[14px]  font-[400] py-[8px] px-[20px]  ">
            Reviews
             </p>
             <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-green-700 rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
            <Circle/>
             </span>
    </div>

    <h1 className=" text-green-700 font-[700] lg:text-[34px] sm:text-[22px] text-[16px]">What our students say</h1>
    </section>
    <div className="flex items-center justify-center">
  <h1 className="text-[#1A1A1A] font-[400] sm:text-[34px] text-[18px] w-full sm:w-[70%] smm:tracker-[1.28px] leading-[100%] tracker-[0.8px] text-center">
    Hear From Traders Who Grew With Our Mentorship, Signals, and
    <span className="text-green-700"> Structured Courses</span>
  </h1>
</div>

  {/* review container */}
   <main className=" w-full h-full flex flex-1 items-center justify-center lg:py-0 py-[80px]">
   <section className="flex flex-wrap items-center justify-center py-20 gap-x-10 gap-y-[150px]">
  {/* each review  */}
  <div className=" relative sm:max-w-[350px] w-full p-5 shadow-2xl rounded-tr-[50%] rounded-bl-4xl ">
    <img src="/profile1.webp" alt="" className="w-[90%] h-[200px] object-cover rounded-[10px] absolute bottom-1/2 mb-6" />
    <div className=" w-full h-20 bg-transparent"></div>
    <p className="py-2 text-gray-700">
      “Very reliable signals. My win rate has improved, 
      and I trade with more confidence.”
    </p>
    <hr className=" w-full h-1 rounded-full bg-gradient-to-r from-transparent to-green-700 border-none my-3" />
    <div className="flex items-center justify-between">
      <span>Chinedu, Lagos</span><span>12-04-24</span>
    </div>
  </div>

  {/* each review  */}
  <div className=" relative sm:max-w-[350px] w-full p-5 shadow-2xl rounded-tr-[50%] rounded-bl-4xl">
    <img src="/profile3.webp" alt="" className="w-[90%] h-[200px] object-cover rounded-[10px] absolute bottom-1/2 mb-6" />
    <div className=" w-full h-20 bg-transparent"></div>
    <p className="py-2 text-gray-700">
      “The mentorship is simple to follow. 
      I finally understand how to manage my trades.”
    </p>
    <hr className=" w-full h-1 rounded-full bg-gradient-to-r from-transparent to-green-700 border-none my-3" />
    <div className="flex items-center justify-between">
      <span>Amina, Abuja</span><span>05-06-24</span>
    </div>
  </div>

  {/* each review  */}
  <div className=" relative sm:max-w-[350px] w-full p-5 shadow-2xl rounded-tr-[50%] rounded-bl-4xl">
    <img src="/profile2.webp" alt="" className="w-[90%] h-[200px] object-cover rounded-[10px] absolute bottom-1/2 mb-6" />
    <div className=" w-full h-20 bg-transparent"></div>
    <p className="py-2 text-gray-700">
      “Great support from the team. 
      Trading feels less risky and more structured now.”
    </p>
    <hr className=" w-full h-1 rounded-full bg-gradient-to-r from-transparent to-green-700 border-none my-3" />
    <div className="flex items-center justify-between">
      <span>Oluwaseun, Ibadan</span><span>18-07-24</span>
    </div>
  </div>
</section>

   </main>
    </div>
  )
}

export default Reviews