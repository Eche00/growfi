import { motion } from "framer-motion";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from "react-router-dom";

const values = [
  {
    icon: <EmojiEventsIcon className="text-[#68FCC6]" fontSize="large" />,
    title: "Target-oriented",
    text: "At GrowFi, every move is intentional, we don’t just set targets, we create pathways to reach them. Our data-driven insights help you trade with purpose and precision.",
  },
  {
    icon: <GroupIcon className="text-[#68FCC6]" fontSize="large" />,
    title: "Teamwork",
    text: "Behind every smart strategy is collaboration. At GrowFi, we believe success is built together, by sharing knowledge, ideas, and growth opportunities across our community.",
  },
  {
    icon: <TrendingUpIcon className="text-[#68FCC6]" fontSize="large" />,
    title: "Winning",
    text: "Winning at GrowFi isn’t about luck, it’s about preparation, insight, and execution. We empower traders to make confident decisions that lead to consistent success.",
  },
  {
    icon: <RocketLaunchIcon className="text-[#68FCC6]" fontSize="large" />,
    title: "Growth",
    text: "Growth is more than a metric, it’s our mindset. At GrowFi, we help you expand your potential, sharpen your strategy, and evolve into the investor you’re meant to be.",
  },
];

function TeamSection() {
  return (
    <div className="w-full flex justify-center flex-col min-h-[90vh]">
      {/* Top Section */}
     
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-20 text-center "
      >
        <div className=" flex justify-center items-center ">
          <div className="w-[90%] mx-auto flex flex-col items-center gap-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#68FCC6]">
            Experience That Drives Success
            </h2>
            <p className="max-w-2xl mx-auto text-white leading-relaxed">
              We’re building a team that thrives on expertise and innovation. Every member contributes to delivering top-tier service and cutting-edge solutions. With a growing network across the UK, our team is shaping the future of trading, together.

            </p>
            <Link
                 to='/mentorship'
                  className="flex items-center justify-center gap-[10px] rounded-full bg-gradient-to-b from-80% from-[#68FCC6]  to-white text-black sm:py-[10px] py-[12px]  sm:w-[200px] w-[150px] text-[16px] sm:text-[18px] font-[400] cursor-pointer hover:scale-105 transition-all duration-300">
                 Get started
                </Link>
          </div>
        </div>
      </motion.section>

      {/* Bottom Section */}

       <section className=" py-20 px-6 md:px-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#111] ">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 items-start"
          >
            <div className="mb-2 flex items-baseline justify-start gap-2">{v.icon} <h3 className="text-[20px] font-semibold text-white">{v.title}</h3></div>
            
            <p className="text-gray-600 text-[15px] leading-relaxed">{v.text}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
}

export default TeamSection;
