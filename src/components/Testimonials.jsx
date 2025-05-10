

import React from "react";

const testimonials = [
  {
    name: "Monu Nigaam",
    role: "IT Manager",
    company: "Bright Tech Solutions",
    feedback:
      "SoftSell made it incredibly easy to monetize our unused software licenses. The process was fast, fair, and fully secure.",
      avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Ritika Sharma",
    role: "Procurement Lead",
    company: "MorachaDev",
    feedback:
      "Highly impressed by the quick valuation and excellent support team. We recovered significant value from old licenses.",
      avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Nishant Raj",
    role: "Operations Head",
    company: "Keshav Enterprises",
    feedback:
      "The platform is user-friendly and the team is very responsive. I would recommend SoftSell to anyone looking to sell software licenses.",
      avatar: "https://i.pravatar.cc/100?img=2",
    
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-10 bg-gray-50 font-outfit">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
        What Our Clients Say
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-left flex flex-col items-start hover:shadow-xl transition duration-300"
          >
            <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
              “{testimonial.feedback}”
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-md font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
