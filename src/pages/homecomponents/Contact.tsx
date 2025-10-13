import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { contactUs } from "../../utils/contactus";
import { Circle } from "@mui/icons-material";

function Contact() {
  return (
    <div className="relative min-h-[100vh]">
      <section className="flex items-center justify-center">
      <div className=" flex  items-center border-[1px] border-green-700 rounded-full w-fit ">
      <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-green-700 rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
            <Circle/>
             </span>
            <p className=" text-[14px]  font-[400] py-[8px] px-[20px]  ">
            Contact
             </p>
             <span  className=" text-[14px]  font-[400] py-[10px] px-[10px] text-green-700 rounded-full hover:scale-[102%] transition-all duration-300 cursor-pointer">
            <Circle/>
             </span>
    </div>
      </section>
      {/* container  */}
      <main className="pt-20 flex  flex-wrap items-stretch justify-center gap-[20px] p-[10px] w-[80%] relative mx-auto z-40">
        {contactUs.map((b) => (
          <div
            className="flex flex-col gap-[10px] shadow-md p-[20px] rounded-[18px] flex-1 border-2 border-green-600 hover:scale-[105%] transition-all duration-300 cursor-pointer group"
            >
            <div
              className="
  border-2 border-green-700
   bg-[#0a0a0a] 
  min-h-[150px] min-w-[150px] 
  flex items-center justify-center 
  rounded-[18px] 
  shadow-md dark:shadow-none
  transition-all duration-300
">
              <span className="bg-green-700 w-fit h-fit text-white p-2 rounded-[18px]">
                {b.icon === "SolarPowerIcon" && (
                  <PermPhoneMsgIcon sx={{ fontSize: 50 }} />
                )}
                {b.icon === "SavingsIcon" && (
                  <ForwardToInboxIcon sx={{ fontSize: 50 }} />
                )}
                {b.icon === "SupportAgentIcon" && (
                  <ShareLocationIcon sx={{ fontSize: 50 }} />
                )}
              </span>
            </div>
            <h2 className=" text-[20px] sm:text-[28px] sm:w-full w-[309px] text-green-700 font-[600] text-center">
              {b.title}
            </h2>
            <p className=" min-w-[200px] text-black text-center">
              {b.writeup}
            </p>
          </div>
        ))}
      </main>
      <div className="sm:w-[85%] w-[90%] sm:h-[500px] overflow-hidden mx-auto py-10 rounded-[30px] relative" > 
      <img src="/about.webp" alt="" className="w-full h-full object-cover  rounded-[30px]"  />
    </div>
    </div>
  );
}

export default Contact;