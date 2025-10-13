import { Check, Circle } from "@mui/icons-material"

function Services() {
  return (
    <div className="sm:w-[85%] w-[90%] mx-auto py-[100px] "> 
    <div className=" flex  items-center border-[1px] border-green-700 rounded-full w-fit mb-[50px]">
            <p className=" text-[14px]  font-[400] py-[8px] px-[20px]  ">
            SERVICES
             </p>
             <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-green-700 rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
            <Circle/>
             </span>
    </div>
              <div className="flex items-center justify-center">
              <h1 className=" text-[#1A1A1A] font-[400] sm:text-[44px] text-[22px]   w-full sm:w-[70%]  smm:tracker-[1.28px] leading-[100%] tracker-[0.8px] text-center">
              Professional Guidance Through Mentorship, Signals, and 
                  <span className=" text-green-700">  Structured Courses</span>
                </h1>
              </div>
              
              <main className=" w-full">
  
        {/* trading signal section  */}
        <section className=" py-[64px]  flex justify-between flex-col lg:flex-row gap-[20px] sm:gap-0">
          {/* 1  */}
          <div className="flex flex-col gap-[20px] ">
  <span className="text-green-600 font-[700] uppercase tracking-wide">
    Trading Signals
  </span>
  <p className=" text-[18px] font-[600] leading-[32px] w-[256px]">
    Precision entries. Clear exits. Smarter trades.
  </p>
  <p className="text-[#6C727580] text-[16px] font-[600] leading-[24px]">
    Stay ahead of the market with expert buy & sell setups.
  </p>
</div>

          {/* 2 */}
          <div
           
            className="flex flex-col gap-[32px]">
            <div className=" relative   overflow-hidden md:w-fit w-full rounded-[24px]">
              <img
                src='/signals.webp'
                className="  object-cover md:w-[600px] sm:w-full w-full lg:h-[528px] md:h-[504px] sm:h-[528px] h-[428px]  rounded-[24px]"
                alt=""
              />
              {/* updaate  */}
              <section className="absolute lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] left-[5%] top-8  md:bottom-0 flex flex-col sm:px-[60px] px-[32px] sm:pt-[60px] pt-[32px] sm:gap-[24px] gap-[13px] rounded-t-[18px] bg-green-700/50 h-fit">
  

  <div>
    <h1 className=" text-[#141718] dark:text-[#FEFEFE] sm:text-[28px] font-[700] leading-[40px] text-[15.26px]">
      Live Trading Signals 📈
    </h1>
    <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[16px] font-[500] leading-[22px]">
      Get real-time buy/sell alerts, market insights, and trade setups directly
      from professionals.
    </p>
  </div>

  {/* Highlight signals */}
  <div className="flex gap-[9px] overflow-hidden w-full">
    <div className="flex flex-col gap-[6px] w-1/2 text-[#141718] dark:text-[#FEFEFE]">
      <p className="sm:text-[14px] text-[7.63px] font-[600]">EUR/USD</p>
      <div className="p-[10px] sm:p-[15px] rounded-[9px] bg-[#B5E4CA] text-[#141718] font-[600] text-[10px] sm:text-[14px]">
        Signal: <span className="text-green-700">BUY</span> <br />
        Entry: 1.0825
      </div>
    </div>

    <div className="flex flex-col gap-[6px] w-1/2 text-[#141718] dark:text-[#FEFEFE]">
      <p className="sm:text-[14px] text-[7.63px] font-[600]">BTC/USDT</p>
      <div className="p-[10px] sm:p-[15px] rounded-[9px] bg-[#FDD5D5] text-[#141718] font-[600] text-[10px] sm:text-[14px]">
        Signal: <span className="text-red-600">SELL</span> <br />
        Entry: 67,500
      </div>
    </div>
  </div>

  {/* Extra info */}
  <div className="flex flex-col gap-[6px]">
    <h2 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
      Why follow our signals?
    </h2>
    <div className="sm:p-[15px] p-[8.18px] flex flex-col gap-[12px] border-[0.75px] border-[#E8ECEF] dark:border-[#343839] rounded-[9px]">
      <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
        <Check/> Real-time alerts with entry, stop loss & take profit  
      </p>
      <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
      <Check/> High win-rate strategies tested on live markets  
      </p>
      <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
      <Check/> Signals for Forex, Crypto, and Stocks  
      </p>
      <p className="text-gray-300 text-[10px] sm:text-[12px] font-[400] leading-[20px]">
        Past performance does not guarantee future results. Trade responsibly.
      </p>
    </div>
  </div>
</section>

            </div>

            <p className="  md:w-[600px] sm:w-full w-full  text-[16px] font-[500] leading-[24px] text-[#6C7275] ">
              Brainwave has improved its NLP algorithms to enhance its chatbot
              technology. This allows the chatbot to better understand the
              nuances of human language and conversations, leading to more
              accurate and relevant responses.
            </p>
          </div>
        </section>

       {/* mentorship section  */}
<section className=" py-[64px]  flex justify-between flex-col lg:flex-row-reverse gap-[20px] sm:gap-0">
  {/* 1  */}
  <div className="flex flex-col lg:items-end w-full  flex-1  gap-[20px] lg:text-right">
    <span className="text-green-600 font-[700] uppercase tracking-wide">
      Mentorship Program
    </span>
    <p className=" text-[18px] font-[600] leading-[32px] w-[256px]">
      Learn. Practice. Grow with guidance.
    </p>
    <p className="text-[#6C727580] text-[16px] font-[600] leading-[24px]">
      Get one-on-one mentorship from industry experts and accelerate your trading journey.
    </p>
  </div>

  {/* 2 */}
  <div className="flex flex-col gap-[32px]">
    <div className=" relative overflow-hidden md:w-fit w-full rounded-[24px]">
      <img
        src='/mentorship.webp'
        className=" object-cover md:w-[600px] sm:w-full w-full lg:h-[528px] md:h-[504px] sm:h-[528px] h-[428px] rounded-[24px]"
        alt=""
      />
      {/* updated */}
      <section className="absolute lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] left-[5%] top-8 md:bottom-0 flex flex-col sm:px-[60px] px-[32px] sm:pt-[60px] pt-[32px] sm:gap-[24px] gap-[13px] rounded-t-[18px] bg-green-700/50 h-fit">
        <div>
          <h1 className=" text-[#141718] dark:text-[#FEFEFE] sm:text-[28px] font-[700] leading-[40px] text-[15.26px]">
            Personal Mentorship 🌟
          </h1>
          <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[16px] font-[500] leading-[22px]">
            Unlock your potential with direct guidance, personalized feedback, and real-world strategies.
          </p>
        </div>

        {/* Highlight benefits */}
        <div className="flex gap-[9px] overflow-hidden w-full">
          <div className="flex flex-col gap-[6px] w-1/2 text-[#141718] dark:text-[#FEFEFE]">
            <p className="sm:text-[14px] text-[7.63px] font-[600]">1-on-1 Coaching</p>
            <div className="p-[10px] sm:p-[15px] rounded-[9px] bg-[#B5E4CA] text-[#141718] font-[600] text-[10px] sm:text-[14px]">
              Tailored sessions <br />
              Focused on your goals
            </div>
          </div>

          <div className="flex flex-col gap-[6px] w-1/2 text-[#141718] dark:text-[#FEFEFE]">
            <p className="sm:text-[14px] text-[7.63px] font-[600]">Community Access</p>
            <div className="p-[10px] sm:p-[15px] rounded-[9px] bg-[#FDD5D5] text-[#141718] font-[600] text-[10px] sm:text-[14px]">
              Join a network <br />
              Learn with peers
            </div>
          </div>
        </div>

        {/* Extra info */}
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
            Why join our mentorship?
          </h2>
          <div className="sm:p-[15px] p-[8.18px] flex flex-col gap-[12px] border-[0.75px] border-[#E8ECEF] dark:border-[#343839] rounded-[9px]">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
              <Check/> Personalized guidance from seasoned traders  
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
              <Check/> Practical insights with real market examples  
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
              <Check/> Access to exclusive resources & tools  
            </p>
            <p className="text-gray-300 text-[10px] sm:text-[12px] font-[400] leading-[20px]">
              Growth takes time and effort — but with guidance, you’ll move faster.
            </p>
          </div>
        </div>
      </section>
    </div>

    <p className="md:w-[600px] sm:w-full w-full text-[16px] font-[500] leading-[24px] text-[#6C7275] ">
      Our mentorship program is designed to shorten your learning curve. Whether you’re a beginner or looking to refine advanced skills, we provide the structure, strategies, and support you need to succeed in trading and beyond.
    </p>
  </div>
</section>


       {/* courses section  */}
<section className=" py-[64px]  flex justify-between flex-col lg:flex-row gap-[20px] sm:gap-0">
  {/* 1  */}
  <div className="flex flex-col gap-[20px] ">
    <span className="text-green-600 font-[700] uppercase tracking-wide">
      Courses
    </span>
    <p className=" text-[18px] font-[600] leading-[32px] w-[256px]">
      Learn trading the right way.
    </p>
    <p className="text-[#6C727580] text-[16px] font-[600] leading-[24px]">
      Access structured lessons, from basics to advanced strategies, designed for all levels.
    </p>
  </div>

  {/* 2 */}
  <div className="flex flex-col gap-[32px]">
    <div className=" relative overflow-hidden md:w-fit w-full rounded-[24px]">
      <img
        src='/courses.webp'
        className=" object-cover md:w-[600px] sm:w-full w-full lg:h-[528px] md:h-[504px] sm:h-[528px] h-[428px] rounded-[24px]"
        alt=""
      />
      {/* updated */}
      <section className="absolute lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] left-[5%] top-8 md:bottom-0 flex flex-col sm:px-[60px] px-[32px] sm:pt-[60px] pt-[32px] sm:gap-[24px] gap-[13px] rounded-t-[18px] bg-green-700/50 h-fit">
        <div>
          <h1 className=" text-[#141718] dark:text-[#FEFEFE] sm:text-[28px] font-[700] leading-[40px] text-[15.26px]">
            Professional Trading Courses 🎓
          </h1>
          <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[16px] font-[500] leading-[22px]">
            Step-by-step courses designed to help you master trading — at your own pace.
          </p>
        </div>

        {/* Highlight benefits */}
        <div className="flex gap-[9px] overflow-hidden w-full">
          <div className="flex flex-col gap-[6px] w-1/2 text-[#141718] dark:text-[#FEFEFE]">
            <p className="sm:text-[14px] text-[7.63px] font-[600]">Beginner</p>
            <div className="p-[10px] sm:p-[15px] rounded-[9px] bg-[#B5E4CA] text-[#141718] font-[600] text-[10px] sm:text-[14px]">
              Learn market basics 
            </div>
          </div>

          <div className="flex flex-col gap-[6px] w-1/2 text-[#141718] dark:text-[#FEFEFE]">
            <p className="sm:text-[14px] text-[7.63px] font-[600]">Advanced</p>
            <div className="p-[10px] sm:p-[15px] rounded-[9px] bg-[#FDD5D5] text-[#141718] font-[600] text-[10px] sm:text-[14px]">
              Strategies & risk mgmt 
            </div>
          </div>
        </div>

        {/* Extra info */}
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
            Why take our courses?
          </h2>
          <div className="sm:p-[15px] p-[8.18px] flex flex-col gap-[12px] border-[0.75px] border-[#E8ECEF] dark:border-[#343839] rounded-[9px]">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
              <Check/> Structured learning from beginner to expert  
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
              <Check/> Video lessons, quizzes, and case studies  
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] sm:text-[14px] font-[500] flex items-center gap-2">
              <Check/> Lifetime access & regular updates  
            </p>
            <p className="text-gray-300 text-[10px] sm:text-[12px] font-[400] leading-[20px]">
              Learn at your own pace, with guidance and resources always available.
            </p>
          </div>
        </div>
      </section>
    </div>

    <p className="md:w-[600px] sm:w-full w-full text-[16px] font-[500] leading-[24px] text-[#6C7275] ">
      Our courses are carefully designed to teach you step by step. From understanding the markets and analyzing charts, to building trading strategies and managing risk, you’ll gain the knowledge to trade with confidence.
    </p>
  </div>
</section>


        <div className="w-full flex items-center justify-center">
         
        </div>
      </main>
    </div>
  )
}

export default Services