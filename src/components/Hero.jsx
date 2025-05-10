import React from 'react'


const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4 md:px-10 font-outfit">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Turn Unused Software into Instant Cash
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          SoftSell helps individuals and businesses resell unused software licenses securely, quickly, and at the best market value.
        </p>
        <button className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300">
          Get a Free Quote
        </button>
      </div>
    </section>
  )
}

export default Hero
