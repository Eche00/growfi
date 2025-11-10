import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Contact from "./homecomponents/Contact";

const faqs = [
  {
    question: "What is GrowFi?",
    answer:
      "GrowFi is a modern trading and investment platform designed to help traders of all levels make data-driven decisions, grow their portfolios, and achieve consistent success.",
  },
  {
    question: "How do I start trading on GrowFi?",
    answer:
      "Simply create an account, choose a trading plan that matches your goals, and fund your account to begin. You’ll gain access to real-time insights, strategies, and support.",
  },
  {
    question: "What are the available trading plans?",
    answer:
      "GrowFi offers four structured plans, Basic, Silver, Gold, and Platinum, each tailored to match your experience, capital, and trading goals.",
  },
  {
    question: "Is my investment secure with GrowFi?",
    answer:
      "Yes. We prioritize security through encrypted transactions, trusted financial partners, and transparent systems that ensure your assets are always protected.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "Withdrawals are processed based on your chosen plan duration. Once a plan cycle ends, you can easily withdraw your profits or reinvest.",
  },
  {
    question: "How long does it take to process withdrawals?",
    answer:
      "Withdrawals are typically processed within 24 to 48 hours after approval, depending on your payment method and network conditions.",
  },
  {
    question: "Does GrowFi charge any hidden fees?",
    answer:
      "No hidden fees. All costs, including trading or withdrawal charges, are clearly stated before you proceed with any transaction.",
  },
  {
    question: "Can I upgrade my plan after investing?",
    answer:
      "Yes, you can upgrade your plan anytime after your current plan duration ends. Simply choose your new plan and deposit the required minimum amount.",
  },
  {
    question: "Is there a minimum deposit required to start?",
    answer:
      "Yes. The minimum deposit depends on your chosen plan. Our Basic Plan starts at just $30 to help new traders get started easily.",
  },
  {
    question: "Do I need trading experience to join GrowFi?",
    answer:
      "No prior trading experience is required. GrowFi provides beginner-friendly tools, expert insights, and a support team to guide you at every step.",
  },
  {
    question: "How can I contact GrowFi support?",
    answer:
      "You can reach our support team via the Contact section on our website or by email. We’re available 24/7 to assist you with any questions or technical issues.",
  },
  {
    question: "Does GrowFi offer referral bonuses?",
    answer:
      "Yes. GrowFi rewards users who invite friends to join the platform through our referral program. Details and rewards vary by campaign.",
  },
  {
    question: "What makes GrowFi different from other platforms?",
    answer:
      "GrowFi combines technology, transparency, and real market insights to provide an edge in trading. Our focus on user growth and education sets us apart.",
  },
];


function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#7E7ED7] from-90% to-black text-white min-h-screen pt-36">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">Frequently Asked Questions</h1>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about GrowFi’s trading plans, security, and platform features.
        </p>
      </motion.div>

      {/* FAQ Section */}
      <section className="flex flex-col sm:w-[85%] w-[90%] mx-auto mb-20">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="bg-[#0c0e2e]/60 border border-gray-600 rounded-xl p-5 mb-4 cursor-pointer hover:bg-[#0c0e2e]/80 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => toggleFaq(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: activeIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {activeIndex === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300 mt-3 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col sm:w-[85%] w-[90%] mx-auto"
      >
        <Contact />
      </motion.section>
    </div>
  );
}

export default Faqs;
