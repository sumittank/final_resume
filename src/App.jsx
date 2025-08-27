// import React, { useState } from 'react';
// import './App.css';
// import dashboardImage from './assets/dashboard.png';
// import sqlImage from './assets/sql.png';
// import foodAppImage from './assets/foodApp.png';
// import fireDept from './assets/fire.png'
// import resumeImg from './assets/resume.png'
// import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope , FaLink , FaFileAlt } from 'react-icons/fa';
// import { FaPython, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiTensorflow, SiNumpy, SiPandas, SiMongodb, SiSqlite, SiExpress } from 'react-icons/si';

// export default function Portfolio() {
//   const [isLarge, setIsLarge] = useState(false);  // Track if the image is large or small
//   const [isVisible, setIsVisible] = useState(false);  // Track full-screen visibility
  
//   const fireDept2 = fireDept; // Replace with your actual image URL

//   // Function to toggle image size and visibility
//   const handleImageClick = () => {
//     setIsLarge(!isLarge);  // Toggle the size (small/large)
//     setIsVisible(!isVisible);  // Toggle the full-screen view
//   };
//   return (
//     <div className="relative flex flex-col min-h-screen bg-black overflow-x-hidden"
//          style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      
//       <div className="flex flex-col md:flex-row p-4 gap-6">
//         {/* Left Side Image */}
//         <div
//           className="relative w-full md:w-1/2 h-72 md:h-auto rounded-xl bg-center bg-contain"
//           style={{
//             backgroundImage: `linear-gradient(rgba(52,52,52,0.1), rgba(92,92,92,0)), url(${dashboardImage})`,
//             backgroundRepeat: 'no-repeat',
//           }}
//         />

//         {/* Right Side About Section */}
//         <section className="w-full md:w-1/2 bg-zinc-950 rounded-xl p-4">
//           <h2 className="text-white text-2xl font-bold mb-4">About</h2>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div
//               className="bg-center bg-cover rounded-xl w-full sm:w-64 h-32 sm:h-40"
//               style={{
//                 backgroundImage:
//                   'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHIUCdJqTjh0LW9O1Dhuvgrg0jacM7NwN1A&s")',
//               }}
//             />

//             <div className="text-white flex flex-col justify-center w-full">
//               <span className='flex items-center mb-2 text-teal-500 hover:text-green-500 text-3xl'>Hii I'm Sumit Tank</span>
//               <div className="flex items-center mb-2 hover:text-green-500">
//                 <FaGithub className="text-lg mr-2" />
//                 <a href="https://github.com/sumittank" target="_blank" rel="noopener noreferrer"
//                    className="hover:text-green-500 text-sm break-all">
//                   github.com/sumittank
//                 </a>
//               </div>
//               <div className="flex items-center mb-2 hover:text-green-500">
//                 <FaLinkedin className="text-lg mr-2" />
//                 <a href="https://www.linkedin.com/in/sumit-tank-7ba356289" target="_blank" rel="noopener noreferrer"
//                    className="hover:text-green-500 text-sm break-all">
//                   www.linkedin.com/in/sumit-tank-7ba356289
//                 </a>
//               </div>
//               <div className="flex items-center mb-2 hover:text-green-500">
//                 <FaPhoneAlt className="text-lg mr-2" />
//                 <span className="text-sm">+91 7447077756</span>
//               </div>
//               <div className="flex items-center mb-2 hover:text-green-500">
//                 <FaEnvelope className="text-lg mr-2" />
//                 <span className="text-sm break-all">sumittank77756@gmail.com</span>
//               </div>
//               {/* <div className="flex items-center mb-2 hover:text-green-500">
//                 <FaFileAlt className="text-lg mr-2" />
//                 <span className="text-sm break-all">resume click here</span>
//               </div> */}

  


//        <div className="flex items-center mb-2 hover:text-green-500">

//       <FaFileAlt className="mr-2" />
//       <span className="text-sm" onClick={handleImageClick}>Resume click here</span>

//       {/* The image itself that toggles between small/large */}
//       <div className="flex justify-center">
//         <img
//           src={fireDept}
//           alt="Resume Thumbnail"
//           onClick={handleImageClick} // Trigger the function on click
//           className={`transition-all duration-300 ease-in-out rounded-lg shadow-lg ${isLarge ? 'w-0' : 'h-0'}`}
//           style={{ cursor: 'pointer' }}
//         />
//       </div>


