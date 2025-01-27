import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";

const Hero = () => {
  const texts = [
    "Software Engineer",
    "Machine Learning Enthusiast",
    "Innovator",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Social Media Icons */}
      <div className="absolute top-5 right-5 flex space-x-4 z-10">
        <a
          href="https://www.linkedin.com/in/anmol-singh-458372256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} className="text-white hover:text-blue-500" />
        </a>
        <a
          href="https://github.com/anmolsinghdz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} className="text-white hover:text-gray-500" />
        </a>
        <a
          href="https://www.instagram.com/4everanmol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="text-white hover:text-pink-500" />
        </a>
        <a
          href="https://twitter.com/anmolsinghdz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} className="text-white hover:text-blue-400" />
        </a>
        <a
          href="https://stackoverflow.com/users/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow
            size={24}
            className="text-white hover:text-orange-500"
          />
        </a>
      </div>

      {/* Rotating Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-3xl opacity-30"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Profile Image */}
      <motion.img
        src="/pic1.jpg" // Replace with your photo path
        alt="Anmol Singh"
        className="rounded-full w-40 h-40 shadow-xl z-10"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Title and Rotating Text */}
      <h1 className="text-5xl font-bold mt-6 text-white z-10">
        Hi, I'm <span className="text-blue-400">Anmol Singh</span>
      </h1>
      <p className="text-xl text-gray-300 mt-4 z-10">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {texts[index]}
        </motion.span>
      </p>

      {/* Call-to-Action */}
      <motion.a
        href="#projects"
        className="mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        Explore My Work
      </motion.a>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-10">
        <motion.div
          className="flex flex-col items-center text-gray-300 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Download Resume Button */}
      <motion.a
        href="/resume.pdf" // Replace with the path to your resume file
        download
        className="fixed bottom-5 right-5 bg-blue-600 text-white text-sm px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Download Resume
      </motion.a>
    </div>
  );
};

export default Hero;
