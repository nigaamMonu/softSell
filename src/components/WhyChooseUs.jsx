

import React from "react";
import { FaShieldAlt, FaClock, FaThumbsUp, FaUserTie } from "react-icons/fa";

const benefits = [
  {
    icon: <FaShieldAlt className="text-3xl text-green-600" />,
    title: "Secure Transactions",
    desc: "Your data and payments are fully protected with end-to-end encryption.",
  },
  {
    icon: <FaClock className="text-3xl text-green-600" />,
    title: "Quick Turnaround",
    desc: "Get your software evaluated and paid for within 24 hours.",
  },
  {
    icon: <FaThumbsUp className="text-3xl text-green-600" />,
    title: "Best Value",
    desc: "We offer competitive prices that ensure maximum value for your license.",
  },
  {
    icon: <FaUserTie className="text-3xl text-green-600" />,
    title: "Expert Support",
    desc: "Get personalized assistance from our experienced team anytime.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 px-4 md:px-10 bg-gray-50 font-outfit">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
