import { Circle } from "@mui/icons-material"

function Success() {
  return (
    <div className="sm:w-[85%] w-[90%] mx-auto py-[100px] min-h-[100vh] flex flex-col "> 
   <div className="text-[#333]  pl-2 ">
        <section className="flex items-center justify-between">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-white  pl-2 ">
          {" "}
          Success {" "}
          <span className=" text-[#68FCC6] underline">Stories  </span>
        </p>
        <div className="   items-center border-[1px] border-[#68FCC6] rounded-full w-fit  sm:flex hidden">
               <p className=" text-[14px] text-white font-[400] py-[8px] pl-[20px]  ">
               OUR TIMELINE
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-[#68FCC6] rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <Circle/>
                </span>
       </div>
        </section>
        <p className="text-gray-300 text-[18px] font-[300] ">
        From humble beginnings to industry recognition, story of progress and <br /> purpose powered by trust.
        </p>
      </div>

  {/* review container */}
  <main className="w-full flex items-center justify-center py-20">
  <section className="flex flex-wrap justify-center gap-10 sm:px-5 max-w-7xl">
    {/* Card 1 */}
    <div className="bg-white/10 rounded-xl shadow-md overflow-hidden max-w-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg p-5">
      <img
        src="/company1.webp"
        alt="success story 1"
        className="w-full h-48 object-cover rounded-[8px]"
      />
      <div className="sm:p-6 p-0">
        <p className="uppercase text-gray-300 text-xs font-medium mb-2">
          Business Growth
        </p>
        <h3 className="text-lg font-semibold text-[#68FCC6] mb-2">
          From a struggling startup to a scalable enterprise
        </h3>
        <p className="text-white text-sm mb-4 leading-relaxed">
          “When we began, our biggest challenge was maintaining profitability
          while expanding operations. Through the strategies and data-driven
          insights we implemented, we streamlined our processes and identified
          new growth channels. Today, we’ve tripled our client base and built a
          sustainable model that consistently delivers results across multiple
          markets.”
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white/10 rounded-xl shadow-md overflow-hidden max-w-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg p-5">
      <img
        src="/company2.webp"
        alt="success story 2"
        className="w-full h-48 object-cover rounded-[8px]"
      />
           <div className="sm:p-6 p-0">

        <p className="uppercase text-gray-300 text-xs font-medium mb-2">
          Leadership & Team
        </p>
        <h3 className="text-lg font-semibold text-[#68FCC6] mb-2">
          Building a culture of innovation and collaboration
        </h3>
        <p className="text-white text-sm mb-4 leading-relaxed">
          “Our transformation started with investing in our people. Through
          mentorship, structured training, and shared goals, we cultivated a
          high-performing team that thrives on innovation. Every milestone we’ve
          reached is a result of collective effort — a team aligned with
          excellence and long-term vision.”
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white/10 rounded-xl shadow-md overflow-hidden max-w-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg p-5">
      <img
        src="/company3.webp"
        alt="success story 3"
        className="w-full h-48 object-cover rounded-[8px]"
      />
          <div className="sm:p-6 p-0">

        <p className="uppercase text-gray-300 text-xs font-medium mb-2">
          Partnership & Support
        </p>
        <h3 className="text-lg font-semibold text-[#68FCC6] mb-2">
          Strategic partnerships that fueled sustainable growth
        </h3>
        <p className="text-white text-sm mb-4 leading-relaxed">
          “Collaboration has been at the heart of our success. By forming
          meaningful partnerships and leveraging expert guidance, we’ve expanded
          our service reach, enhanced customer trust, and strengthened our brand
          identity. Each partnership has added value — helping us build a
          stronger, smarter, and more resilient company.”
        </p>
      </div>
    </div>
  </section>
</main>


    </div>
  )
}

export default Success