//       {isVisible && (
//         <div
//           className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
//           onClick={handleImageClick} // Close the image when clicked
//         >
//           <img
//             src={resumeImg}
//             alt="Resume Fullscreen"
//             className="transition-all duration-300 ease-in-out max-w-full max-h-full object-contain"
//             style={{ cursor: 'pointer' }}
//           />
//         </div>
//       )}
//     </div>

//       {/* Display image with size toggle */}


//             </div>
//           </div>

//           <div className="mt-4">
//             <p className="text-white text-xl font-bold mb-1">Engineering Student</p>
//             <p className="text-white text-xl font-bold mb-3">AITR Indore</p>
//             <ul className="text-gray-300 text-sm space-y-2">
//               <li>Enthusiastic engineering student passionate about <strong>web development</strong>, <strong>machine learning</strong>, and <strong>creative innovation</strong>.</li>
//               <li>Skilled in the <strong>MERN stack</strong> and <strong>ML model development</strong>, with a constant desire to <strong>learn</strong> and tackle real-world challenges.</li>
//               <li>Enjoy blending <strong>logic and imagination</strong> through technology and the arts, especially <strong>painting</strong>.</li>
//               <li>Dedicated, <strong>ambitious</strong>, and focused on <strong>growth</strong>, always pushing boundaries.</li>
//               <li>Committed to transforming <strong>ideas</strong> into impactful <strong>solutions</strong>.</li>
//             </ul>
//           </div>
//         </section>
//       </div>

//       {/* Tech Skills Section */}
//       <section className="px-4 pt-5 pb-3 flex flex-col items-center">
//         <h2 className="text-white text-2xl font-bold tracking-tight mb-3">Tech Skills</h2>

//         {/* Web Development */}
//         <div className="mb-6 w-full max-w-4xl">
//           <h3 className="text-white text-xl font-semibold text-center">Web Development</h3>
//           <div className="flex flex-wrap justify-center gap-3 mt-3">
//             {[{ name: 'JavaScript', icon: <FaJsSquare /> }, { name: 'React', icon: <FaReact /> }, { name: 'Node.js', icon: <FaNodeJs /> }, { name: 'Express.js', icon: <SiExpress /> }].map(({ name, icon }) => (
//               <div key={name} className="flex items-center rounded-full bg-[#333] px-4 py-2">
//                 <div className="text-white text-xl mr-2">{icon}</div>
//                 <p className="text-white text-sm">{name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Machine Learning */}
//         <div className="mb-6 w-full max-w-4xl">
//           <h3 className="text-white text-xl font-semibold text-center">Machine Learning</h3>
//           <div className="flex flex-wrap justify-center gap-3 mt-3">
//             {[{ name: 'Python', icon: <FaPython /> }, { name: 'NumPy', icon: <SiNumpy /> }, { name: 'Pandas', icon: <SiPandas /> }, { name: 'TensorFlow', icon: <SiTensorflow /> }].map(({ name, icon }) => (
//               <div key={name} className="flex items-center rounded-full bg-[#333] px-4 py-2">
//                 <div className="text-white text-xl mr-2">{icon}</div>
//                 <p className="text-white text-sm">{name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Database */}
//         <div className="mb-6 w-full max-w-4xl">
//           <h3 className="text-white text-xl font-semibold text-center">Database</h3>
//           <div className="flex flex-wrap justify-center gap-3 mt-3">
//             {[{ name: 'MongoDB', icon: <SiMongodb /> }, { name: 'SQL', icon: <SiSqlite /> }].map(({ name, icon }) => (
//               <div key={name} className="flex items-center rounded-full bg-[#333] px-4 py-2">
//                 <div className="text-white text-xl mr-2">{icon}</div>
//                 <p className="text-white text-sm">{name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="px-4 pt-5 pb-10">
//         <h2 className="text-white text-3xl font-bold tracking-tight mb-8 text-center">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {[{
//             title: 'SQL Project',
//             description: 'A platform for students to run SQL queries with a real-time database interface.',
//             image: sqlImage,
//             techStack: ['SQL', 'React', 'Node.js', 'Express'],
//             liveLink: 'https://run-sql-query-last.netlify.app',
//           },
//           {
//             title: 'Food App',
//             description: 'The Food Delivery App simplifies ordering from a variety of restaurants to your doorstep.',
//             image: foodAppImage,
//             techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
//             liveLink: 'https://drop-food-delivery.netlify.app',
//           }].map((project) => (
//             <div key={project.title} className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col">
//               <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
//               <div className="p-4 flex flex-col flex-grow">
//                 <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-gray-300 text-sm mb-3 flex-grow">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.techStack.map((tech) => (
//                     <span key={tech} className="bg-[#333] text-white text-xs px-2 py-1 rounded">{tech}</span>
//                   ))}
//                 </div>
//                 <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
//                    className="text-green-400 hover:underline text-sm">
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
    

