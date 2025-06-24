import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tempo from '../assets/tempo.jpeg';
const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
  title: "Transformer-Based Polymer Property Predictor",
  description: "Built a transformer model to predict polymer properties (e.g., melting point, tensile strength) from SMILES notation using a custom RDKit-based tokenizer. Integrated it with a secure API and React frontend for real-time predictions.",
  tags: ["React", "Node.js", "MongoDB", "PyTorch", "RDKit"],
  category: "Web App",
  image: "https://plus.unsplash.com/premium_photo-1681426676206-0f2c02b48aff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "#"
    },
    {
      id: 2,
  title: "Chat-With-Author: AI-Powered Research Q&A",
  description: "Developed an AI Q&A platform for books and research papers using semantic search with Pinecone and QLoRA-based LLMs. Delivered accurate, citation-based responses in a user-friendly Streamlit interface.",
  tags: ["MERN", "Pinecone", "OpenAI API", "QLoRA", "Streamlit"],
  category: "AI/NLP App",
  image: "https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "#"
    },
    {
      id: 3,
  title: "Online Platform for Project Showcases",
  description: "Created a full-stack platform for students to submit, browse, and filter academic projects. Integrated Firebase for authentication and optimized the UI for both desktop and mobile experiences.",
  tags: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
  category: "Web App",
  image: tempo,
  link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Custom site with animations and responsive design",
      tags: ["React", "Tailwind", "Framer"],
      category: "Web Design",
      image: "https://plus.unsplash.com/premium_vector-1682309081920-d2725d3e620c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#fefefe] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-black mb-4">My Projects</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-[#1b1b1b] text-white'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-white hover:text-gray-300 font-medium flex items-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
