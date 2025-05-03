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
   <header className="fixed top-0 w-full bg-[#4A1A1A] text-white py-4 px-8 flex justify-between items-center shadow-md z-50">
           <div   className="flex items-center space-x-3">
            <NavLink to='/'> 
            <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699335/WhatsApp_Image_2025-04-27_at_01.46.00_31d81b70-removebg-preview_riv0f9.png" alt="Logo" className="h-10 w-10" />
            </NavLink>
             <h1 className="text-2xl font-bold">Tamasha Bhawan</h1>
           </div>
           <nav className="hidden md:flex space-x-6">
             <NavLink to='/newAbout'> About</NavLink>
             <a href="#courses" className="hover:text-yellow-400">Courses</a>
             <a href="#products" className="hover:text-yellow-400">Products</a>
             <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
             <NavLink to='/contact'> Contact</NavLink>
           </nav>
</header>
  );
};

// export default Navbar;