// {/* My Prayatna 2.0 Hackathon Section */}
// <section className="px-4 pt-5 pb-3 max-w-7xl mx-auto">
//   <h2 className="text-white text-3xl font-bold tracking-tight mb-4 text-center md:text-left">Experience</h2>
//   <h2 className="text-white text-2xl font-bold tracking-tight mb-8 text-center md:text-left">My Prayatna 2.0 Hackathon Project</h2>

//   <div className="flex flex-col md:flex-row gap-8">
//     {/* Image Block */}
//     <div
//       className="flex-1 w-full bg-center bg-cover rounded-xl h-48 md:h-auto"
//       style={{
//         backgroundImage: `url(${fireDept})`, // Check if fireDept image URL is correct
//         backgroundPosition: "center",
//         backgroundSize: "cover", // This ensures the image covers the container
//       }}
//     >
//       {/* Placeholder if the image is not loading */}
//       {!fireDept && (
//         <div className="flex items-center justify-center text-white bg-[#333] w-full h-full">
//           <p className="text-2xl">Image not found</p>
//         </div>
//       )}
//     </div>

//     <div className="flex-1 flex flex-col gap-4">
//       <p className="text-white text-xl font-semibold">Hackathon Overview</p>
//       <p className="text-gray-300 text-sm md:text-base">
//         "Prayatna 2.0" was a hackathon focused on solving real-world challenges using technology. Our project centered on a fire department monitoring system integrated with AI, aimed at predicting and analyzing fire incidents based on historical data and real-time inputs.
//       </p>

//       <p className="text-white text-xl font-semibold">Tech Stack</p>
//       <div className="flex flex-wrap gap-2">
//         {['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'].map((tech) => (
//           <div key={tech} className="px-3 py-1 bg-[#333] rounded-full text-white text-xs">
//             {tech}
//           </div>
//         ))}
//       </div>

//       <p className="text-white text-xl font-semibold">Live At</p>
//       <div className="flex items-center px-3 py-1 bg-[#333] rounded-full">
//         <a
//           href="https://fire-dept.netlify.app/"
//           className="flex items-center text-white text-sm hover:text-green-500 transition-colors"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaLink className="mr-2" />
//           <span className='text-teal-500 hover:text-green-500 break-all'>https://fire-dept.netlify.app/</span>
//         </a>
//       </div>

//       <p className="text-gray-300 text-sm md:text-base mt-4">
//         This project secured a top position in the hackathon due to its innovative approach and practical application of machine learning to improve public safety. The AI model, trained on past incidents, helped predict fire occurrences with high accuracy.
//       </p>
//     </div>
//   </div>
// </section>



// {/* Contact Me Section */}
// <section className="px-4 pt-8 pb-5 bg-[#1a1a1a] rounded-xl shadow-lg mt-10 max-w-7xl mx-auto mb-12">
//   <h2 className="text-white text-3xl font-bold tracking-tight mb-8 text-center md:text-left">Contact Me</h2>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     {/* Left Section: Contact Details */}
//     <div className="flex flex-col justify-center gap-4">
//       <p className="text-white text-xl">I'd love to hear from you!</p>
//       <p className="text-gray-300 text-sm md:text-base">
//         Whether you have a question, a suggestion, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations.
//       </p>

//       <p className="text-white text-lg mt-4">Contact Info:</p>
//       <p className="text-gray-300 text-sm md:text-base">
//         <strong>Email:</strong> <a href="mailto:work.sumittank77756@gmail.com" className="text-gray-400 hover:underline break-all">work.sumittank77756@gmail.com</a>
//       </p>
//       <p className="text-gray-300 text-sm md:text-base">
//         <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sumit-tank-7ba356289" className="text-gray-400 hover:underline break-all">linkedin.com/in/sumit-tank-7ba356289</a>
//       </p>
//     </div>

