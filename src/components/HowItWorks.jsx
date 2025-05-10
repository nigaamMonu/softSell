

import React from "react";
import { FaUpload, FaCalculator, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-3xl text-blue-600" />,
    title: "Upload License",
    description: "Submit your unused software license with a few quick details.",
  },
  {
    icon: <FaCalculator className="text-3xl text-blue-600" />,
    title: "Get Valuation",
    description: "We evaluate your license instantly and offer the best resale price.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
    title: "Get Paid",
    description: "Receive fast payment directly to your bank or wallet.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-10 bg-white font-outfit">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
