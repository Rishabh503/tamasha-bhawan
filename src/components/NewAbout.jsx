
import React, { useState, useEffect } from 'react';
import { Music, Users, Award, BookOpen, Heart, Calendar, Mail, Phone, MessageSquare } from 'lucide-react';

export default function AboutUs() {
  const [activeJourney, setActiveJourney] = useState(0);
  const [isOpen, setIsOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFAQ = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  const FAQs = [
    {
      question: "What Makes Learning at Tamasha Bhawan Comprehensive?",
      answer: "At Tamasha Bhawan, students will have access to both practical and theoretical knowledge of Hindustani classical music. This means that in addition to learning the technical aspects of music, students will also gain an understanding of the cultural and historical context in which the music was created. By providing a comprehensive education that includes both practical and theoretical knowledge, Tamasha Bhawan ensures that students are equipped with the skills and knowledge needed to become well-rounded and accomplished musicians."
    },
    {
      question: "How Can You Get Admission to Tamasha Bhawan?",
      answer: "To get admission to Tamasha Bhawan, interested individuals must submit an audio recording of their voice and fill out a registration form. This ensures that the institution can properly evaluate the participant's skills and provide them with the appropriate level of training. By requiring these steps, Tamasha Bhawan is able to maintain a high level of quality in its students and ensure that everyone has the opportunity to excel in their musical journey."
    },
    {
      question: "Does Tamasha Bhawan Offer Both Online and Offline Classes?",
      answer: "Yes! Tamasha Bhawan offers both online and offline classes for students interested in learning Hindustani classical music. This means that regardless of your location and schedule, you can still have access to the institution's exceptional teaching and resources. Whether you prefer the convenience of online classes or the immersive experience of in-person classes, Tamasha Bhawan has something to offer for everyone."
    },
    {
      question: "How Does Tamasha Bhawan Make Learning Fun and Engaging?",
      answer: "Tamasha Bhawan is a vibrant institution that offers a unique and engaging approach to learning Hindustani classical music. With a focus on providing a fun and entertaining experience, students are able to learn about the rich tradition and history of classical music in an exciting and dynamic way. The institution is named after the word 'tamasha', which means entertainment, and it certainly lives up to its name by providing an enjoyable and stimulating environment for students to learn and grow."
    },
    {
      question: "How Does Tamasha Bhawan Help Students Get Certified?",
      answer: "At Tamasha Bhawan, individuals who get admission have the opportunity to take exams from Gandharva Mahavidyalaya Pune of vocal. This provides students with an additional level of recognition and certification that can help them advance their careers in music. By partnering with Gandharva Mahavidyalaya Pune, Tamasha Bhawan is able to provide students with access to a wide range of resources and opportunities that can help them achieve their goals in music."
    }
  ];

  const journeyEvents = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Tamasha Bhawan was founded with a vision to preserve and promote the rich heritage of Hindustani classical music in Delhi.",
      image: "/api/placeholder/500/300"
    },
    {
      year: "2017",
      title: "First Batch Graduates",
      description: "Our first batch of students completed their training and performed at a grand concert that captivated audiences across Delhi.",
      image: "/api/placeholder/500/300"
    },
    {
      year: "2019",
      title: "Partnership with Gandharva Mahavidyalaya",
      description: "We established our partnership with the prestigious Gandharva Mahavidyalaya Pune to offer certification to our students.",
      image: "/api/placeholder/500/300"
    },
    {
      year: "2021",
      title: "Online Learning Platform",
      description: "During challenging times, we adapted and launched our online learning platform, making Hindustani classical music accessible worldwide.",
      image: "/api/placeholder/500/300"
    },
    {
      year: "2023",
      title: "New Campus Inauguration",
      description: "We inaugurated our new campus with state-of-the-art facilities including recording studios and performance spaces.",
      image: "/api/placeholder/500/300"
    },
    {
      year: "2025",
      title: "Celebrating a Decade of Music",
      description: "As we approach our 10th anniversary, we continue to grow our community, with over 1000 students having walked through our doors.",
      image: "/api/placeholder/500/300"
    }
  ];

  // Enhanced Musical note animation component with different sizes and animations
  const MusicalNotes = () => {
    const notesCount = 30;
    const notes = [];
    const noteSymbols = ['♪', '♫', '♩', '♬', '𝄞'];
    
    for (let i = 0; i < notesCount; i++) {
      const symbol = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
      const size = Math.floor(Math.random() * 24) + 16;
      const duration = Math.floor(Math.random() * 20) + 15;
      const delay = Math.random() * 10;
      
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${size}px`,
        opacity: Math.random() * 0.7 + 0.3,
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate, 
                    fade ${duration/2}s ease-in-out ${delay}s infinite alternate`
      };
      
      notes.push(
        <div 
          key={i} 
          className="absolute text-amber-100 pointer-events-none transform rotate-12"
          style={style}
        >
          {symbol}
        </div>
      );
    }
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style jsx>{`
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(20px, -20px) rotate(20deg); }
          }
          @keyframes fade {
            0% { opacity: 0.2; }
            100% { opacity: 0.8; }
          }
        `}</style>
        {notes}
      </div>
    );
  };

  // SVG patterns for background
  const VeenaPattern = () => (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <pattern id="veena-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(10)">
          <path d="M80,20 Q70,40 80,60 T80,100" stroke="rgba(255,226,178,0.5)" fill="none" strokeWidth="0.5"/>
          <circle cx="80" cy="30" r="2" fill="rgba(255,226,178,0.5)"/>
          <circle cx="80" cy="70" r="2" fill="rgba(255,226,178,0.5)"/>
          <path d="M20,80 Q40,70 60,80 T100,80" stroke="rgba(255,226,178,0.5)" fill="none" strokeWidth="0.5"/>
          <circle cx="30" cy="80" r="2" fill="rgba(255,226,178,0.5)"/>
          <circle cx="70" cy="80" r="2" fill="rgba(255,226,178,0.5)"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#veena-pattern)"/>
      </svg>
    </div>
  );

  // Decorative instruments silhouettes
  const InstrumentsSilhouettes = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      <div className="absolute -bottom-10 -left-20 w-64 h-64">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,10 C40,15 45,25 45,35 C45,45 40,55 30,60 C35,70 45,80 55,85 C65,90 75,90 85,85 C95,80 100,70 100,60 C100,50 95,40 85,35 C75,30 65,30 55,35 C50,25 40,15 30,10 Z" fill="rgba(255,226,178,0.4)"/>
        </svg>
      </div>
      <div className="absolute -top-10 -right-20 w-64 h-64 transform rotate-45">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,30 C15,40 25,45 35,45 C45,45 55,40 60,30 C70,35 80,45 85,55 C90,65 90,75 85,85 C80,95 70,100 60,100 C50,100 40,95 35,85 C30,75 30,65 35,55 C25,50 15,40 10,30 Z" fill="rgba(255,226,178,0.4)"/>
        </svg>
      </div>
    </div>
  );
  
  // Scrolling Effect for Hero Section
  const heroStyle = {
    height: '100vh',
    backgroundImage: "url('/api/placeholder/1920/1080')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    filter: scrolled ? "brightness(0.6) blur(2px)" : "brightness(0.7)"
  };

  return (
    <div className="bg-amber-50 text-[#4A1A1A]">
      {/* Enhanced Hero Section with Full Background Image and Glass Effect */}
      <section className="relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={heroStyle}
        />
        
        {/* Decorative Elements */}
        <VeenaPattern />
        <InstrumentsSilhouettes />
        <MusicalNotes />
        
        {/* Decorative Borders */}
        <div className="absolute inset-5 border-4 border-amber-200/30 z-0 rounded-lg"></div>
        
        {/* Content with Glass Effect */}
        <div className="relative z-10 text-center px-4 py-32 max-w-5xl mx-auto">
          <div className="mb-6 transform transition-all duration-1000" style={{
            transform: scrolled ? 'translateY(-20px)' : 'translateY(0)'
          }}>
           
            
            {/* Main Title with Glass Effect */}
            <div className="backdrop-blur-md bg-gradient-to-b from-amber-900/50 to-[#4A1A1A] rounded-lg p-10 mb-8 border border-amber-200/30 shadow-2xl">
              <h1 className="text-6xl md:text-8xl font-bold text  mb-4 tracking-wider font-serif">
                Tamasha Bhawan
              </h1>
              
              {/* Musical Instrument Icons */}
              <div className="flex justify-center gap-6 items-center my-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-200">
                  <path d="M5,19 L9,15 L9,5 C9,3 7,2 5,2 C3,2 1,3 1,5 C1,7 3,8 5,8 L5,19 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <Music className="text-amber-200" size={28} />
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-200">
                  <path d="M19,19 L15,15 L15,5 C15,3 17,2 19,2 C21,2 23,3 23,5 C23,7 21,8 19,8 L19,19 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-16 bg-amber-200/60"></div>
                <div className="text-amber-200 text-2xl">♪</div>
                <div className="h-px w-16 bg-amber-200/60"></div>
              </div>
              
              <p className="text-xl text-amber-100 font-light italic">
                A Temple of Classical Music Since 2015
              </p>
            </div>
          </div>
          
          {/* Subtitle with Different Glass Effect */}
          <div className="backdrop-blur-sm bg-amber-700/20 inline-block rounded-lg px-8 py-4 border border-amber-100/20 shadow-lg transform transition-all duration-1000" style={{
            transform: scrolled ? 'translateY(20px) scale(0.95)' : 'translateY(0) scale(1)'
          }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7A2E2E]">
              Where Classical Melodies Meet Modern Mastery
            </h2>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-100">
              <path d="M12 5L12 19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-100 to-[#c58f8f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Music className="inline-block text-amber-600 mb-2" size={32} />
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Our Story</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden border-4 border-amber-600 shadow-xl transform transition-all hover:scale-105 duration-300">
                <img src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745739567/WhatsApp_Image_2025-02-05_at_20.31.04_b5620e85_fu6eul.jpg" alt="Tamasha Bhawan History" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex items-end">
                  <p className="text-amber-100 p-4 text-lg font-medium">Founded in 2015</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-amber-800">
              <p className="text-lg mb-4">
                Tamasha Bhawan was born from a passion to celebrate and preserve the rich heritage of Hindustani classical music. Located in the heart of Delhi, our institution has grown from a small gathering of music enthusiasts to a vibrant community of performers, teachers, and students.
              </p>
              <p className="text-lg mb-4">
                The word "Tamasha" means entertainment, and we've stayed true to our name by making learning a joyful experience. Our approach combines traditional teaching methods with modern techniques, creating an environment where ancient melodies find contemporary relevance.
              </p>
              <p className="text-lg">
                Today, we stand as a testament to the timeless appeal of Hindustani classical music, offering both practical and theoretical knowledge to students of all ages and skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#4A1A1A] text-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="inline-block text-amber-200 mb-2" size={32} />
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Vision & Mission</h2>
            <div className="h-1 w-24 bg-amber-200 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-amber-700/50 p-6 rounded-lg transform transition-all hover:-translate-y-2 duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Users className="text-amber-800" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-amber-100">Our Vision</h3>
              </div>
              <p className="text-lg">
                To create a world where Hindustani classical music thrives across generations, transcending cultural and geographical boundaries while preserving its authentic essence and rich heritage.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="text-4xl text-amber-200 opacity-30">♪</div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-amber-700/50 p-6 rounded-lg transform transition-all hover:-translate-y-2 duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Heart className="text-amber-800" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-amber-100">Our Mission</h3>
              </div>
              <p className="text-lg">
                To provide comprehensive musical education that balances tradition with innovation, nurture talent with personalized guidance, foster a community of music lovers, and promote Hindustani classical music as a living, evolving art form accessible to all.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="text-4xl text-amber-200 opacity-30">♫</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Achievements Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Award className="inline-block text-amber-600 mb-2" size={32} />
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Our Journey & Achievements</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            
            {/* Timeline Navigation */}
            <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
              <div className="flex space-x-4 mx-auto">
                {journeyEvents.map((event, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveJourney(index)}
                    className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                      activeJourney === index 
                        ? "bg-amber-700 text-amber-50" 
                        : "bg-amber-200 text-amber-800 hover:bg-amber-300"
                    }`}
                  >
                    {event.year}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Active Journey Card */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={() => setActiveJourney((prev) => (prev === 0 ? journeyEvents.length - 1 : prev - 1))}
                className="bg-amber-600 text-amber-50 rounded-full p-2 hover:bg-amber-700 transition-colors"
              >
                &#10094;
              </button>
            </div>
            
            <div className="overflow-hidden rounded-lg border-4 border-amber-600 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img 
                    src={journeyEvents[activeJourney].image} 
                    alt={journeyEvents[activeJourney].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 bg-amber-700 text-amber-50 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{journeyEvents[activeJourney].title}</h3>
                    <p className="text-xl font-semibold mb-4 text-amber-200">
                      <Calendar className="inline-block mr-2" size={20} />
                      {journeyEvents[activeJourney].year}
                    </p>
                    <p className="text-lg">{journeyEvents[activeJourney].description}</p>
                  </div>
                  <div className="flex justify-end mt-6">
                    <div className="text-4xl text-amber-200 opacity-50">♪ ♫</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={() => setActiveJourney((prev) => (prev === journeyEvents.length - 1 ? 0 : prev + 1))}
                className="bg-amber-600 text-amber-50 rounded-full p-2 hover:bg-amber-700 transition-colors"
              >
                &#10095;
              </button>
            </div>
          </div>
          
          {/* Timeline Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {journeyEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveJourney(index)}
                className={`w-3 h-3 rounded-full ${
                  activeJourney === index ? "bg-amber-700" : "bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#602929] text-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="inline-block text-amber-200 mb-2" size={32} />
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Our Founders</h2>
            <div className="h-1 w-24 bg-amber-200 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="border-8 border-amber-600 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img src="/api/placeholder/500/500" alt="Founder" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4">
                    <div className="flex justify-center space-x-2 mb-2">
                      <div className="text-3xl text-amber-200">♪</div>
                      <div className="text-3xl text-amber-200">♫</div>
                      <div className="text-3xl text-amber-200">♪</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-amber-100">Abha Tripathi & Anchal Tripathi</h3>
              <p className="text-lg mb-4 text-amber-200">Founder & Artistic Director</p>
              <p className="text-lg mb-4">
                With over 30 years of experience in Hindustani classical music, Pandit Rajan Mishra is a renowned vocalist of the Banaras Gharana tradition. His deep knowledge and passion for preserving musical heritage led to the founding of Tamasha Bhawan in 2015.
              </p>
              <p className="text-lg mb-6">
                A recipient of numerous national and international awards, Pandit ji brings his expertise and vision to create a space where classical music can be experienced, learned, and celebrated by all generations.
              </p>
              <div className="text-amber-200 font-serif italic text-xl">
                "Music is not just about sound; it's about feeling, tradition, and connection with our roots."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MessageSquare className="inline-block text-amber-600 mb-2" size={32} />
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-amber-300 rounded-lg overflow-hidden bg-amber-50 shadow-md"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-amber-800">{faq.question}</span>
                  <span className="text-amber-600 text-2xl">
                    {isOpen === index ? '−' : '+'}
                  </span>
                </button>
                
                {isOpen === index && (
                  <div className="p-4 bg-amber-100/50 border-t border-amber-300">
                    <p className="text-amber-800">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#4A1A1A] text-[#D7A32F]">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <Music className="inline-block text-[#D7A32F] mb-2" size={32} />
      <h2 className="text-4xl font-bold text-[#D7A32F] mb-4">Join Our Musical Journey</h2>
      <div className="h-1 w-24 bg-[#D7A32F] mx-auto"></div>
      <p className="text-xl mt-6 max-w-3xl mx-auto">
        Be part of our vibrant community and explore the rich tradition of Hindustani classical music. Connect with us through any of these channels:
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
      {/* WhatsApp */}
      <a 
        href="#" 
        className="bg-[#D7A32F] hover:bg-[#4A1A1A] p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all hover:-translate-y-2 duration-300"
      >
        <div className="bg-[#000000] text-[#ffffff] p-4 rounded-full mb-4">
          <MessageSquare size={24} />
        </div>
        <span className="font-medium text-white">WhatsApp</span>
      </a>
      
      {/* Telegram */}
      <a 
        href="#" 
        className="bg-[#D7A32F] hover:bg-[#4A1A1A] p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all hover:-translate-y-2 duration-300"
      >
        <div className="bg-[#000000] text-[#fff] p-4 rounded-full mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-medium text-white">Telegram</span>
      </a>
      
      {/* Email */}
      <a 
        href="mailto:contact@tamashabhawan.com" 
        className="bg-[#D7A32F] hover:bg-[#4A1A1A] p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all hover:-translate-y-2 duration-300"
      >
        <div className="bg-[#000] text-[#fff] p-4 rounded-full mb-4">
          <Mail size={24} />
        </div>
        <span className="font-medium text-white">Email</span>
      </a>
      
      {/* Phone */}
      <a 
        href="tel:+919876543210" 
        className="bg-[#D7A32F] hover:bg-[#4A1A1A] p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all hover:-translate-y-2 duration-300"
      >
        <div className="bg-[#000] text-[#fff] p-4 rounded-full mb-4">
          <Phone size={24} />
        </div>
        <span className="font-medium text-white">Phone</span>
      </a>
      
      {/* YouTube */}
      <a 
        href="#" 
        className="bg-[#D7A32F] hover:bg-[#4A1A1A] p-6 rounded-lg text-center flex flex-col items-center justify-center transition-all hover:-translate-y-2 duration-300"
      >
        <div className="bg-[#000] text-[#fff] p-4 rounded-full mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988802 13.537 1.14279 15.3213 1.46 17.08C1.57879 17.5546 1.82072 17.9894 2.16135 18.3406C2.50198 18.6918 2.92925 18.9468 3.4 19.08C5.12 19.54 12 19.54 12 19.54C12 19.54 18.88 19.54 20.6 19.08C21.0708 18.9468 21.498 18.6918 21.8387 18.3406C22.1793 17.9894 22.4212 17.5546 22.54 17.08C22.8524 15.3397 23.0063 13.5747 23 11.8C23.0112 10.013 22.8572 8.22866 22.54 6.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-medium text-white">YouTube</span>
      </a>
    </div>
    
    <div className="mt-12 text-center">
      <a 
        href="#" 
        className="inline-block bg-[#D7A32F] text-[#4A1A1A] font-bold py-3 px-8 rounded-full hover:bg-[#4A1A1A] hover:text-[#D7A32F] transition-colors text-lg"
      >
        Enroll Now
      </a>
    </div>
  </div>
</section>

    </div>
  );
}