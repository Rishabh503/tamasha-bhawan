import React, { useState } from 'react';
import { LuMusic2 } from "react-icons/lu";
import { NavLink } from 'react-router';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-blue-50 w-full border border-b-1 shadow-lg'>
      <div className='flex justify-between items-center px-4 py-3'>
        {/* Logo */}
        <NavLink to='/'  className='h-full w-12'>
          <img src="tb2.jpg" className='rounded-lg' alt="Logo" />
        </NavLink>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <div className='hidden sm:flex gap-16 font-poppins font- text-xl px-2 py-3'>
          <NavLink to='/course'>
          Courses
          </NavLink>
          {/* <p>Notes</p> */}
          {/* <p>Students</p> */}
          <p>Testimonials</p>
          <NavLink to='/about'>
          About Us
          </NavLink>
          <NavLink to='/contact'>
          Contact Us
          </NavLink>
        </div>

        {/* Toggle Button (Visible on Small Screens) */}
        <button className='sm:hidden text-2xl' onClick={toggleNavbar}>
          <LuMusic2 />
        </button>
      </div>

      {/* Mobile Menu (Collapsible) */}
      <div className={`sm:hidden flex flex-col items-start font-semibold px-8 gap-3 py-4  bg-gray-50 border transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
      <NavLink to='/course'>
          Courses
          </NavLink>
        {/* <p className='font-semibold '>Notes</p>  */}
        {/* <p className='font-semibold '>Students</p> */}
        <p className='font-semibold'>Testimonials</p>
        <NavLink to='/about'>
          About Us
          </NavLink>
        <NavLink to='/contact'>
          Contact Us
          </NavLink>
      </div>
    </div>
  );
};

// export default Navbar;
