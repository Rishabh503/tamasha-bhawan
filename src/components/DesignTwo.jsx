import React from 'react';
import { motion } from 'framer-motion';
import {FaArrowRight, FaYoutube } from "react-icons/fa"
const HomePage = () => {
  return (
    <div className="font-['Merriweather', serif] bg-[#F5E6C8] text-[#4A1A1A] overflow-x-hidden">
      
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-[#4A1A1A] text-white py-4 px-8 flex justify-between items-center shadow-md z-50">
        <div className="flex items-center space-x-3">
          <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699335/WhatsApp_Image_2025-04-27_at_01.46.00_31d81b70-removebg-preview_riv0f9.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">Tamasha Bhawan</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#courses" className="hover:text-yellow-400">Courses</a>
          <a href="#products" className="hover:text-yellow-400">Products</a>
          <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>
    
        {/* naya hero section  */}

  <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#fff9f0]">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699347/sh4video-cover-removebg-preview_ixdpwe.png" 
            alt="Indian Classical Music" 
            className="  w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover the <span className="text-[#c67f00]">Soul</span> of Indian Music
          </h2>
          <p className="text-lg text-gray-600">
            Join Tamasha Bhawan - where tradition meets excellence. Learn, compete, and shine with the masters.
          </p>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-[#c67f00] text-white rounded-full flex items-center gap-2 hover:bg-[#a66700]"
          >
            Get Started <FaArrowRight />
          </a>
        </div>
      </section>


      {/*old  Hero Section */}
      {/* <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1624953587683-6d7b3d2b5c29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center flex items-center justify-center text-center px-6">
        <div className="bg-[#4A1A1A] bg-opacity-70 p-10 rounded-lg text-white max-w-3xl">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Embark on a Soulful Musical Journey
          </motion.h2>
          <motion.p 
            className="text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Learn Indian Classical Music with the masters at Tamasha Bhawan.
          </motion.p>
          <motion.button 
            className="mt-6 bg-yellow-400 text-[#4A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            whileHover={{ scale: 1.1 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-24 bg-white">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Tamasha Bhawan</h2>
            <p className="text-gray-700 mb-6">
              Tamasha Bhawan was born from a vision — to nurture, teach and celebrate the divine traditions of Indian classical music. Our institution stands as a sanctuary for passionate learners and future legends.
            </p>
            <button className="bg-yellow-400 text-[#4A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Know More</button>
          </div>
          <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699728/trendy-string-music-vector-removebg-preview_yunrzl.png" alt="About Image" className="w-full md:w-1/2 " />
        </motion.div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 md:px-24 bg-[#F8F1E7] text-center">
        <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Sitar Mastery", img: "https://cdn-icons-png.flaticon.com/512/2833/2833773.png", desc: "Learn the divine strings of sitar with our expert guidance." },
            { name: "Tabla Rhythms", img: "https://cdn-icons-png.flaticon.com/512/2833/2833759.png", desc: "Master the beats of tabla and dive into Indian rhythm science." },
            { name: "Hindustani Vocals", img: "https://cdn-icons-png.flaticon.com/512/2833/2833761.png", desc: "Refine your voice with traditional raga-based vocal training." }
          ].map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={course.img} alt={course.name} className="h-24 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">{course.name}</h3>
              <p className="text-gray-700">{course.desc}</p>
              <button className="mt-4 bg-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Learn More</button>
            </motion.div>
          ))}
        </div>
      </section>
            {/* youtube section  */}
            <section className="p-8 md:p-16 bg-[#fff1db] flex flex-col items-center text-center rounded-2xl mx-4 my-8">
                    <FaYoutube className="text-red-600 text-6xl mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Follow Us on YouTube</h2>
                    <p className="text-gray-700 mb-6">
                      Dive into live performances, tutorials, and behind-the-scenes of Indian classical music on our YouTube Channel.
                      Over <span className="text-[#c67f00] font-semibold">100k+</span> followers are learning with us!
                    </p>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#c67f00] text-white rounded-full flex items-center gap-2 hover:bg-[#a66700]"
                    >
                      Visit Channel <FaArrowRight />
                    </a>
                  </section>
      {/* Products Section */}
      <section id="products" className="py-20 px-6 md:px-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Sitar Learning Notes", price: "₹499", img: "https://cdn-icons-png.flaticon.com/512/2907/2907030.png" },
            { name: "Tabla Practice Guide", price: "₹349", img: "https://cdn-icons-png.flaticon.com/512/4065/4065533.png" },
            { name: "Hindustani Vocal eBook", price: "₹599", img: "https://cdn-icons-png.flaticon.com/512/3125/3125713.png" }
          ].map((product, index) => (
            <motion.div
              key={index}
              className="bg-[#F8F1E7] shadow-lg p-6 rounded-xl hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={product.img} alt={product.name} className="h-24 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-gray-800 font-bold mt-2">{product.price}</p>
              <button className="mt-4 bg-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">Buy Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 md:px-24 bg-[#F8F1E7] text-center">
        <h2 className="text-4xl font-bold mb-12">Student Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Ananya Roy", img: "https://randomuser.me/api/portraits/women/44.jpg", text: "Tamasha Bhawan changed my life! Their sitar program is simply magical." },
            { name: "Rohan Patel", img: "https://randomuser.me/api/portraits/men/46.jpg", text: "The tabla instructors here are real legends. I finally feel connected to rhythm!" },
            { name: "Neha Sharma", img: "https://randomuser.me/api/portraits/women/65.jpg", text: "Their Hindustani vocal classes are so soulful. Every session is a blessing!" }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl text-center hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={testimonial.img} alt={testimonial.name} className="h-24 w-24 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-gray-700 mb-2 italic">"{testimonial.text}"</p>
              <h4 className="font-semibold text-lg mt-4">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#4A1A1A] text-center text-white">
        <h2 className="text-4xl font-bold">Ready to Begin Your Musical Journey?</h2>
        <button className="mt-6 bg-yellow-400 text-[#4A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Contact Us</button>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E0E0E] text-gray-300 py-6 text-center text-sm">
        © 2025 Tamasha Bhawan. All Rights Reserved.
      </footer>

    </div>
  );
};

export default HomePage;
