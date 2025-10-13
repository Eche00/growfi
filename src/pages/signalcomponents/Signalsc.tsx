import  { useState } from "react";

function Signalsc() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="w-full overflow-hidden min-h-[70vh]">
      
      <section className="pt-[90px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Mentorship Packages
      </h2>
        <div className="max-w-[90%] mx-auto flex lg:flex-row-reverse flex-col justify-center sm:mb-[100px] mb-[125px] items-center gap-10">
          
          {/* left section */}
          <div className="flex-1 gap-[200px] lg:pt-[100px] pt-[60px]">
            <div className="flex flex-col gap-[24px] lg:items-end">
                {/* toggle buttons */}
                <div className="flex gap-4 border border-green-700 rounded-full p-2 w-fit">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-10 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    billing === "monthly"
                      ? "bg-green-700 text-white"
                      : "text-green-700"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("annual")}
                  className={`px-10 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    billing === "annual"
                      ? "bg-green-700 text-white"
                      : "text-green-700"
                  }`}
                >
                  Annual
                </button>
              </div>

              <p className="text-[#1A1A1A] font-[300] sm:text-[20px] text-[16px] sm:w-[500px] w-[90%] mx-auto sm:mx-0">
                Access accurate Forex signals every day, crafted by experts with proven strategies.
                Stay updated, reduce risks, and grow your profits with ease. Perfect for both beginners
                and experienced traders looking to trade smarter.
              </p>
            </div>

            {/* toggle + price */}
            <div className="flex flex-col items-center sm:py-[70px] py-[20px] gap-6 lg:items-end">
              
            

              {/* price display */}
              <p className="flex items-center justify-center gap-[10px] rounded-[10px] bg-green-700 text-white sm:py-[20px] sm:w-[250px] w-[200px] py-[14px] text-[18px] font-[500]">
                {billing === "monthly" ? "$250 / month" : "$2,500 / year"}
              </p>
            </div>
          </div>

          {/* right section */}
          <div className="flex-1 flex items-end relative sm:pt-[50px] z-10">
            <img
              src="/signalimg2.webp"
              alt="signals-hero-img"
              className="w-full rounded-[18px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signalsc;
