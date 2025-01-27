import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch } from "react-icons/fa";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/anmolsinghdz/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories.");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="py-20 bg-gray-900 text-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 text-xl">
          {error} Please try again later.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {repos.map((repo) => (
            <Tilt
              key={repo.id}
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="lightblue"
              glarePosition="all"
              scale={1.05}
              className="w-full"
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-64 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {repo.name}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {repo.description || "No description available."}
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-300 text-sm">
                  <span>
                    <FaStar className="inline-block mr-1" />
                    {repo.stargazers_count || 0} Stars
                  </span>
                  <span>
                    <FaCodeBranch className="inline-block mr-1" />
                    {repo.forks_count || 0} Forks
                  </span>
                </div>
                {repo.language && (
                  <span className="mt-2 inline-block px-3 py-1 bg-blue-600 text-xs rounded-full text-white">
                    {repo.language}
                  </span>
                )}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center py-2 px-4 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 transition duration-300"
                >
                  View on GitHub
                </a>
              </motion.div>
            </Tilt>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
