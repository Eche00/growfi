import { CheckCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Online Class",
    image: "/onlineclass.webp",
    features: [
      "Live interactive Zoom sessions",
      "Access to recordings",
      "Weekly Q&A with mentors",
      "Structured beginner-to-pro curriculum",
    ],
    price: 250,
  },
  {
    title: "Physical Class",
    image: "/physicalclass.webp",
    features: [
      "In-person training in small groups",
      "Hands-on market simulations",
      "Networking with fellow traders",
      "Printed learning materials",
    ],
    price: 200,
  },
  {
    title: "Private Online Class",
    image: "/privateonlineclass.webp",
    features: [
      "One-on-one mentorship via Zoom",
      "Personalized trading strategies",
      "Flexible class schedules",
      "Direct access to mentor chat support",
    ],
    price: 450,
  },
  {
    title: "Private Physical Class",
    image: "/physicalprivateclass.webp",
    features: [
      " Premium one-on-one coaching",
      "Tailored forex roadmap",
      "Practical live trading sessions",
      "Lifetime mentorship support",
    ],
    price: 600,
  },
  {
    title: "Exclusive Class",
    image: "/exclusiveclass.webp",
    features: [
      "Exclusive one-on-one mentorship",
      "Lifetime access to mentorship community",
      "Advanced trading strategies",
      "Direct access to expert mentors 24/7",
    ],
    price: 950,
  },
];

function Packages() {
  return (
    <div className="py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Mentorship Packages
      </h2>

      <motion.div className="flex flex-wrap items-center justify-center gap-8 "
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}  
      viewport={{once:true}}>
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 lg:max-w-[380px] max-w-[90%] w-full"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {pkg.title}
              </h3>
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            
            </div>
          <div className="flex items-end justify-end">
          <p className="text-xl font-semibold mb-4 text-gray-800 w-fit px-2 mx-5 text-right border-b-2 border-green-700"> ${pkg.price} </p>
          </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Packages;
