import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
const Contact = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-20 px-6 bg-gradient-to-r from-gray-800 to-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Connect with Me
      </h2>

      <form
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
        method="POST"
        className="max-w-2xl mx-auto mt-10 bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>

      {/* Move to Top Button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 border-2 border-white text-white rounded-full backdrop-blur-md bg-transparent hover:bg-white hover:text-gray-900 transition duration-300 z-50"
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default Contact;
