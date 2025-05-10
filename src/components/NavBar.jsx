import React from 'react'
import logo from '../assets/softSell_logo.png'

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 md:px-10 py-4 flex items-center justify-between font-outfit">
 
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="SoftSell Logo" 
          className="w-[160px] h-auto object-contain"
        />
      </div>

     
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
        <a href="#why-us" className="hover:text-blue-600 transition">Why Choose Us</a>
        <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar
