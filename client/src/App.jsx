import React, { useState } from 'react';
import './App.css';
import dashboardImage from './assets/dashboard.png';
import sqlImage from './assets/sql.png';
import foodAppImage from './assets/foodApp.png';
import fireDept from './assets/fire.png'
import resumeImg from './assets/resume.png'
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope , FaLink , FaFileAlt } from 'react-icons/fa';
import { FaPython, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiNumpy, SiPandas, SiMongodb, SiSqlite, SiExpress } from 'react-icons/si';

export default function Portfolio() {
  const [isLarge, setIsLarge] = useState(false);  // Track if the image is large or small
  const [isVisible, setIsVisible] = useState(false);  // Track full-screen visibility
  
  const fireDept2 = fireDept; // Replace with your actual image URL

  // Function to toggle image size and visibility
  const handleImageClick = () => {
    setIsLarge(!isLarge);  // Toggle the size (small/large)
    setIsVisible(!isVisible);  // Toggle the full-screen view
  };
  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-x-hidden"
         style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      
      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Left Side Image */}
        <div
          className="relative w-full md:w-1/2 h-72 md:h-auto rounded-xl bg-center bg-contain"
          style={{
            backgroundImage: `linear-gradient(rgba(52,52,52,0.1), rgba(92,92,92,0)), url(${dashboardImage})`,
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Right Side About Section */}
        <section className="w-full md:w-1/2 bg-zinc-950 rounded-xl p-4">
          <h2 className="text-white text-2xl font-bold mb-4">About</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div
              className="bg-center bg-cover rounded-xl w-full sm:w-64 h-32 sm:h-40"
              style={{
                backgroundImage:
                  'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHIUCdJqTjh0LW9O1Dhuvgrg0jacM7NwN1A&s")',
              }}
            />

            <div className="text-white flex flex-col justify-center w-full">
              <span className='flex items-center mb-2 text-teal-500 hover:text-green-500 text-3xl'>Hii I'm Sumit Tank</span>
              <div className="flex items-center mb-2 hover:text-green-500">
                <FaGithub className="text-lg mr-2" />
                <a href="https://github.com/sumittank" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-500 text-sm break-all">
                  github.com/sumittank
                </a>
              </div>
              <div className="flex items-center mb-2 hover:text-green-500">
                <FaLinkedin className="text-lg mr-2" />
                <a href="https://www.linkedin.com/in/sumit-tank-7ba356289" target="_blank" rel="noopener noreferrer"
                   className="hover:text-green-500 text-sm break-all">
                  www.linkedin.com/in/sumit-tank-7ba356289
                </a>
              </div>
              <div className="flex items-center mb-2 hover:text-green-500">
                <FaPhoneAlt className="text-lg mr-2" />
                <span className="text-sm">+91 7447077756</span>
              </div>
              <div className="flex items-center mb-2 hover:text-green-500">
                <FaEnvelope className="text-lg mr-2" />
                <span className="text-sm break-all">sumittank77756@gmail.com</span>
              </div>
              {/* <div className="flex items-center mb-2 hover:text-green-500">
                <FaFileAlt className="text-lg mr-2" />
                <span className="text-sm break-all">resume click here</span>
              </div> */}

  


       <div className="flex items-center mb-2 hover:text-green-500">

      <FaFileAlt className="mr-2" />
      <span className="text-sm" onClick={handleImageClick}>Resume click here</span>

      {/* The image itself that toggles between small/large */}
      <div className="flex justify-center">
        <img
          src={fireDept}
          alt="Resume Thumbnail"
          onClick={handleImageClick} // Trigger the function on click
          className={`transition-all duration-300 ease-in-out rounded-lg shadow-lg ${isLarge ? 'w-0' : 'h-0'}`}
          style={{ cursor: 'pointer' }}
        />
      </div>


      {isVisible && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
          onClick={handleImageClick} // Close the image when clicked
        >
          <img
            src={resumeImg}
            alt="Resume Fullscreen"
            className="transition-all duration-300 ease-in-out max-w-full max-h-full object-contain"
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </div>

      {/* Display image with size toggle */}


            </div>
          </div>

          <div className="mt-4">
            <p className="text-white text-xl font-bold mb-1">Engineering Student</p>
            <p className="text-white text-xl font-bold mb-3">AITR Indore</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Enthusiastic engineering student passionate about <strong>web development</strong>, <strong>machine learning</strong>, and <strong>creative innovation</strong>.</li>
              <li>Skilled in the <strong>MERN stack</strong> and <strong>ML model development</strong>, with a constant desire to <strong>learn</strong> and tackle real-world challenges.</li>
              <li>Enjoy blending <strong>logic and imagination</strong> through technology and the arts, especially <strong>painting</strong>.</li>
              <li>Dedicated, <strong>ambitious</strong>, and focused on <strong>growth</strong>, always pushing boundaries.</li>
              <li>Committed to transforming <strong>ideas</strong> into impactful <strong>solutions</strong>.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Tech Skills Section */}
      <section className="px-4 pt-5 pb-3 flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold tracking-tight mb-3">Tech Skills</h2>

        {/* Web Development */}
        <div className="mb-6 w-full max-w-4xl">
          <h3 className="text-white text-xl font-semibold text-center">Web Development</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {[{ name: 'JavaScript', icon: <FaJsSquare /> }, { name: 'React', icon: <FaReact /> }, { name: 'Node.js', icon: <FaNodeJs /> }, { name: 'Express.js', icon: <SiExpress /> }].map(({ name, icon }) => (
              <div key={name} className="flex items-center rounded-full bg-[#333] px-4 py-2">
                <div className="text-white text-xl mr-2">{icon}</div>
                <p className="text-white text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Learning */}
        <div className="mb-6 w-full max-w-4xl">
          <h3 className="text-white text-xl font-semibold text-center">Machine Learning</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {[{ name: 'Python', icon: <FaPython /> }, { name: 'NumPy', icon: <SiNumpy /> }, { name: 'Pandas', icon: <SiPandas /> }, { name: 'TensorFlow', icon: <SiTensorflow /> }].map(({ name, icon }) => (
              <div key={name} className="flex items-center rounded-full bg-[#333] px-4 py-2">
                <div className="text-white text-xl mr-2">{icon}</div>
                <p className="text-white text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-6 w-full max-w-4xl">
          <h3 className="text-white text-xl font-semibold text-center">Database</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {[{ name: 'MongoDB', icon: <SiMongodb /> }, { name: 'SQL', icon: <SiSqlite /> }].map(({ name, icon }) => (
              <div key={name} className="flex items-center rounded-full bg-[#333] px-4 py-2">
                <div className="text-white text-xl mr-2">{icon}</div>
                <p className="text-white text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 pt-5 pb-10">
        <h2 className="text-white text-3xl font-bold tracking-tight mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[{
            title: 'SQL Project',
            description: 'A platform for students to run SQL queries with a real-time database interface.',
            image: sqlImage,
            techStack: ['SQL', 'React', 'Node.js', 'Express'],
            liveLink: 'https://example.com/sql-project',
          },
          {
            title: 'Food App',
            description: 'The Food Delivery App simplifies ordering from a variety of restaurants to your doorstep.',
            image: foodAppImage,
            techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
            liveLink: 'https://drop-food-delivery.netlify.app',
          }].map((project) => (
            <div key={project.title} className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col">
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-[#333] text-white text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                {project.image === foodAppImage && <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                   className="text-green-400 hover:underline text-sm">
                  Live Demo
                </a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    

{/* My Prayatna 2.0 Hackathon Section */}
<section className="px-4 pt-5 pb-3 max-w-7xl mx-auto">
  <h2 className="text-white text-3xl font-bold tracking-tight mb-4 text-center md:text-left">Experience</h2>
  <h2 className="text-white text-2xl font-bold tracking-tight mb-8 text-center md:text-left">My Prayatna 2.0 Hackathon Project</h2>

  <div className="flex flex-col md:flex-row gap-8">
    {/* Image Block */}
    <div
      className="flex-1 w-full bg-center bg-cover rounded-xl h-48 md:h-auto"
      style={{
        backgroundImage: `url(${fireDept})`, // Check if fireDept image URL is correct
        backgroundPosition: "center",
        backgroundSize: "cover", // This ensures the image covers the container
      }}
    >
      {/* Placeholder if the image is not loading */}
      {!fireDept && (
        <div className="flex items-center justify-center text-white bg-[#333] w-full h-full">
          <p className="text-2xl">Image not found</p>
        </div>
      )}
    </div>

    <div className="flex-1 flex flex-col gap-4">
      <p className="text-white text-xl font-semibold">Hackathon Overview</p>
      <p className="text-gray-300 text-sm md:text-base">
        "Prayatna 2.0" was a hackathon focused on solving real-world challenges using technology. Our project centered on a fire department monitoring system integrated with AI, aimed at predicting and analyzing fire incidents based on historical data and real-time inputs.
      </p>

      <p className="text-white text-xl font-semibold">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'].map((tech) => (
          <div key={tech} className="px-3 py-1 bg-[#333] rounded-full text-white text-xs">
            {tech}
          </div>
        ))}
      </div>

      <p className="text-white text-xl font-semibold">Live At</p>
      <div className="flex items-center px-3 py-1 bg-[#333] rounded-full">
        <a
          href="https://fire-dept.netlify.app/"
          className="flex items-center text-white text-sm hover:text-green-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink className="mr-2" />
          <span className='text-teal-500 hover:text-green-500 break-all'>https://fire-dept.netlify.app/</span>
        </a>
      </div>

      <p className="text-gray-300 text-sm md:text-base mt-4">
        This project secured a top position in the hackathon due to its innovative approach and practical application of machine learning to improve public safety. The AI model, trained on past incidents, helped predict fire occurrences with high accuracy.
      </p>
    </div>
  </div>
</section>



{/* Contact Me Section */}
<section className="px-4 pt-8 pb-5 bg-[#1a1a1a] rounded-xl shadow-lg mt-10 max-w-7xl mx-auto mb-12">
  <h2 className="text-white text-3xl font-bold tracking-tight mb-8 text-center md:text-left">Contact Me</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Section: Contact Details */}
    <div className="flex flex-col justify-center gap-4">
      <p className="text-white text-xl">I'd love to hear from you!</p>
      <p className="text-gray-300 text-sm md:text-base">
        Whether you have a question, a suggestion, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations.
      </p>

      <p className="text-white text-lg mt-4">Contact Info:</p>
      <p className="text-gray-300 text-sm md:text-base">
        <strong>Email:</strong> <a href="mailto:work.sumittank77756@gmail.com" className="text-gray-400 hover:underline break-all">work.sumittank77756@gmail.com</a>
      </p>
      <p className="text-gray-300 text-sm md:text-base">
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sumit-tank-7ba356289" className="text-gray-400 hover:underline break-all">linkedin.com/in/sumit-tank-7ba356289</a>
      </p>
    </div>

    {/* Right Section: Contact Form */}
    <div className="flex flex-col gap-4">
      <form action="#" method="POST" className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-md bg-[#333] text-white text-sm placeholder-gray-400 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-md bg-[#333] text-white text-sm placeholder-gray-400 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded-md bg-[#333] text-white text-sm placeholder-gray-400 w-full"
        ></textarea>

        <button
          type="submit"
          className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto self-center md:self-start"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

    </div>
  );
}