//     {/* Right Section: Contact Form */}
//     <div className="flex flex-col gap-4">
//       <form action="#" method="POST" className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="p-3 rounded-md bg-[#333] text-white text-sm placeholder-gray-400 w-full"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="p-3 rounded-md bg-[#333] text-white text-sm placeholder-gray-400 w-full"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="4"
//           className="p-3 rounded-md bg-[#333] text-white text-sm placeholder-gray-400 w-full"
//         ></textarea>

//         <button
//           type="submit"
//           className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto self-center md:self-start"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// }



import React from "react";
// import { Github, Linkedin, Phone, Mail } from "lucide-react";
import { Github, Linkedin, Phone, Mail, FileText } from "lucide-react";
import heroImage from "./assets/engineering backgroud.jpg";
import sqlImage from "./assets/sql.png";
import foodAppImage from "./assets/foodApp.png";
// <-- replace with your uploaded hero background
import { ExternalLink } from "lucide-react";
import fireProject from "./assets/fire.png"; // update path if needed
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope , FaLink , FaFileAlt } from 'react-icons/fa';
import { FaPython, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiNumpy, SiPandas, SiMongodb, SiSqlite, SiExpress } from 'react-icons/si';
import { ChevronDown } from 'lucide-react';

const techSkills = {
  webDevelopment: [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌐" },
    { name: "Express.js", icon: "💨" },
  ],
  machineLearning: [
    { name: "Python", icon: "🐍" },
    { name: "NumPy", icon: "🧠" },
    { name: "Pandas", icon: "🔬" },
            { name: "TensorFlow", icon: "📝" },

  ],
  database: [
    { name: "MySQL", icon: "🛢️" },
    { name: "MongoDB", icon: "🍃" },

  ],
};

  const projects = [
    {
      title: 'SQL Project',
      description: 'A platform for students to run SQL queries with a real-time database interface.',
      image: sqlImage,
      techStack: ['SQL', 'React', 'Node.js', 'Express'],
      liveLink: 'https://run-sql-query-last.netlify.app',
    },
    {
      title: 'Food App',
      description: 'The Food Delivery App simplifies ordering from a variety of restaurants to your doorstep.',
      image: foodAppImage,
      techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      liveLink: 'https://drop-food-delivery.netlify.app',
    }
  ];

// Import certificate images
import internshipCert from "./assets/Internship.png";
import nptelCert from "./assets/nptelpython.png";
import ciscoCert from "./assets/Ciscodatascience.png";
import drawingIntermediateCert from "./assets/Inter.jpg";
import drawingElementaryCert from "./assets/Element.jpg";
import profileImage from "./assets/sumit_professional_photo.jpg";

const Hero = () => {
  return (
    <>
    <section
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.85), rgba(34, 40, 49, 0.85)), url(${heroImage})`,
      }}
>
  <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div className="text-center md:text-left space-y-6">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Hello, I'm Sumit!
        </span>
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
        Engineering Student | Web Dev | Machine Learning
      </h2>

      <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
        AITR Indore • Passion for building scalable web apps & exploring AI innovations
      </p>
      <div className="flex flex-wrap gap-6 mb-8">
            <a
              href="https://github.com/sumittank"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-tank-7ba356289"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={20} />
              <span className="hidden sm:inline">+91 7447077756</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={20} />
              <span className="hidden sm:inline">sumittank77756@gmail.com</span>
            </div>
          </div>

      <button
        onClick={() =>
          window.scrollBy({ top: 600, behavior: "smooth" })
        }
        className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg 
        hover:shadow-[0_0_25px_rgba(0,195,255,0.9)] transition-all text-lg font-semibold"
      >
        About Me
      </button>
    </div>

    {/* Right Profile Image with Floating Animation */}
    {/* <div className="flex justify-center md:justify-end">
      <img
        src="/profile.jpg" // replace with your imported image
        alt="Profile"
        className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-lg animate-[float_4s_ease-in-out_infinite]"
      />
    </div> */}
<div className="flex justify-center md:justify-end">
  <img
    src= {profileImage}
    alt="Profile"
    className="
      w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-lg
      animate-[wiggle_4s_ease-in-out_infinite] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/75
                             transform transition duration-300 hover:scale-105
    "
  />
</div>

<style>
{`
  @keyframes wiggle {
    0%, 100% { transform: translateY(0px); }
    25% { transform: translateY(-10px); }
    50% { transform: translateY(-20px); }
    75% { transform: translateY(-10px); }
  }
