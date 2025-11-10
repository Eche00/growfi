import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Basic Plan",
    desc: "GrowFi Basic Plan is designed to provide newcomers with a structured approach to entering the world of trading.",
    min: "$30",
    max: "$999",
    duration: "24hrs",
  },
  {
    title: "Silver Plan",
    desc: "An advanced strategy designed to empower experienced traders with the tools and insights to navigate the market confidently.",
    min: "$1,000",
    max: "$4,999",
    duration: "72hrs",
  },
  {
    title: "Gold Plan",
    desc: "Perfect for traders who want to grow steadily while maintaining a balanced and active portfolio.",
    min: "$5,000",
    max: "$9,999",
    duration: "7 Days",
  },
  {
    title: "Platinum Plan",
    desc: "An exclusive and high-level strategy for seasoned traders aiming to achieve exceptional long-term success.",
    min: "$10,000",
    max: "Unlimited",
    duration: "30 Days",
  },
];

function Plan() {
  return (
    <div className="w-full overflow-hidden min-h-[70vh]  sm:py-20 px-6 md:px-16 text-[#111]">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Trading Plans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed"
        >
          Choose a plan that matches your trading goals. Whether you’re just getting
          started or aiming for higher returns, GrowFi has a plan designed for you.
        </motion.p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-10 pt-10 shadow-md p-[20px] rounded-[10px] bg-black  group"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#68FCC6] mb-3">{plan.title}</h3>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
                {plan.desc}
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <p>
                  <span className="font-semibold text-white">Minimum:</span>{" "}
                  {plan.min}
                </p>
                <p>
                  <span className="font-semibold text-white">Maximum:</span>{" "}
                  {plan.max}
                </p>
                <p>
                  <span className="font-semibold text-white">Duration:</span>{" "}
                  {plan.duration}
                </p>
              </div>
            </div>
            <div className=" border-t-[1px] border-[#68FCC6] pt-[20px] flex items-end justify-end">
              <Link
                 to='/mentorship'
                  className="flex items-center justify-center gap-[10px] rounded-full bg-gradient-to-b from-80% from-[#68FCC6]  to-white text-black sm:py-[8px] py-[10px]  sm:w-[180px] w-[150px] text-[16px] sm:text-[18px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300 ">
                 Get started
                </Link>
            </div>
             
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
