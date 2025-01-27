import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["JavaScript", "React", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Spring Boot"] },
    {
      category: "Machine Learning",
      items: ["Python", "TensorFlow", "PyTorch"],
    },
    { category: "Databases", items: ["SQL", "MongoDB"] },
    { category: "Cloud", items: ["AWS", "Azure"] },
  ];

  return (
    <div
      id="skills"
      className="h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center px-6"
    >
      <motion.div
        className="relative w-full max-w-7xl px-6 py-10 bg-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-white mb-6 text-center tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My <span className="text-purple-600">Skills</span>
        </motion.h2>

        <p className="text-lg text-white mb-10 text-center">
          A showcase of the technologies and tools I excel at.
        </p>

        {/* Skills List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start space-y-4 p-6 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
              }}
            >
              {/* Category */}
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {skill.category}
              </motion.h3>

              {/* Items */}
              <ul className="space-y-2 pl-4">
                {skill.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="text-lg flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-yellow-400">•</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
