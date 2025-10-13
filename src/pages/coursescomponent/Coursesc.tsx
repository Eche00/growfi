import { CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Beginner Forex Trading",
    image: "/courses1.webp",
    price: "$150",
    features: [
      "Introduction to Forex markets",
      "Basic terminologies",
      "How to place trades",
      "Risk management fundamentals",
    ],
  },
  {
    title: "Intermediate Forex Trading",
    image: "/courses2.webp",
    price: "$250",
    features: [
      "Technical analysis tools",
      "Chart patterns & trends",
      "Support & resistance levels",
      "Using indicators effectively",
    ],
  },
  {
    title: "Advanced Forex Trading",
    image: "/courses3.webp",
    price: "$400",
    features: [
      "Advanced trading strategies",
      "Price action mastery",
      "Trading psychology",
      "Building trading systems",
    ],
  },
  {
    title: "Signals & Copy Trading",
    image: "/courses4.webp",
    price: "$300",
    features: [
      "How signals work",
      "Following expert trades",
      "Risk control in copy trading",
      "Building trust with providers",
    ],
  },
  {
    title: "Risk Management & Psychology",
    image: "/courses5.webp",
    price: "$200",
    features: [
      "Controlling emotions in trading",
      "Position sizing & leverage",
      "Handling losses",
      "Consistency & discipline",
    ],
  },
  {
    title: "Crypto & Forex",
    image: "/courses6.webp",
    price: "$350",
    features: [
      "Trading crypto alongside Forex",
      "Volatility strategies",
      "Risk management in crypto",
      "Long-term & short-term trading",
    ],
  },
];


function Coursesc() {
  return (
    <div className="py-12 px-6 md:px-16 min-h-[100vh]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Forex Courses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {courses.map((course, index) => (
    <motion.div
    initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}  
      viewport={{once:true}}
      key={index}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 border border-gray-100"
    >
      {/* Image with overlay + price badge */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"></div>

        {/* Course title */}
        <h3 className="absolute bottom-3 left-4 text-white text-lg font-semibold drop-shadow-lg">
          {course.title}
        </h3>

        {/* Price badge */}
        <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {course.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between min-h-[260px]">
        <ul className="space-y-3 mb-6">
          {course.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700 text-[15px]"
            >
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Enroll button */}
        <button className="mt-auto w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
          Enroll Now
        </button>
      </div>
    </motion.div>
  ))}
</div>


    </div>
  );
}

export default Coursesc;
