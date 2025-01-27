import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 px-6"
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-wide font-poppins drop-shadow-xl">
          About Me
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed font-lora font-light mb-8">
          An accomplished and meticulous software engineering graduate with a
          passion for crafting innovative solutions, seeking an intellectually
          stimulating position as a Software Engineer. Eager to apply my
          proficiency in programming, problem-solving, and teamwork to
          contribute to groundbreaking projects within a dynamic and
          growth-oriented organization. Committed to lifelong learning and
          staying abreast of the latest advancements in software engineering.
        </p>
        <a
          href="#contact"
          className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
};

export default About;
