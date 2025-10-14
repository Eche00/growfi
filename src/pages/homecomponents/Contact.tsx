
import {  Circle, LocationOn } from "@mui/icons-material";

function Contact() {
  return (
    <div className="relative min-h-[100vh]">
      <div className="text-[#333]  pl-2 ">
        <section className="flex items-center justify-between">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-white  pl-2 ">
          {" "}
          Contact {" "}
          <span className=" text-[#68FCC6] underline">Us  </span>
        </p>
        <div className="   items-center border-[1px] border-[#68FCC6] rounded-full w-fit  sm:flex hidden">
               <p className=" text-[14px] text-white font-[400] py-[8px] pl-[20px]  ">
               CONTACT INFO
                </p>
                <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-[#68FCC6] rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
               <LocationOn/>
                </span>
       </div>
        </section>
        
      </div>
      {/* container  */}
      <main className="flex flex-col lg:flex-row w-full  bg-white/10 rounded-[18px] my-10">
  {/* Left Section */}
  <section className="flex-1 px-10 py-20 flex flex-col justify-center text-white rounded-r-[30px]">
  {/* Tag */}
  
  <button  className="py-[8px] px-[32px]  bg-black text-white   md:flex hidden items-center justify-center rounded-full shadow-[0_0_6px_0_#68FCC6] w-fit mb-5">Let's Collaborate</button>


  {/* Heading */}
  <h1 className="sm:text-4xl text-2xl font-extrabold leading-[1.1] mb-6">
    Partner With Us To <br /> 
    <span className="text-[#68FCC6] underline underline-offset-4 decoration-2">Revolutionize Investment</span>
  </h1>

  {/* Description */}
  <p className="text-gray-300 sm:text-[17px] text-[14px] sm:w-[80%] mb-10 leading-relaxed">
    Join forces with us to deliver cutting-edge, transparent, and profitable trading 
    solutions. Together, we’ll create a financial future powered by innovation, 
    trust, and smart strategies.
  </p>

  {/* Benefits */}
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-[#68FCC6] mb-3">Why Partner With Us</h2>
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-3 text-gray-300 text-[15px]">
      <p className="flex items-center gap-2"><Circle fontSize="small"/> Data-Driven Decisions</p>
      <p className="flex items-center gap-2"><Circle fontSize="small"/> Risk-Managed Systems</p>
      <p className="flex items-center gap-2"><Circle fontSize="small"/> Seamless Integration</p>
      <p className="flex items-center gap-2"><Circle fontSize="small"/> Transparent Operations</p>
      <p className="flex items-center gap-2"><Circle fontSize="small"/> Dedicated Support</p>
      <p className="flex items-center gap-2"><Circle fontSize="small"/> Global Network Access</p>
    </div>
  </div>

  {/* Steps */}
  <div>
    <h2 className="text-lg font-semibold mb-4 text-[#68FCC6]">
      How the Partnership Works
    </h2>
    <div className="flex flex-col gap-4 text-gray-300 text-[15px]">
      <div className="flex items-start gap-3">
        <span className="bg-[#68FCC6] text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
          1
        </span>
        <p>Schedule a quick strategy call with our investment specialists.</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="bg-[#68FCC6] text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
          2
        </span>
        <p>We analyze your goals and develop a customized partnership roadmap.</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="bg-[#68FCC6] text-black font-bold w-6 h-6 flex items-center justify-center rounded-full">
          3
        </span>
        <p>Launch initiatives together — and start scaling real growth and returns.</p>
      </div>
    </div>
  </div>
</section>


  {/* Right Section (Form) */}
  <section className="flex-1 bg-[#0B0B0F] rounded-t-3xl lg:rounded-none lg:rounded-l-3xl shadow-2xl p-10 flex flex-col justify-center text-white">
  <h2 className="text-3xl font-bold text-center mb-10 text-[#68FCC6]">
    Schedule a Free Consultation
  </h2>

  <form
    className="flex flex-col gap-6"
    
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input
        name="firstName"
        type="text"
        placeholder="First name"
        required
        className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last name"
        required
        className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
      />
    </div>

    <input
      name="company"
      type="text"
      placeholder="Company / Organization"
      required
      className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
    />

    <input
      name="email"
      type="email"
      placeholder="Company email"
      required
      className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
    />

    <input
      name="phone"
      type="tel"
      placeholder="Phone"
      className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
    />

    <select
      name="inquiryType"
      required
      className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
    >
      <option className="bg-[#0B0B0F] text-gray-400">
        How Can We Help You?
      </option>
      <option className="bg-[#0B0B0F]">Partnership Inquiry</option>
      <option className="bg-[#0B0B0F]">Consultation Request</option>
      <option className="bg-[#0B0B0F]">Investment Collaboration</option>
      <option className="bg-[#0B0B0F]">General Question</option>
    </select>

    <textarea
      name="message"
      placeholder="Tell us more about your goals or needs..."
      rows={4}
      className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#68FCC6] focus:ring-1 focus:ring-[#68FCC6] transition-all duration-300"
    ></textarea>

    <button
      type="submit"
      className="bg-[#68FCC6] text-[#0B0B0F] rounded-lg py-3 font-semibold hover:bg-[#52c9a0] transition-all duration-300 shadow-lg hover:shadow-[#68FCC6]/30"
    >
      Submit Request
    </button>
  </form>
</section>

</main>

      <div className="sm:w-[85%] w-[90%] sm:h-[500px] overflow-hidden mx-auto py-10 rounded-[30px] relative" > 
      <img src="/about.webp" alt="" className="w-full h-full object-cover  rounded-[30px]"  />
    </div>
    </div>
  );
}

export default Contact;