import { FaYoutube, FaArrowRight, FaMusic, FaBook, FaGuitar } from 'react-icons/fa';

export default function Extra() {
  return (
    <div className="bg-[#fdfaf6] text-[#2b2b2b] font-sans">
      
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Tabla.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-2xl font-bold">Tamasha Bhawan</h1>
        </div>
        <nav className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-[#c67f00]">About</a>
          <a href="#courses" className="hover:text-[#c67f00]">Courses</a>
          <a href="#products" className="hover:text-[#c67f00]">Products</a>
          <a href="#testimonials" className="hover:text-[#c67f00]">Testimonials</a>
          <a href="#contact" className="hover:text-[#c67f00]">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#fff9f0]">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="https://images.unsplash.com/photo-1633533744743-2929e94f08c3" 
            alt="Indian Classical Music" 
            className="rounded-xl shadow-lg w-full h-auto object-cover"
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

      {/* About Us */}
      <section id="about" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold mb-6">About Tamasha Bhawan</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quibusdam sed et ut magni, quas repellat maiores. Enim, voluptates possimus iure blanditiis, libero a laboriosam sed tempora exercitationem, quo sit!
          At Tamasha Bhawan, we believe music is not just an art — it's a way of life. With decades of experience, 
          our institute has produced top musicians and performers. We prepare students for top competitive exams 
          like Sangeet Visharad, Sangeet Prabhakar, and many more.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our curriculum blends classical techniques with modern learning methods to help every student find their unique voice.
        </p>
      </section>

      {/* YouTube Channel */}
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

      {/* Courses Section */}
      <section id="courses" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <FaMusic className="text-4xl text-[#c67f00] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hindustani Vocal</h3>
            <p className="text-gray-600">Master the traditional Ragas, Bandishes, and Taal system from experts.</p>
          </div>
          {/* Course Card 2 */}
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <FaGuitar className="text-4xl text-[#c67f00] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guitar & Western Music</h3>
            <p className="text-gray-600">Learn classical guitar styles and western music theory with hands-on sessions.</p>
          </div>
          {/* Course Card 3 */}
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <FaBook className="text-4xl text-[#c67f00] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sangeet Visharad Prep</h3>
            <p className="text-gray-600">Prepare for prestigious exams with theory + practical mastery.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="p-8 md:p-16 bg-[#fff9f0]">
        <h2 className="text-3xl font-bold mb-6">Products & Study Material</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <FaBook className="text-4xl text-[#c67f00] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Classical Music Notes</h3>
            <p className="text-gray-600">Curated notes and guides for beginners to advanced students.</p>
          </div>
          {/* Product Card 2 */}
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <FaGuitar className="text-4xl text-[#c67f00] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instrument Store</h3>
            <p className="text-gray-600">Get handpicked instruments like Tabla, Tanpura, and Harmonium.</p>
          </div>
          {/* Product Card 3 */}
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <FaMusic className="text-4xl text-[#c67f00] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Workshops</h3>
            <p className="text-gray-600">Attend our special classes and workshops from anywhere in the world.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold mb-6">Student Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial Card 1 */}
          <div className="p-6 border rounded-lg shadow flex flex-col items-center text-center hover:shadow-xl transition-all transform hover:scale-105">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student 1" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"Learning music here changed my life. Best institute ever!"</p>
            <h4 className="font-semibold">Rohan Singh</h4>
          </div>
          {/* Testimonial Card 2 */}
          <div className="p-6 border rounded-lg shadow flex flex-col items-center text-center hover:shadow-xl transition-all transform hover:scale-105">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student 2" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"Tamasha Bhawan helped me crack my Sangeet Visharad exams!"</p>
            <h4 className="font-semibold">Priya Sharma</h4>
          </div>
          {/* Testimonial Card 3 */}
          <div className="p-6 border rounded-lg shadow flex flex-col items-center text-center hover:shadow-xl transition-all transform hover:scale-105">
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Student 3" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gray-600 mb-2">"The guitar course was phenomenal. My skills improved in weeks!"</p>
            <h4 className="font-semibold">Amit Kapoor</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
