import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaYoutube, FaShoppingCart, FaBookOpen, FaGraduationCap, FaStar, FaCalendarAlt, FaUser, FaQuoteLeft, FaQuoteRight, FaPlay } from "react-icons/fa";
import { NavLink } from 'react-router';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSection, setVisibleSection] = useState(null);
  
  // Animation on scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['courses', 'products', 'testimonials', 'youtube'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Course data
  const courses = [
    { 
      id: 1, 
      name: "Learn Indian Classical Music", 
      category: "Vocal",
      img: "https://res.cloudinary.com/dhe9p6bo0/image/upload/v1747320825/Screenshot_2025-05-15_202223_fwdg6f.png", 
      instructor: "Abha Tripathi",
      desc: "Get Certification from AKHIL BHARTIYA GANDHARVA MAHAVIDALAYA (pune)",
      duration: "Flexible",
      level: "All Levels",
      startDate: "Flexible" 
    },
    
    { 
      id: 2, 
      name: "Learn Hindustani Music Light", 
      category: "vocal",
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000", 
      instructor: "Abha Tripathi",
      desc: "Discover your voice through ancient Hindustani classical traditions",
      duration: "Flexible",
      level: "Beginner",
      startDate: "Flexible" 
    }
  ];

  // Product data
  const products = [
    { 
      id: 1, 
      name: "Sitar Learning Notes", 
      price: "₹499", 
      img: "https://cdn-icons-png.flaticon.com/512/2907/2907030.png",
      rating: 4.8,
      type: "ebook",
      description: "Comprehensive guide to mastering sitar techniques with step-by-step instructions",
      features: ["150 pages", "Digital download", "Practice exercises", "Raga notations"]
    },
    { 
      id: 2, 
      name: "Tabla Practice Guide", 
      price: "₹349", 
      img: "https://cdn-icons-png.flaticon.com/512/4065/4065533.png",
      rating: 4.5,
      type: "digital guide",
      description: "Learn authentic tabla techniques with audio demonstrations from experts",
      features: ["2 hours of audio", "PDF reference guide", "10 practice compositions", "Rhythm exercises"]
    },
    { 
      id: 3, 
      name: "Hindustani Vocal eBook", 
      price: "₹599", 
      img: "https://cdn-icons-png.flaticon.com/512/3125/3125713.png",
      rating: 4.9,
      type: "ebook",
      description: "Develop your vocal skills with this comprehensive guide to Hindustani classical singing",
      features: ["200 pages", "Vocal exercises", "Raga reference", "Breathing techniques"]
    }
  ];
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Ananya Roy",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Tamasha Bhawan transformed my understanding of classical music. Their sitar program is simply magical and the instructors are phenomenal.",
      role: "Professional Musician",
      course: "Sitar Mastery"
    },
    {
      id: 2,
      name: "Rohan Patel",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "The tabla instructors here are real legends. I finally feel connected to rhythm! Their teaching methods make complex concepts so accessible.",
      role: "Engineering Student",
      course: "Tabla Rhythms"
    },
    {
      id: 3,
      name: "Neha Sharma",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Their Hindustani vocal classes are so soulful. Every session feels like a blessing and has helped me discover my voice in ways I never imagined.",
      role: "Vocal Artist",
      course: "Hindustani Vocals"
    },
    {
      id: 4,
      name: "Arjun Mehta",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      text: "The instructors at Tamasha Bhawan have an incredible ability to pass on centuries of tradition with such passion and clarity. Life-changing experience!",
      role: "Music Teacher",
      course: "Flute Techniques"
    }
  ];
  
  // YouTube video data
  const videos = [
    {
      id: 1,
      title: "Sitar Basics for Beginners",
      thumbnail: "https://i.ibb.co/6RzSVZc/thumb1.jpg",
      views: "245K",
      length: "15:32"
    },
    {
      id: 2,
      title: "Understanding Ragas: A Deep Dive",
      thumbnail: "https://i.ibb.co/3kZyJCS/thumb2.jpg",
      views: "189K",
      length: "22:47"
    },
    {
      id: 3,
      title: "Tabla Rhythms Masterclass",
      thumbnail: "https://i.ibb.co/pjLdKFR/thumb3.jpg",
      views: "327K",
      length: "18:09"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="font-['Merriweather', serif] bg-[#F5E6C8] text-[#4A1A1A] overflow-x-hidden">
 
      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#fff9f0]">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745702083/TAMASHA-removebg-preview_hhyykj.png" 
            alt="Indian Classical Music" 
            className="w-full bg-transparent  h-full object-cover"
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
          <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699728/trendy-string-music-vector-removebg-preview_yunrzl.png" alt="About Image" className="w-full md:w-1/2" />
        </motion.div>
      </section>

      {/* REDESIGNED Courses Section - Poster Style */}
      <section id="courses" className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#F8F1E7] to-[#F5E6C8]">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">Pathways to Mastery</h2>
          <div className="bg-[#c67f00] h-1 w-24 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Immerse yourself in the rich traditions of Indian classical music through our signature courses, each designed to transform passion into expertise.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-xl overflow-hidden shadow-xl`}
            >
              {/* Course Poster/Image */}
              <div className="md:w-2/5 relative">
                <img src={course.img} alt={course.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1A1A] to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-[#c67f00] px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {course.category === 'instrumental' ? 'Instrumental' : 'Vocal'}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{course.name}</h3>
                  <p className="text-sm opacity-90">{course.instructor}</p>
                </div>
              </div>
              
              {/* Course Details */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#fff1db] text-[#c67f00] px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg">{course.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-[#c67f00] mr-2" />
                      <span className="text-gray-700">Starts {course.startDate}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBookOpen className="text-[#c67f00] mr-2" />
                      <span className="text-gray-700">{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                <button className="self-start bg-[#4A1A1A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3A1010] transition flex items-center gap-2">
                  <FaGraduationCap /> Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#c67f00] text-white rounded-full font-semibold hover:bg-[#a66700] transition inline-flex items-center gap-2">
            View All Courses <FaArrowRight />
          </button>
        </div>
      </section>

      {/* REDESIGNED YouTube section */}
      <section id="youtube" className="py-20 px-6 md:px-24 bg-[#4A1A1A] text-white">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side content */}
          <div className="md:w-1/2 text-left">
            <FaYoutube className="text-red-600 text-6xl mb-6" />
            <h2 className="text-4xl font-bold mb-6">Explore Our Video Lessons</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join our  <span className="text-yellow-400 font-bold">5000+</span> subscribers experiencing the soul of Indian classical music through our video lessons, performances, and musical insights.
            </p>
            <a 
              href="https://www.youtube.com/@TamashaBhawanMusic" 
      
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white rounded-full flex items-center gap-2 hover:bg-red-700 transition w-fit"
            >
              Subscribe Now <FaArrowRight />
            </a>
          </div>
          
          {/* Right side - video thumbnails */}
          <div className="md:w-1/2 grid gap-4 mt-10 md:mt-0">
            {videos.map((video) => (
              <motion.div 
                key={video.id}
                className="bg-gray-800 rounded-lg overflow-hidden flex items-center hover:bg-gray-700 transition cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-1/3">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-24 object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <FaPlay className="text-white text-xl" />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                    {video.length}
                  </div>
                </div>
                <div className="p-3 w-2/3">
                  <h3 className="font-medium text-sm mb-1">{video.title}</h3>
                  <p className="text-gray-400 text-xs">{video.views} views</p>
                </div>
              </motion.div>
            ))}
            <div className="text-center mt-2">
              <a href="#" className="text-yellow-400 text-sm hover:underline">View more videos →</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* REDESIGNED Products Section */}
      <section id="products" className="py-20 px-6 md:px-24 bg-white">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">Musical Resources</h2>
          <div className="bg-[#c67f00] h-1 w-24 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Elevate your practice with our carefully crafted learning materials developed by master musicians
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-[#F8F1E7] rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="p-8 bg-[#fff9f0] flex justify-center items-center h-56 relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="h-32 group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute top-4 right-4 bg-[#c67f00] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.type}
                </div>
              </div>
              
              <div className="p-6 border-t border-[#E5D6B8]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                <ul className="mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center mb-1">
                      <span className="w-2 h-2 bg-[#c67f00] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#c67f00]">{product.price}</p>
                  <button className="bg-[#4A1A1A] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#3A1010] transition text-sm">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* REDESIGNED Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 md:px-24 bg-[#F8F1E7]">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">Voices of Our Students</h2>
          <div className="bg-[#c67f00] h-1 w-24 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from those who have experienced the transformative power of our musical education
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.slice(0, 2).map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 md:p-10 shadow-lg mb-10 relative"
            >
              <div className="absolute -top-6 left-10 bg-[#c67f00] rounded-full p-3 shadow-lg">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
              
              <div className="mt-4 flex flex-col md:flex-row gap-6 items-center">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#fff1db]" 
                />
                
                <div className="flex-1">
                  <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.text}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{testimonial.role}</span>
                        <span className="w-1 h-1 bg-[#c67f00] rounded-full"></span>
                        <span className="text-sm text-[#c67f00]">{testimonial.course}</span>
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <FaQuoteRight className="text-[#E5D6B8] text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-6">
          <button className="px-8 py-3 bg-[#c67f00] text-white rounded-full font-semibold hover:bg-[#a66700] transition inline-flex items-center gap-2">
            Read More Stories <FaArrowRight />
          </button>
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