`}
</style>

  </div>
</section>

        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Enthusiastic engineering student passionate about{" "}
                <span className="text-cyan-400 font-semibold">web development</span>,{" "}
                <span className="text-cyan-400 font-semibold">machine learning</span>, and{" "}
                <span className="text-cyan-400 font-semibold">creative innovation</span>.
              </p>
              <p>
                Skilled in the{" "}
                <span className="text-cyan-400 font-semibold">MERN stack</span> and{" "}
                <span className="text-cyan-400 font-semibold">ML model development</span>, with a
                constant desire to <span className="text-cyan-400 font-semibold">learn</span> and tackle real-world challenges.
              </p>
              <p>
                Enjoy blending <span className="text-cyan-400 font-semibold">logic and imagination</span> through technology and the arts, especially{" "}
                <span className="text-cyan-400 font-semibold">painting</span>.
              </p>
              <p>
                Dedicated, <span className="text-cyan-400 font-semibold">ambitious</span>, and focused on{" "}
                <span className="text-cyan-400 font-semibold">growth</span>, always pushing boundaries.
              </p>
              <p>
                Committed to transforming <span className="text-cyan-400 font-semibold">ideas</span> into impactful{" "}
                <span className="text-cyan-400 font-semibold">solutions</span>.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 shadow-lg hover:shadow-indigo-500/30 transition">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Engineering Student</h3>
              <p className="text-xl font-semibold mb-6 text-gray-400">AITR Indore</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400">
                  <Github size={18} />
                  <a
                    href="https://github.com/sumittank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:underline break-all"
                  >
                    github.com/sumittank
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400">
                  <Linkedin size={18} />
                  <a
                    href="https://www.linkedin.com/in/sumit-tank-7ba356289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:underline break-all"
                  >
                    linkedin.com/in/sumit-tank-7ba356289
                  </a>
                </div>

                <div className="flex items-center text-gray-400 gap-3 hover:text-cyan-400">
                  <Phone size={18} />
                  <span className="text-sm text-gray-400">+91 7447077756</span>
                </div>

                <div className="flex items-center text-gray-400 gap-3 hover:text-cyan-400">
                  <Mail size={18} />
                  <span className="text-sm text-gray-400 break-all">sumittank77756@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-gray-400 transition cursor-pointer hover:text-cyan-400">
                  <FileText size={18} />
                  <span className="text-sm">Resume</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Tech Skills Section */}
<section className="py-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Tech Skills
        </h2>

        <div className="space-y-16">
          {/* Web Development */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              Web Development
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techSkills.webDevelopment.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-full border border-gray-700 
                             hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 
                             transform transition duration-300 hover:scale-105"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Learning */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              Machine Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techSkills.machineLearning.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-full border border-gray-700 
                             hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 
                             transform transition duration-300 hover:scale-105"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              Database
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techSkills.database.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-full border border-gray-700 
                             hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 
                             transform transition duration-300 hover:scale-105"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  {/* Projects*/ }
   <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 
                         hover:border-cyan-400 hover:shadow-cyan-400/30 hover:scale-105 
                         transform transition duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4 text-blue-400 text-center md:text-left">
          Experience
        </h2>
        <h3 className="text-2xl font-semibold mb-12 text-cyan-400 text-center md:text-left">
          My Prayatna 2.0 Hackathon Project
        </h3>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* Image */}
          <div className="relative">
            <img
              src={fireProject}
              alt="Fire Department Project"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-700 
                         hover:shadow-cyan-400/30 hover:scale-105 
                         transform transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">
                Hackathon Overview
              </h4>
              <p className="text-gray-300 leading-relaxed">
                "Prayatna 2.0" was a hackathon focused on solving real-world
                challenges using technology. Our project centered on a fire
                department monitoring system integrated with AI, aimed at
                predicting and analyzing fire incidents based on historical data
                and real-time inputs.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "TensorFlow", "Node.js", "MongoDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 border border-indigo-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Live Project */}
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">
                Live Project
              </h4>
              <a
                href="https://fire-dept.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-indigo-800 transition-colors font-medium"
              >
                <ExternalLink size={16} />
                fire-dept.netlify.app
              </a>
            </div>

            {/* Summary */}
            <p className="text-gray-300 leading-relaxed">
              This project secured a top position in the hackathon due to its
              innovative approach and practical application of machine learning
              to improve public safety. The AI model, trained on past incidents,
              helped predict fire occurrences with high accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
{/*Certificate*/}
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Certifications
        </h2>

        <div className="space-y-20">
          {/* Academic Certificates */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-secondary text-center text-cyan-400">
              Academic Certificates
            </h3>

            {/* Internship Certificate - Single Centered Block */}
            <div className="flex justify-center mb-16">
              <div className="bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-lg hover:shadow-blue-500/50 transition-all max-w-3xl w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-72">
                    <img
                      src={internshipCert}
                      alt="Internship Certificate"
                      className="w-full h-48 md:h-full object-fill rounded-l-2xl"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center bg-gray-900 rounded-xl">
                    <h4 className="text-lg font-bold mb-3 text-blue-400">
                      Internship Certificate
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-gray-400">
                      Professional internship completion certificate demonstrating
                      hands-on industry experience in the field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NPTEL & Cisco Certificates - Independent Hover */}
            <div className="grid md:grid-cols-2 gap-10">
              {/* NPTEL */}
              <div className="bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                <div className="flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={nptelCert}
                      alt="NPTEL Python Certificate"
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-6 flex-1 bg-gray-900 rounded-xl">
                    <h4 className="text-lg font-bold mb-3 text-blue-400">
                      NPTEL Python Course
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-gray-400">
                      Completion certificate for NPTEL’s Python programming course
                      covering programming fundamentals and advanced concepts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cisco */}
              <div className="bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                <div className="flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={ciscoCert}
                      alt="Cisco Data Science Certificate"
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-6 flex-1 bg-gray-900 rounded-xl">
                    <h4 className="text-lg font-bold mb-3 text-blue-400">
                      Data Science - Cisco Course
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-gray-400">
                      Cisco Data Science course completion certificate covering
                      analytics, data processing, and industry practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Co-curricular Certificates */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-secondary text-center text-cyan-400">
              Co-curricular Certificates
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Intermediate Drawing */}
              <div className="bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                <div className="flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={drawingIntermediateCert}
                      alt="Intermediate Drawing Certificate"
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-lg font-bold mb-3 text-blue-400">
                      Intermediate Drawing Grade Exam
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-gray-400">
                      Certificate for completing the Intermediate Drawing Grade
                      Examination by the Govt. of Maharashtra, showcasing advanced
                      artistic skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Elementary Drawing */}
              <div className="bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                <div className="flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={drawingElementaryCert}
                      alt="Elementary Drawing Certificate"
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-lg font-bold mb-3 text-blue-400">
                      Elementary Drawing Grade Exam
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-gray-400">
                      Certificate for completing the Elementary Drawing Grade
                      Examination by the Govt. of Maharashtra, demonstrating
                      foundational artistic abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-r from-gray-950 via-gray-950 to-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
      Contact Me
    </h2>

    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            I'd love to hear from you!
          </h3>
          <p className="text-muted-foreground mb-6 text-gray-400">
            Whether you have a question, a suggestion, or just want to connect, feel free to reach out. 
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-blue-400">Contact Info:</h4>

          {/* Email */}
          <div className="flex items-center gap-3 text-cyan-400">
            <Mail size={18} className="text-blue-400" />
            <div>
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:sumittank77756@gmail.com"
                className="text-cyan-400 hover:text-primary transition duration-300 hover:underline"
              >
                sumittank77756@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <Linkedin size={18} className="text-blue-400" />
            <div>
              <strong className="text-white">LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/sumit-tank-7ba356289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-primary transition duration-300 hover:underline break-all"
              >
                linkedin.com/in/sumit-tank-7ba356289
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 border border-cyan-700">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-950 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              
              className="w-full px-4 py-3 rounded-lg bg-gray-950 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              
              className="w-full px-4 py-3 rounded-lg bg-gray-950 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-blue-400 text-white font-medium shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="py-8 border-t border-gray-700 bg-black">
  <div className="container mx-auto px-4 text-center">
    <p className="text-gray-400">
     <p className="text-gray-400 text-sm">
          Crafted & Design By
        </p>
        <p className="text-gray-400 text-sm">
          THINK 💖 TANK
        </p>
    </p>
  </div>
</footer>
    </>
  );
};

export default Hero;
